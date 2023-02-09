// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBOxR2qULOL83cxpiVULdtmA4ZzwT1otEk",
  authDomain: "pruebacoder-e8c34.firebaseapp.com",
  projectId: "pruebacoder-e8c34",
  storageBucket: "pruebacoder-e8c34.appspot.com",
  messagingSenderId: "112845086525",
  appId: "1:112845086525:web:4476ae9f25bbcaf6272f54"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);