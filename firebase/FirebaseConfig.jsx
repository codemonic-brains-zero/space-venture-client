// src/firebase/FirebaseConfig.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Ensure your environment variable is correctly set in .env file
const firebaseConfig = {
    apiKey: import.meta.env.VITE_SPACE_VENTURE_API,
    authDomain: "space-venture-ca032.firebaseapp.com",
    projectId: "space-venture-ca032",
    storageBucket: "space-venture-ca032.appspot.com",
    messagingSenderId: "872397064416",
    appId: "1:872397064416:web:22e5b627496461de70a885",
    measurementId: "G-6JVJSYRYC9"
};

// Initialize Firebase app
const app = initializeApp(firebaseConfig);

// Initialize Firebase Auth and Firestore
const auth = getAuth(app);
const fireDB = getFirestore(app);

// Export Firebase services
export { auth, fireDB };

// Export Google Auth Provider
export const googleProvider = new GoogleAuthProvider();
