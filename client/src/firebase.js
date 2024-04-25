// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-568f1.firebaseapp.com",
  projectId: "mern-estate-568f1",
  storageBucket: "mern-estate-568f1.appspot.com",
  messagingSenderId: "95420234837",
  appId: "1:95420234837:web:abcab6d4a28b5f6bc028dc"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);