// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-58600.firebaseapp.com",
  projectId: "mern-estate-58600",
  storageBucket: "mern-estate-58600.firebasestorage.app",
  messagingSenderId: "333810998894",
  appId: "1:333810998894:web:a0bd94e8fd33dd0c8ad07f",
  measurementId: "G-FDHZEK0XLM"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);