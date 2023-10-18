// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyANIXTkxQsenbFKWgWJrdDwprhcwj-jsCI",
  authDomain: "react-firebase-86d56.firebaseapp.com",
  projectId: "react-firebase-86d56",
  storageBucket: "react-firebase-86d56.appspot.com",
  messagingSenderId: "689429917647",
  appId: "1:689429917647:web:1669cd6cbfcbcd24ccecba",
  measurementId: "G-LS789TJRMS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
export const db= getFirestore(app);