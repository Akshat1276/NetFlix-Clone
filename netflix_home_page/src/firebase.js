import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth"
import { addDoc, getFirestore, collection } from "firebase/firestore"
import { toast } from "react-toastify"

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

const signup = async(name, email, password)=>{
    try{
        const res = await createUserWithEmailAndPassword(auth, email, password);
        const user = res.user;
        await addDoc(collection(db, "user"), {
            uid: user.uid,
            name,
            authProvider: "local",
            email,
        });
    } catch(error){
        console.log(error);
        toast.error(error.code.split('/')[1].split('-').join(" "));
    }
}
const login = async (email, password)=>{
    try{
        await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
        console.log(error);
        toast.error(error.code.split('/')[1].split('-').join(" "));
    }
}

const logout = async ()=>{
    signOut(auth);
}

export {auth, db, login, signup, logout};
