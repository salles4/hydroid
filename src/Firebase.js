import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_apiKey,
  authDomain: import.meta.env.VITE_FIREBASE_authDomain,
  projectId: import.meta.env.VITE_FIREBASE_projectId,
  databaseURL: import.meta.env.VITE_FIREBASE_databaseURL,
  storageBucket: "hydroid-e92d4.appspot.com",
  messagingSenderId: "1076156331828",
  appId: "1:1076156331828:web:ec110d83209eceb050d761"
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export default database;