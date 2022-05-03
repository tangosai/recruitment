import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAxPsvfhJALD-KTHRCgk2gSlDLzZLj22cU",
  authDomain: "recruitment-76fb3.firebaseapp.com",
  projectId: "recruitment-76fb3",
  storageBucket: "recruitment-76fb3.appspot.com",
  messagingSenderId: "320231127005",
  appId: "1:320231127005:web:651a47ab75039bba976834",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);
