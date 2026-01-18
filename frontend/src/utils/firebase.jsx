import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.AUTH_DOMIAN,
  projectId: process.env.PORJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGEING_SENDER_ID,
  appId: process.env.APP_ID,
  measurementId: process.env.measurementId
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const Provider = new GoogleAuthProvider();

export {auth,Provider};
