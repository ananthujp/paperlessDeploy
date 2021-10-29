
import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
import { GoogleAuthProvider,getAuth} from "firebase/auth";

const firebaseApp = initializeApp({
    apiKey: "AIzaSyBntTuvjK9rPZPaIL_RuL54ycUSO3y3T2o",
    authDomain: "greet-7492d.firebaseapp.com",
    projectId: "greet-7492d",
    storageBucket: "greet-7492d.appspot.com",
    messagingSenderId: "524843936635",
    appId: "1:524843936635:web:36874196552ee8d8236bde",
    measurementId: "G-WFDZBLVSN4"
});
  //const app = initializeApp(firebaseConfig);
  //const app= !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();
  //let db = app.firestore();
 
  //const ReDocs=onSnapshot(collection(db,'docs'));
  const provider = new GoogleAuthProvider();
  const auth = getAuth();
  export {auth,provider};
  export  const db = getFirestore(firebaseApp);;