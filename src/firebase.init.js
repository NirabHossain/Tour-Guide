// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB--9BhDqbFTTdNbYPgJWXmDZ8P34pIvbk",
  authDomain: "tour-guide-58515.firebaseapp.com",
  projectId: "tour-guide-58515",
  storageBucket: "tour-guide-58515.appspot.com",
  messagingSenderId: "438949298126",
  appId: "1:438949298126:web:172aeb6bfd36ffa10cf59f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;