import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAtvFuiTCV9rAVap7iyjA1HMbEfpHqCx08",
  authDomain: "weather-app-41d58.firebaseapp.com",
  projectId: "weather-app-41d58",
  storageBucket: "weather-app-41d58.appspot.com",
  messagingSenderId: "234804559860",
  appId: "1:234804559860:web:1e7b36a48d6bb48bfd43a1",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);
