// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage} from "firebase/storage"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "ai-course-genx.firebaseapp.com",
  projectId: "ai-course-genx",
  storageBucket: "ai-course-genx.appspot.com",
  messagingSenderId: "490382028853",
  appId: "1:490382028853:web:3631b3e079009646a4417c",
  measurementId: "G-0B2SJN3YVV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage=getStorage(app)