import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import runtimeEnv from '@mars/heroku-js-runtime-env';

const env = runtimeEnv();

const config = {
  apiKey: env.REACT_APP_firebase_apiKey,
  authDomain: 'fethr-db.firebaseapp.com',
  databaseURL: 'https://fethr-db.firebaseio.com',
  projectId: 'fethr-db',
  storageBucket: 'fethr-db.appspot.com',
  messagingSenderId: env.REACT_APP_messagingSenderId,
  appId: env.REACT_APP_appId,
  measurementId: env.REACT_APP_measurementId,
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  // Always returns a reference to a place in the database even if nothing exists there

  // Example: Getting data from firestore
  // Rather than using fetch or axios, you get a Snapshot and call .data() on the documents
  // const collectionRef = firestore.collection('users');
  // const collectionSnapshot = await collectionRef.get();
  // console.log({ collection: collectionSnapshot.docs.map((doc) => doc.data()) });

  const snapShot = await userRef.get();

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
      console.log('Error creating new user', error.message);
    }
  }

  return userRef;
};

export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd
) => {
  const collectionRef = firestore.collection(collectionKey);

  const batch = firestore.batch();
  objectsToAdd.forEach((obj) => {
    const newDocRef = collectionRef.doc(); // Generate a new document for this collection
    batch.set(newDocRef, obj);
  });

  return await batch.commit(); // batch.commit() returns a promise, allowing chaining .then
};

export const convertCollectionsSnapshotToMap = (collections) => {
  const transformedCollection = collections.docs.map((doc) => {
    const { title, items } = doc.data();

    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items,
    };
  });
  return transformedCollection.reduce((acc, cur) => {
    acc[cur.title.toLowerCase()] = cur;
    return acc;
  }, {});
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const googleProvider = new firebase.auth.GoogleAuthProvider(); // Initialize GoogleAuthProvider from firebase
googleProvider.setCustomParameters({ prompt: 'select_account' }); // Always trigger the google select account popup

export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

export default firebase;
