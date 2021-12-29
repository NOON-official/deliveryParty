import { initializeApp } from "firebase/app";
import { getAuth } from "fiebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBWmpq9Gkbp5JbciuXkJ1TcvESJo8_evRI",
  authDomain: "deliveryparty-c7859.firebaseapp.com",
  projectId: "deliveryparty-c7859",
  storageBucket: "deliveryparty-c7859.appspot.com",
  messagingSenderId: "150626721997",
  appId: "1:150626721997:web:8f199b18b16b8579de4984",
  measurementId: "G-9EHXCH166J",
};

const firebaseApp = initializeApp(firebaseConfig);
const firebaseAuth = getAuth(firebaseApp);
const db = getFirestore(firebaseApp);

module.exports = { firebaseConfig, firebaseApp, firebaseAuth, db };