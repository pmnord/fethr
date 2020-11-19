import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: process.env.REACT_APP_firebase_apiKey,
  authDomain: "fethr-db.firebaseapp.com",
  databaseURL: "https://fethr-db.firebaseio.com",
  projectId: "fethr-db",
  storageBucket: "fethr-db.appspot.com",
  messagingSenderId: process.env.REACT_APP_messagingSenderId,
  appId: process.env.REACT_APP_appId,
  measurementId: process.env.REACT_APP_measurementId,
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();  // Initialize GoogleAuthProvider from firebase
provider.setCustomParameters({ prompt: "select_account" }); // Always trigger the google select account popup

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
