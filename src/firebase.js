import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import 'firebase/compat/auth';

const firebaseConfig = {
    apiKey: "AIzaSyD7tQHgCY2zVVucRe_fRReRUisef47SMMI",
    authDomain: "clone-6fb08.firebaseapp.com",
    projectId: "clone-6fb08",
    storageBucket: "clone-6fb08.appspot.com",
    messagingSenderId: "2168356391",
    appId: "1:2168356391:web:15f3ccd43fae4d6a8a1802",
    measurementId: "G-TSLYEX3TBH"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db, auth};