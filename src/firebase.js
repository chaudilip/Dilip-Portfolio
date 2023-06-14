import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
const firebaseConfig = {
  apiKey: "AIzaSyDmD3TP0sQEsBMq-SB1EOFnNYHsfg_H0u8",
  authDomain: "dilip-portfolio-9c852.firebaseapp.com",
  projectId: "dilip-portfolio-9c852",
  storageBucket: "dilip-portfolio-9c852.appspot.com",
  messagingSenderId: "100499751491",
  appId: "1:100499751491:web:8afcf602ee763fcb7ecaf6"
};

export const app = initializeApp(firebaseConfig);
export const db= getFirestore();