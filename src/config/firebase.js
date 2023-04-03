import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: "AIzaSyDh7M_2mBFRM7WMe19YIpXpfaNvvlPGLTc",
  authDomain: "tiktok---jornada-eff7d.firebaseapp.com",
  projectId: "tiktok---jornada-eff7d",
  storageBucket: "tiktok---jornada-eff7d.appspot.com",
  messagingSenderId: "405308804763",
  appId: "1:405308804763:web:771d342665deaaaa20803e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;