// Initialize Cloud Firestore through Firebase
import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

const firebaseApp = initializeApp({
  apiKey: "AIzaSyDo3OhJmJJCaJH9vOMBwKhLpEpzV7Mtq6s",
  authDomain: "login-cd93a.firebaseapp.com",
  projectId: "login-cd93a",
  storageBucket: "login-cd93a.appspot.com",
  messagingSenderId: "59703576242",
  appId: "1:59703576242:web:0803578af75a8d89b4ebab",
  measurementId: "G-F1H4KE1DSD"
});

const db = getFirestore();
export default db