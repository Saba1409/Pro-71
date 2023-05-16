import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCV4l_324M48WeRYE0eAMaAY78GljfOdxY",
  authDomain: "e-library-35b5d.firebaseapp.com",
  projectId: "e-library-35b5d",
  storageBucket: "e-library-35b5d.appspot.com",
  messagingSenderId: "372713644573",
  appId: "1:372713644573:web:6075161155866abd1a1cf4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
