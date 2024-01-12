// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBVjK7xYosLwed6wFMdCbfAk48POFqxm40",
  authDomain: "login-4a54c.firebaseapp.com",
  projectId: "login-4a54c",
  storageBucket: "login-4a54c.appspot.com",
  messagingSenderId: "528413447146",
  appId: "1:528413447146:web:fc065e82a0cb859f28d893",
  measurementId: "G-C0KDZJD5MS",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const db = getFirestore(app);
export const auth = getAuth(app);
