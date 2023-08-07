// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCoTiHaUtOLEJ4QHK1AN0Jlqn3B0_pMSc4",
  authDomain: "gofer-9f589.firebaseapp.com",
  projectId: "gofer-9f589",
  storageBucket: "gofer-9f589.appspot.com",
  messagingSenderId: "347637832247",
  appId: "1:347637832247:web:182c256572e9224826bdb2",
  measurementId: "G-REZDTYXL1S"
};

// Check if Firebase app is already initialized
if (!firebase.apps.length) {
    // Initialize Firebase
    initializeApp(firebaseConfig);
  }

export default firebaseConfig;
