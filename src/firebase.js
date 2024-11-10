import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getStorage } from "firebase/storage"; // Import Firebase Storage

const firebaseConfig = {
  apiKey: "AIzaSyAR1Xo__FePB0FKTuZBnV0V-ksiM_pSLJo",
  authDomain: "ioayobami.firebaseapp.com",
  projectId: "ioayobami",
  storageBucket: "ioayobami.appspot.com",
  messagingSenderId: "669053327345",
  appId: "1:669053327345:web:3cef6ce22808b3f7629650",
  measurementId: "G-ES2Y33GNLJ",
  databaseURL: "https://ioayobami-default-rtdb.firebaseio.com/"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const storage = getStorage(app); // Initialize Firebase Storage

export { database, storage }; // Export both database and storage
