// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-app-ef66e.firebaseapp.com",
  projectId: "mern-blog-app-ef66e",
  storageBucket: "mern-blog-app-ef66e.appspot.com",
  messagingSenderId: "425976148851",
  appId: "1:425976148851:web:ee6508746ce1bdfec4cb06"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
