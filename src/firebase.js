// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCn3MHCGBnW8l23EvEqgtQHjZp2pl9Djko",
  authDomain: "portfolio-1f6f3.firebaseapp.com",
  projectId: "portfolio-1f6f3",
  storageBucket: "portfolio-1f6f3.appspot.com",
  messagingSenderId: "295005676313",
  appId: "1:295005676313:web:431ddc8deeab3337e61b88",
  measurementId: "G-H5JM8932L9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);