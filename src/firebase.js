import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getStorage } from "firebase/storage"; // Import Firebase Storage

const firebaseConfig = {
  apiKey: "AIzaSyCn3MHCGBnW8l23EvEqgtQHjZp2pl9Djko",
  authDomain: "portfolio-1f6f3.firebaseapp.com",
  projectId: "portfolio-1f6f3",
  storageBucket: "portfolio-1f6f3.appspot.com",
  messagingSenderId: "295005676313",
  appId: "1:295005676313:web:431ddc8deeab3337e61b88",
  measurementId: "G-H5JM8932L9",
  databaseURL: "https://portfolio-1f6f3-default-rtdb.firebaseio.com/"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const storage = getStorage(app); // Initialize Firebase Storage

export { database, storage }; // Export both database and storage
