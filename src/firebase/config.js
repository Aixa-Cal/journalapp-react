import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore/lite';
import { initializeApp } from "firebase/app";



// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDDGJjG0BdLL8ffXNJ2IrstN9dzX9cvaxo",
  authDomain: "react-cursos-8be98.firebaseapp.com",
  projectId: "react-cursos-8be98",
  storageBucket: "react-cursos-8be98.appspot.com",
  messagingSenderId: "121720677591",
  appId: "1:121720677591:web:337e51cf8958381f1d7c92"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp)