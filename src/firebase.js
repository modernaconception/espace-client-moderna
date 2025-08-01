
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBg9cMNK3v2Vho5L-0aABmBOLP1wWLTxVU",
  authDomain: "espace-client-moderna.firebaseapp.com",
  projectId: "espace-client-moderna",
  storageBucket: "espace-client-moderna.appspot.com",
  messagingSenderId: "361928338584",
  appId: "1:361928338584:web:7d6cf1afaa83cd3d5334ed",
  measurementId: "G-6E2QD7MZDZ"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
