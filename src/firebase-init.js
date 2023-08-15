import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.VUE_FIREBASE_API_KEY,
  authDomain: "clone-de3c9.firebaseapp.com",
  projectId: "clone-de3c9",
  storageBucket: "clone-de3c9.appspot.com",
  messagingSenderId: "241328278431",
  appId: "1:241328278431:web:5440e30b5cdf61dfd70baa",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
