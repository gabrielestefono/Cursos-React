// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAOWFg2v9lU9k5B_BFnzm8GVqb0jHktSeI",
  authDomain: "miniblog-663c7.firebaseapp.com",
  projectId: "miniblog-663c7",
  storageBucket: "miniblog-663c7.appspot.com",
  messagingSenderId: "610636113072",
  appId: "1:610636113072:web:bc14232b090b237a088775"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db, app };