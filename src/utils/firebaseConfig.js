// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBzt4ZMBM4g2KQIRPOYkyFSsHzhOHoCWl4",
  authDomain: "netflixgpt-5ce6d.firebaseapp.com",
  projectId: "netflixgpt-5ce6d",
  storageBucket: "netflixgpt-5ce6d.firebasestorage.app",
  messagingSenderId: "608850025554",
  appId: "1:608850025554:web:08746d3654a33f2365d38b",
  measurementId: "G-SW73BEQRCC",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
