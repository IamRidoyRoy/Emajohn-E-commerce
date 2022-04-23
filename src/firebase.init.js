// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBquS-cahpiLqyAvPOkCTYCx_YwAA8wpQM",
    authDomain: "emajohn-e-commerce.firebaseapp.com",
    projectId: "emajohn-e-commerce",
    storageBucket: "emajohn-e-commerce.appspot.com",
    messagingSenderId: "133765109676",
    appId: "1:133765109676:web:e22654e73649c6eefb8c09"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;