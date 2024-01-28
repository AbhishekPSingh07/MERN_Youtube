
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth ,GoogleAuthProvider} from 'firebase/auth'

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "auth-bfa9f.firebaseapp.com",
  projectId: "auth-bfa9f",
  storageBucket: "auth-bfa9f.appspot.com",
  messagingSenderId: "183847982370",
  appId: "1:183847982370:web:d5fb5a5386d95b705f417b",
  measurementId: "G-YMCGXL9PXG"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
export const provider = new GoogleAuthProvider();

export default app;