import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { collection, doc, setDoc } from "firebase/firestore";
import { getAuth, createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { fireDB } from "../../../../firebase/FirebaseConfig"; // Import Firestore function
import { FaArrowLeft } from "react-icons/fa"; // Import back icon from react-icons

const SignUp = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        phone: "",
        userType: "", // No default userType
        address: "",
        organization: "",
        dob: "",
        profilePicture: null,
    });

    const [multiMessManagerRegistered, setMultiMessManagerRegistered] = useState(false);
    const [error, setError] = useState(""); // Error state for displaying form errors
    const navigate = useNavigate();
    const auth = getAuth(); // Initialize Firebase Authentication
    const googleProvider = new GoogleAuthProvider(); // Initialize Google Auth Provider

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleFileChange = (e) => {
        setFormData((prevData) => ({
            ...prevData,
            profilePicture: e.target.files[0],
        }));
    };

    const handleUserTypeChange = (userType) => {
        if (userType === "Multi-Mess Manager" && multiMessManagerRegistered) return;
        setFormData((prevData) => ({
            ...prevData,
            userType,
        }));
        if (userType === "Multi-Mess Manager") setMultiMessManagerRegistered(true);
    };

    const validateForm = () => {
        const { name, email, password, phone, userType } = formData;
        if (!name || !email || !password || !phone || !userType) {
            setError("All fields are required.");
            return false;
        }
        if (!/\S+@\S+\.\S+/.test(email)) {
            setError("Invalid email format.");
            return false;
        }
        if (password.length < 6) {
            setError("Password should be at least 6 characters long.");
            return false;
        }
        return true;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validateForm()) return; // Validate form data before submission

        try {
            // Create user with email and password
            const { email, password } = formData;
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;

            let profilePictureUrl = "";

            // Upload profile picture to the backend server if it exists
            if (formData.profilePicture) {
                const formDataToUpload = new FormData();
                formDataToUpload.append("profilePicture", formData.profilePicture);

                try {
                    const response = await fetch("http://localhost:5000/database", {
                        method: "POST",
                        body: formDataToUpload,
                    });

                    if (!response.ok) {
                        throw new Error("Failed to upload profile picture.");
                    }

                    const result = await response.json();
                    profilePictureUrl = result.filePath; // Ensure the correct file path is returned
                } catch (uploadError) {
                    console.error("Profile picture upload error:", uploadError);
                    setError("Failed to upload profile picture.");
                    return;
                }
            }

            // Prepare data to be added to the database
            const userData = {
                uid: user.uid, // Firebase Authentication user ID
                name: formData.name,
                email: formData.email,
                phone: formData.phone,
                userType: formData.userType, // Ensure userType is included, but no default value
                address: formData.address,
                organization: formData.organization,
                dob: formData.dob,
                profilePicture: profilePictureUrl,
            };

            // Add user data to the 'users' collection in Firestore
            await setDoc(doc(fireDB, "users", user.uid), userData);

            console.log("User data written to Firestore:", userData);
            navigate("/home");
        } catch (error) {
            setError("Error during registration. Please try again.");
            console.error("Error during registration:", error);
        }
    };

    const handleGoogleSignIn = async () => {
        try {
            const result = await signInWithPopup(auth, googleProvider);
            const user = result.user;

            // Prepare data to be added to the database
            const userData = {
                uid: user.uid, // Firebase Authentication user ID
                name: user.displayName,
                email: user.email,
                phone: "", // Set default values or leave as is
                userType: "", // No default value for userType
                address: "",
                organization: "",
                dob: "",
                profilePicture: user.photoURL,
            };

            // Add user data to the 'users' collection in Firestore
            await setDoc(doc(fireDB, "users", user.uid), userData);

            console.log("User data written to Firestore:", userData);
            navigate("/home");
        } catch (error) {
            setError("Error during Google Sign-In. Please try again.");
            console.error("Error during Google Sign-In:", error);
        }
    };

    return (
        <div className="min-h-screen flex flex-col bg-gray-100 p-4">
            <div className="max-w-3xl w-full bg-gray-200 p-8 rounded-lg shadow-md mx-auto">

                <div className="flex items-center mb-6">
                    <button
                        onClick={() => navigate("/login")}
                        className="text-gray-600 hover:text-gray-900 mr-4"
                    >
                        <FaArrowLeft className="text-2xl" />
                    </button>
                    <h1 className="text-2xl font-bold flex-grow text-center">
                    {formData.userType ? `${formData.userType} Registration` : "Registration Form"}
                </h1>
                </div>
                <div className="flex space-x-4 mb-6">
                    <button
                        type="button"
                        onClick={() => handleUserTypeChange("User")}
                        className={`w-full md:w-1/3 mb-2 md:mb-0 h-16 flex items-center justify-center rounded-lg text-lg font-bold ${formData.userType === "User"
                            ? "bg-purple-500 text-white hover:border hover:border-purple-800 hover:text-purple-800 hover:bg-white"
                            : "bg-purple-200 text-purple-800 hover:border hover:border-purple-800 hover:text-purple-800 hover:bg-white"
                            }`}
                    >
                        User
                    </button>
                    <button
                        type="button"
                        onClick={() => handleUserTypeChange("Residency Owner")}
                        className={`w-full md:w-1/3 mb-2 md:mb-0 h-16 flex items-center justify-center rounded-lg text-lg font-bold ${formData.userType === "Residency Owner"
                            ? "bg-blue-500 text-white hover:border hover:border-blue-500 hover:text-blue-800 hover:bg-white"
                            : "bg-blue-200 text-blue-800 hover:border hover:border-blue-500 hover:text-blue-800 hover:bg-white"
                            }`}
                    >
                        Residency Owner
                    </button>
                    {!multiMessManagerRegistered && (
                        <button
                            type="button"
                            onClick={() => handleUserTypeChange("Multi-Mess Manager")}
                            className={`w-full md:w-1/3 h-16 flex items-center justify-center rounded-lg text-lg font-bold ${formData.userType === "Multi-Mess Manager"
                                ? "bg-green-500 text-white hover:border hover:border-green-800 hover:text-green-800 hover:bg-white"
                                : "bg-green-200 text-green-800 hover:border hover:border-green-800 hover:text-green-800 hover:bg-white"
                                }`}
                        >
                            Multi-Mess Manager
                        </button>
                    )}
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Display Form Error */}
                    {error && <p className="text-red-500 text-center">{error}</p>}

                    {/* Full Name and Date of Birth */}
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                                Full Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="dob" className="block text-sm font-medium text-gray-700">
                                Date of Birth
                            </label>
                            <input
                                type="date"
                                id="dob"
                                name="dob"
                                value={formData.dob}
                                onChange={handleChange}
                                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                    </div>

                    {/* Email and Password */}
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                                Password
                            </label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                required
                            />
                        </div>
                    </div>

                    {/* Phone Number */}
                    <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                            Phone Number
                        </label>
                        <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>

                    {/* Address and Organization */}
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label htmlFor="address" className="block text-sm font-medium text-gray-700">
                                Address
                            </label>
                            <input
                                type="text"
                                id="address"
                                name="address"
                                value={formData.address}
                                onChange={handleChange}
                                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                        <div>
                            <label htmlFor="organization" className="block text-sm font-medium text-gray-700">
                                Organization
                            </label>
                            <input
                                type="text"
                                id="organization"
                                name="organization"
                                value={formData.organization}
                                onChange={handleChange}
                                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                    </div>

                    {/* Profile Picture Upload */}
                    <div>
                        <label htmlFor="profilePicture" className="block text-sm font-medium text-gray-700">
                            Profile Picture
                        </label>
                        <input
                            type="file"
                            id="profilePicture"
                            name="profilePicture"
                            onChange={handleFileChange}
                            className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                        />
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white p-2 rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        Register
                    </button>
                </form>

                {/* Google Sign-In Button */}
                <div className="mt-6 text-center">
                    <button
                        type="button"
                        onClick={handleGoogleSignIn}
                        className="w-full bg-red-600 text-white p-2 rounded-lg shadow-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500"
                    >
                        Sign In with Google
                    </button>
                </div>

                {/* Login Link */}
                <div className="mt-4 text-center">
                    <p className="text-gray-600">Already have an account?</p>
                    <a href="/login" className="text-blue-600 hover:underline">Login here</a>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
