import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyBoWe52J3jUvzUjuRudWPx9mCDFfGzVARg',
  authDomain: 'crown-db-b1adf.firebaseapp.com',
  databaseURL: 'https://crown-db-b1adf.firebaseio.com',
  projectId: 'crown-db-b1adf',
  storageBucket: 'crown-db-b1adf.appspot.com',
  messagingSenderId: '1014297861627',
  appId: '1:1014297861627:web:6550257e64fee602383f5e',
  measurementId: 'G-4GJBY02P5S',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
