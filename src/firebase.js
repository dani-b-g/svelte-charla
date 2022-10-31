// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDzxPNWKgmUqjbcKN-D1FWL3dTbhCLdf1I",
  authDomain: "svelte-charla.firebaseapp.com",
  databaseURL:
    "https://svelte-charla-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "svelte-charla",
  storageBucket: "svelte-charla.appspot.com",
  messagingSenderId: "463075552952",
  appId: "1:463075552952:web:0d4c5d309b33b8177e4e4d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
