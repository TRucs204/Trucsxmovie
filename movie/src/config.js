// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDm-e_hDYMLMr64_iqHNvKqENCaQJufEI0",
  authDomain: "myproject-e30fc.firebaseapp.com",
  projectId: "myproject-e30fc",
  storageBucket: "myproject-e30fc.firebasestorage.app",
  messagingSenderId: "207441051831",
  appId: "1:207441051831:web:5dcc0ea838c75187c68d32",
  measurementId: "G-P48LY2MVBH",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app, auth };
