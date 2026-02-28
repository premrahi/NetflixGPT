

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDxSfrV6hN6c6DyI0B6_-WuYLt8Y7BDWF0",
  authDomain: "netflix-gpt-gulabjaamun.firebaseapp.com",
  projectId: "netflix-gpt-gulabjaamun",
  storageBucket: "netflix-gpt-gulabjaamun.firebasestorage.app",
  messagingSenderId: "638114759630",
  appId: "1:638114759630:web:8769adfce3d6238f72a19f",
  measurementId: "G-SWEWBP1CCR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);