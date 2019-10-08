// import * as admin from "firebase-admin";

// admin.initializeApp();

// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
import * as firebase from "firebase/app";

// Add the Firebase services that you want to use
// import "firebase/auth";
// import "firebase/firestore";

firebase.initializeApp();

export const db = firebase.database();
export const storage = firebase.storage();

// const firebaseConfig  = {
//     apiKey: "AIzaSyCmSsSBRrgoUFNW7fhPPXZAGQ35E_q5vIM",
//     authDomain: "urbech-admin.firebaseapp.com",
//     databaseURL: "https://urbech-admin.firebaseio.com",
//     projectId: "urbech-admin",
//     storageBucket: "urbech-admin.appspot.com",
//     messagingSenderId: "296087274143",
//     appId: "1:296087274143:web:902442f2a2060fc4"
// };
// firebase.initializeApp(firebaseConfig);
// export const database = firebase.database();
// export const storage = firebase.storage();
// export const firebaseAuth = firebase.auth();
// firebaseAuth.setPersistence(firebase.auth.Auth.Persistence.LOCAL);
