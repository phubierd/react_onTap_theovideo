

import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCZd7imCmOX94Exrz_pbN9x2-F_lB1HhV8",
    authDomain: "todo-firebase-3db88.firebaseapp.com",
    projectId: "todo-firebase-3db88",
    storageBucket: "todo-firebase-3db88.appspot.com",
    messagingSenderId: "15594668286",
    appId: "1:15594668286:web:094a3b568803e81f3665af",
    measurementId: "G-SPQN5C9NFF"
});

const db = firebaseApp.firestore();

export default db;
