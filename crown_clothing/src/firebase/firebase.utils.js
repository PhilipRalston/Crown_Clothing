import firebase from 'firebase/app';
// pull in firebase utility library that belongs at firebase/app
// reason for firebase/app - firebase has all the utility libraries loaded when we included the entire dependency when we installed firebase using yarn
// dont wan't any libraries that we are not using (quite large)
// only import libraries that we need
import 'firebase/firestore';
// for the database
import 'firebase/auth';
// for authentication
// always need the base import though because the firebase keyword is going to give us access to firestore and auth when we import them in - they'll be automatically attached to this firebase keyword

const config = {
    apiKey: "AIzaSyA8u5VWUPJgn70WuAQ5ihBbvk_T1qYbnRE",
    authDomain: "crown-db-3fbf8.firebaseapp.com",
    databaseURL: "https://crown-db-3fbf8.firebaseio.com",
    projectId: "crown-db-3fbf8",
    storageBucket: "crown-db-3fbf8.appspot.com",
    messagingSenderId: "1021823032292",
    appId: "1:1021823032292:web:bbb645a3d9a54cb08a05f1",
    measurementId: "G-ZM1KQ7BDQS"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  // this is why we imported firebase/auth
  // we now have access to the .auth() method on firebase
  // export out to anywhere in our app that requires authentication

  export const firestore = firebase.firestore();

  // set up Google authentication utility

  const provider = new firebase.auth.GoogleAuthProvider();

  // This gives us access to the GoogleAuthProvider() class from Firebase's authentication library

  provider.setCustomParameters({ prompt: 'select_account' });
  // we want to always trigger the Google pop-up whenever we use GoogleAuthProvider for authentication and sign-in

  export const signInWithGoogle = () => auth.signInWithPopup(provider);
  // export out signInWithGoogle method - calls another function auth.signInWithPopup
  // passes the provider class that we made as an argument - enables Google Authentication and Sign In

  export default firebase;
  // in case we need the entire firebase library
