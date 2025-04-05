
import { initializeApp, getApp, getApps } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";



const firebaseConfig = {
  apiKey: "AIzaSyAWpZhA60Qcse5sSCaEnbvxgSe8t0Zz7rY",
  authDomain: "upreper.firebaseapp.com",
  projectId: "upreper",
  storageBucket: "upreper.firebasestorage.app",
  messagingSenderId: "772556499185",
  appId: "1:772556499185:web:d3e01fd0fa68e643c26150",
  measurementId: "G-4CJV9W03JV"
};


const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);

export const db = getFirestore(app);

