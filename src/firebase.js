
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyDw9hYM1Xfh5VV3PCio4kQS8XD3d4QFWQQ",
  authDomain: "blueprint-e65e7.firebaseapp.com",
  projectId: "blueprint-e65e7",
  storageBucket: "blueprint-e65e7.appspot.com",
  messagingSenderId: "467520123270",
  appId: "1:467520123270:web:effd61eb49f854a85d3c07",
  measurementId: "G-1NWB7FPPCG"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const storage = getStorage()
export const db = getFirestore()
export const auth = getAuth();