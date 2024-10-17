import { initializeApp, getApps } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Firebase configuration using environment variables
const firebaseConfig = {
    apiKey: import.meta.env.VITE_SPACE_VENTURE_API,
    authDomain: "space-venture-client.firebaseapp.com",
    projectId: "space-venture-client",
    storageBucket: "space-venture-client.appspot.com",
    messagingSenderId: "130320403780",
    appId: "1:130320403780:web:b58ca95a9cfb69fdaa9b11",
    measurementId: "G-4SN96K7GJ3"
};

// Initialize Firebase only if it hasn't been initialized yet
let app;
if (!getApps().length) {
    app = initializeApp(firebaseConfig);
} else {
    app = getApps()[0]; // Reuse the already initialized app
}

// Initialize Firebase Auth and Firestore
const auth = getAuth(app);
const fireDB = getFirestore(app);

// Export Firebase services
export { auth, fireDB };

// Export Google Auth Provider
export const googleProvider = new GoogleAuthProvider();
