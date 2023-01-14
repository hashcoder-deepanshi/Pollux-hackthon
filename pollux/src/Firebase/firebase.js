import { initializeApp } from "firebase/app";
import {getAuth } from "firebase/auth";
import {getFirestore} from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyDxDvJuDr_HKsy234R6wPkNRbyCE8ETvbc",
  authDomain: "how-to-project-9304b.firebaseapp.com",
  projectId: "how-to-project-9304b",
  storageBucket: "how-to-project-9304b.appspot.com",
  messagingSenderId: "659916051270",
  appId: "1:659916051270:web:7340470d16929231494b47",
  measurementId: "G-KDJ3GM6MSC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db= getFirestore(app);