// version 10
import { initializeApp } from "firebase/app";
import { getFirestore, Timestamp } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBxYs3YdUer0T824ck9lVtu10tYartVxVI",
  authDomain: "mymoney-2c3ef.firebaseapp.com",
  projectId: "mymoney-2c3ef",
  storageBucket: "mymoney-2c3ef.appspot.com",
  messagingSenderId: "401809915735",
  appId: "1:401809915735:web:ed5f9f8cf045ec34214812",
};

// init firebase
// version 10
const app = initializeApp(firebaseConfig);
const projectFirestore = getFirestore(app);
const projectAuth = getAuth(app);
const timestamp = Timestamp;
// const timestamp = firebase.firestore.Timestamp;

export { projectFirestore, projectAuth, timestamp };
