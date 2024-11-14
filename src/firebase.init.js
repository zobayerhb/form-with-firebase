import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// do not configer it publickly
const firebaseConfig = {
  apiKey: "AIzaSyC7qm6FOAT3oB1Dnm3-xA14epXbENQXMlQ",
  authDomain: "email-password-register-2f4ce.firebaseapp.com",
  projectId: "email-password-register-2f4ce",
  storageBucket: "email-password-register-2f4ce.firebasestorage.app",
  messagingSenderId: "285470925641",
  appId: "1:285470925641:web:18953ace443d840a013098"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
