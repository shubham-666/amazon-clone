
import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore';
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB5w_twIrImEzLvdyakZnyC3ZbE_pHG_j0",
  authDomain: "challenge-44c13.firebaseapp.com",
  projectId: "challenge-44c13",
  storageBucket: "challenge-44c13.appspot.com",
  messagingSenderId: "793295607062",
  appId: "1:793295607062:web:5301b311620befbdd3ac37",
  measurementId: "G-0C8X2QW25L"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };

// //pngimg.com/uploads/amazon/amazon_PNG21.png