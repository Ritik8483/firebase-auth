import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyA5RoFHP7S08hdZ3HgoeHq7EJrI8FE5Nuk",
  authDomain: "react-auth-dd54f.firebaseapp.com",
  projectId: "react-auth-dd54f",
  storageBucket: "react-auth-dd54f.appspot.com",
  messagingSenderId: "1007838415722",
  appId: "1:1007838415722:web:82345ae23cca1111e5f313",
  measurementId: "G-LGN46WS5PM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app);
export default app;
