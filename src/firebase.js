import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAqBBFeMIGjp09sBF57uWvw8FQevW2QI14",
  authDomain: "my-react-app-6b620.firebaseapp.com",
  projectId: "my-react-app-6b620",
  storageBucket: "my-react-app-6b620.firebasestorage.app",
  messagingSenderId: "555832199199",
  appId: "1:555832199199:web:e86b5a6b4c76a911b52d2a"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();