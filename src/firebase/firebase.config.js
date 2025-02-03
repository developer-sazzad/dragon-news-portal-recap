// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAQ0VcWScsVgqbwUFUL_78pjaIrzMn48qo",
  authDomain: "dragon-news-projects-a027e.firebaseapp.com",
  projectId: "dragon-news-projects-a027e",
  storageBucket: "dragon-news-projects-a027e.firebasestorage.app",
  messagingSenderId: "832088258540",
  appId: "1:832088258540:web:5e903d9cea7fc52db532c9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;