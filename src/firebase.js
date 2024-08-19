// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAQLy3KnOc_iWlIX4XbZw9h8bptZc8c7SY",
  authDomain: "teamknight-ea556.firebaseapp.com",
  projectId: "teamknight-ea556",
  storageBucket: "teamknight-ea556.appspot.com",
  messagingSenderId: "920558139620",
  appId: "1:920558139620:web:2e52fae52db353dc8ad4f1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig); 

const db = getFirestore(app);
console.log('Firestore instance:', db);

export default db;