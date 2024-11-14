import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDZSDaq6pH1xAJHDyKXKxtvEAM-OoArXhY",
  authDomain: "sign-up-d7da9.firebaseapp.com",
  projectId: "sign-up-d7da9",
  storageBucket: "sign-up-d7da9.firebasestorage.app",
  messagingSenderId: "620538694598",
  appId: "1:620538694598:web:9f1187c25dd69207a9c0c7"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
