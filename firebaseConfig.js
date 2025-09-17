import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";

const firebaseConfig = {
  apiKey: "AIzaSyBy-kDPEZOxTMzBBkhsHydYgmIXeV3ttjs",
  authDomain: "coffeingredients.firebaseapp.com",
  projectId: "coffeingredients",
  storageBucket: "coffeingredients.firebasestorage.app",
  messagingSenderId: "253375050531",
  appId: "1:253375050531:web:ef52bece451d89a73b5296",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
