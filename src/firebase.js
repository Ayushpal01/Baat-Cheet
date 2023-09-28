import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDgKZcRA41x7JocQ2Z-eYHlXt0ROYjONMs",
  authDomain: "besideu-476a8.firebaseapp.com",
  projectId: "besideu-476a8",
  storageBucket: "besideu-476a8.appspot.com",
  messagingSenderId: "34410682094",
  appId: "1:34410682094:web:0724d780670d6483dcc5ff"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()
