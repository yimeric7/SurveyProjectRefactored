// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD6FwAvHKZBibZeJUDb6qQePoJbXb2JMGw",
    authDomain: "survey-project-2-4a35a.firebaseapp.com",
    databaseURL: "https://survey-project-2-4a35a-default-rtdb.firebaseio.com",
    projectId: "survey-project-2-4a35a",
    storageBucket: "survey-project-2-4a35a.appspot.com",
    messagingSenderId: "693906019686",
    appId: "1:693906019686:web:c2a0ad48d2d5ccc757a4a7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export { db }

export const auth = getAuth(app)

export default app