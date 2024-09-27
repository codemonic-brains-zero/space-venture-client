import React, { useState } from "react";
import { getAuth, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../contexts/AuthContext";

const Login = () => {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
        userType: "User",
    });
    const [error, setError] = useState("");
    const navigate = useNavigate();
    const { login } = useAuth(); // Context login for email/password sign-in
    const auth = getAuth(); // Firebase Auth instance
    const googleProvider = new GoogleAuthProvider(); // Google Auth provider

    // Function to handle changes in the form
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    // Function to handle user type selection
    const handleUserTypeChange = (userType) => {
        setFormData((prevData) => ({
            ...prevData,
            userType,
        }));
    };

    // Function to handle Google Sign-In
    const handleGoogleSignIn = async () => {
        try {
            const result = await signInWithPopup(auth, googleProvider);
            const user = result.user;
            console.log("User Info:", user);

            // Redirect based on userType
            if (formData.userType === "User") {
                navigate("/user-dashboard");
            } else if (formData.userType === "Residency Owner") {
                navigate("/residency-owner-dashboard");
            } else if (formData.userType === "Multi-Mess Manager") {
                navigate("/multi-mess-manager-dashboard");
            }
        } catch (error) {
            setError("Google Sign-In failed. Please try again.");
            console.error("Google Sign-In error:", error);
        }
    };

    // Function to handle Email/Password login
    const handleSubmit = async (e) => {
        e.preventDefault();
        const { email, password } = formData;

        try {
            await login(email, password); // Uses the login function from the context

            // Redirect based on userType
            if (formData.userType === "User") {
                navigate("/user-dashboard");
            } else if (formData.userType === "Residency Owner") {
                navigate("/residency-owner-dashboard");
            } else if (formData.userType === "Multi-Mess Manager") {
                navigate("/multi-mess-manager-dashboard");
            }
        } catch (err) {
            let errorMessage = "An error occurred during login.";
            if (err.code === "auth/user-not-found") {
                errorMessage = "No user found with this email.";
            } else if (err.code === "auth/wrong-password") {
                errorMessage = "Invalid credentials. Please check your email and password.";
            } else if (err.code === "auth/invalid-email") {
                errorMessage = "Invalid email format.";
            }
            setError(errorMessage);
            console.error("Login error:", err);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
            <div className="max-w-sm w-full bg-gray-200 p-8 rounded-lg shadow-md">
                <h1 className="text-2xl font-bold mb-2 text-center">Login</h1>

                {/* User Type Selection Buttons */}
                <div className="flex space-x-4 mb-6">
                    <button
                        type="button"
                        onClick={() => handleUserTypeChange("User")}
                        className={`w-full mb-2 h-16 flex items-center justify-center rounded-lg text-sm font-bold ${formData.userType === "User"
                            ? "bg-purple-500 text-white hover:border hover:border-purple-800 hover:text-purple-800 hover:bg-white"
                            : "bg-purple-200 text-purple-800 hover:border hover:border-purple-800 hover:text-purple-800 hover:bg-white"
                            }`}
                    >
                        User
                    </button>
                    <button
                        type="button"
                        onClick={() => handleUserTypeChange("Residency Owner")}
                        className={`w-full mb-2 h-16 flex items-center justify-center rounded-lg text-sm font-bold ${formData.userType === "Residency Owner"
                            ? "bg-blue-500 text-white hover:border hover:border-blue-500 hover:text-blue-800 hover:bg-white"
                            : "bg-blue-200 text-blue-800 hover:border hover:border-blue-500 hover:text-blue-800 hover:bg-white"
                            }`}
                    >
                        Residency Owner
                    </button>
                    <button
                        type="button"
                        onClick={() => handleUserTypeChange("Multi-Mess Manager")}
                        className={`w-full h-16 flex items-center justify-center rounded-lg text-sm font-bold ${formData.userType === "Multi-Mess Manager"
                            ? "bg-green-500 text-white hover:border hover:border-green-800 hover:text-green-800 hover:bg-white"
                            : "bg-green-200 text-green-800 hover:border hover:border-green-800 hover:text-green-800 hover:bg-white"
                            }`}
                    >
                        Multi-Mess Manager
                    </button>
                </div>

                <p className="text-center text-sm text-gray-600 mb-6">
                    {formData.userType ? `Please log in as ${formData.userType}` : "Please log in to your account"}
                </p>

                {/* Existing Email/Password Form */}
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 gap-4">
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

                    <div>
                        <button
                            type="submit"
                            className="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-md shadow hover:bg-white hover:text-blue-800 hover:border hover:border-blue-800"
                        >
                            Login
                        </button>
                    </div>
                </form>

                {/* Google Sign-In Button */}
                {/* <p className="mt-4 text-center text-sm text-gray-600">
                    Or login with:
                </p> */}
                <button
                    onClick={handleGoogleSignIn}
                    className="w-full py-2 px-4 bg-red-500 text-white font-semibold rounded-md shadow hover:bg-white hover:text-red-800 hover:border hover:border-red-800 mt-2"
                >
                    Sign In with Google
                </button>

                <p className="mt-4 text-center text-sm text-gray-600">
                    Not registered?{' '}
                    <a
                        href="/signup"
                        className="text-blue-600 hover:text-blue-800"
                    >
                        Create an account
                    </a>
                </p>

                {error && <p className="text-red-500 text-center mt-4">{error}</p>}
            </div>
        </div>
    );
};

export default Login;
