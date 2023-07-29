// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAY2SnJUwlcnIRNcaceZvqxu4NpmojlR98",
    authDomain: "chat-reactjs-7f325.firebaseapp.com",
    projectId: "chat-reactjs-7f325",
    storageBucket: "chat-reactjs-7f325.appspot.com",
    messagingSenderId: "120134096959",
    appId: "1:120134096959:web:4949b34ff7425d6ab3408a"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
// Create a root reference
export const storage = getStorage();
export const db = getFirestore();
