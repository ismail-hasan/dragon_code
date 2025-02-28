// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDIlCLQ2v9dpJp3QYr53sWhyJ4hR-4J5NA",
    authDomain: "itsdragon-b7a44.firebaseapp.com",
    projectId: "itsdragon-b7a44",
    storageBucket: "itsdragon-b7a44.firebasestorage.app",
    messagingSenderId: "864120567005",
    appId: "1:864120567005:web:49e74694be4b7568fad734"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export default auth