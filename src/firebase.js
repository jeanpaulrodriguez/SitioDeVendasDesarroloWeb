
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDIrOkBt4wf8HCGPvZT_swBwR2cyFQAUoc",
    authDomain: "desarolloweb-c0b73.firebaseapp.com",
    projectId: "desarolloweb-c0b73",
    storageBucket: "desarolloweb-c0b73.appspot.com",
    messagingSenderId: "977331783854",
    appId: "1:977331783854:web:cfffcda96c3c35f6b4453f",
    measurementId: "G-43SERJQJCX"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {db , auth};