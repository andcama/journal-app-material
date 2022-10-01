// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore/lite'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDxwEbEgmJ-oIfLcAjUQXWI5_zdoJ2AjtU",
  authDomain: "journal-app-44740.firebaseapp.com",
  projectId: "journal-app-44740",
  storageBucket: "journal-app-44740.appspot.com",
  messagingSenderId: "977517760129",
  appId: "1:977517760129:web:632a5e54b827add3e0c780"
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(firebaseApp);
export const FirebaseDB = getFirestore(firebaseApp);