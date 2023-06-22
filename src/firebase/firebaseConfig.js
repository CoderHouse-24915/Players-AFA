import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCApwSXKQHxI1vZA_OCLMM1vHPwaJjlYFE",
  authDomain: "fb-43230-7c3fe.firebaseapp.com",
  projectId: "fb-43230-7c3fe",
  storageBucket: "fb-43230-7c3fe.appspot.com",
  messagingSenderId: "285809636419",
  appId: "1:285809636419:web:ec42917b15780ddc44d0f6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
