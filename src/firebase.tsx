// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA-0jogNu-p_hnB1Nfd7OizhrMOLb0IwAw",
  authDomain: "dairy-75183.firebaseapp.com",
  projectId: "dairy-75183",
  storageBucket: "dairy-75183.appspot.com",
  messagingSenderId: "1091954066668",
  appId: "1:1091954066668:web:6a48dededbfb9a9fd611c9",
  measurementId: "G-T6QK508R9R",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
