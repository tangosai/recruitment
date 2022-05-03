import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: NEXT_PUBLIC_FIREBASE_STRORAGE_BUCKET,
  messagingSenderId: NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: NEXT_PUBLIC_FIREBASE_APP_ID,
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);
