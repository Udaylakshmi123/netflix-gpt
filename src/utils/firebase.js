// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAzdM3XtY40hGDJIBnqQbEKUh_5hViVIIE",
  authDomain: "netflixgpt-17095.firebaseapp.com",
  projectId: "netflixgpt-17095",
  storageBucket: "netflixgpt-17095.firebasestorage.app",
  messagingSenderId: "741804273519",
  appId: "1:741804273519:web:4eb16d9846493357b0029a",
  measurementId: "G-RYFZVM5KXQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();