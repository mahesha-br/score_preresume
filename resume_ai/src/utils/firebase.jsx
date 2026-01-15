import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDevBEO95K_JumgOgLWxFsuyCLzMWWgRh0",
  authDomain: "atsresume-a082a.firebaseapp.com",
  projectId: "atsresume-a082a",
  storageBucket: "atsresume-a082a.firebasestorage.app",
  messagingSenderId: "278987813492",
  appId: "1:278987813492:web:5d8a850352856d21ea5721",
  measurementId: "G-R2NLBJJ6WD"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const Provider = new GoogleAuthProvider();

export {auth,Provider};
