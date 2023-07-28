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
    apiKey: "AIzaSyBwS7luXnkhMODA7lxR2BlMqMqEn4yO8ow",
    authDomain: "chat-react-c37b2.firebaseapp.com",
    projectId: "chat-react-c37b2",
    storageBucket: "chat-react-c37b2.appspot.com",
    messagingSenderId: "231230992688",
    appId: "1:231230992688:web:fdf41276b5fa8d082318f5",
    measurementId: "G-2DSM0JPFRH"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
// Create a root reference
export const storage = getStorage();
export const db = getFirestore();
