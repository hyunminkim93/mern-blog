// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: "mern-blog-f289c.firebaseapp.com",
    projectId: "mern-blog-f289c",
    storageBucket: "mern-blog-f289c.appspot.com",
    messagingSenderId: "807198205814",
    appId: "1:807198205814:web:f292c7bdcb2e4b30de7c57"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);