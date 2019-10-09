// import * as admin from "firebase-admin";

// admin.initializeApp();

// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
import * as firebase from "firebase/app";

// Add the Firebase services that you want to use
// import "firebase/auth";
// import "firebase/firestore";


const firebaseConfig = {
	apiKey : "AIzaSyDbGQTBG6EHxfqZGXoCw41dEgCtLMRKuWQ",
	authDomain : "https://shade-design.firebaseapp.com",
	databaseURL : "https://shade-design.firebaseio.com",
	storageBucket : "gs://shade-design.appspot.com/",
//     databaseURL: "https://urbech-admin.firebaseio.com",
//     projectId: "urbech-admin",
//     storageBucket: "urbech-admin.appspot.com",
};

firebase.initializeApp(firebaseConfig);

export const db = firebase.database();
export const storage = firebase.storage();
