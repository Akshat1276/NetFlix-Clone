import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyBCzJlMDPZxaziRS-kswFKvYDAp_OsITzQ",
  authDomain: "netflix-home-page-a6501.firebaseapp.com",
  projectId: "netflix-home-page-a6501",
  storageBucket: "netflix-home-page-a6501.appspot.com",
  messagingSenderId: "380116796400",
  appId: "1:380116796400:web:08bd03c1a14f6220935335",
  measurementId: "G-4BKLVHQL3M"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);