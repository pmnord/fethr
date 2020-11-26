import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import runtimeEnv from "@mars/heroku-js-runtime-env";

const env = runtimeEnv();

const config = {
  apiKey: env.REACT_APP_firebase_apiKey,
  authDomain: "fethr-db.firebaseapp.com",
  databaseURL: "https://fethr-db.firebaseio.com",
  projectId: "fethr-db",
  storageBucket: "fethr-db.appspot.com",
  messagingSenderId: env.REACT_APP_messagingSenderId,
  appId: env.REACT_APP_appId,
  measurementId: env.REACT_APP_measurementId,
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  // console.log(firestore.doc("users/1234"));
  // Always returns a reference to a place in the database even if nothing exists there

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  // console.log(snapShot);
  // console.log(snapShot.exists);
  // console.log(snapShot.id);
  // console.log(snapShot.ref);

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("Error creating new user", error.message);
    }
  }
  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider(); // Initialize GoogleAuthProvider from firebase
provider.setCustomParameters({ prompt: "select_account" }); // Always trigger the google select account popup

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
