import React from "react";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../firebase/firebaseConfig";
import { FaGoogle } from "react-icons/fa"; // Importing Google Icon from react-icons


const App = () => {
  const handleGoogle = async (e) => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
    } catch (error) {
      console.error("Google sign-in error:", error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg text-center">
        <h2 className="text-2xl font-semibold mb-4 text-gray-700">
          Sign in to Continue
        </h2>
        <button
          onClick={handleGoogle}
          className="flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-full shadow-md transition duration-300"
        >
          <FaGoogle className="w-6 h-6" /> {/* React Icon used here */}
          Continue with Google
        </button>
      </div>
    </div>
  );
};

export default App;
