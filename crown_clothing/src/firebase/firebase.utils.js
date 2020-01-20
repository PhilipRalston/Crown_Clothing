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
    apiKey: "AIzaSyAgKxncrIT0iVM0jtMcwWu1tnUE6nNQ0xA",
    authDomain: "crown-db-c7806.firebaseapp.com",
    databaseURL: "https://crown-db-c7806.firebaseio.com",
    projectId: "crown-db-c7806",
    storageBucket: "crown-db-c7806.appspot.com",
    messagingSenderId: "572170552314",
    appId: "1:572170552314:web:84ab0554d77d3bf1ef1a43",
    measurementId: "G-WXRDVMQZFK"
  };

  // function takes the user auth object that we get back from our auth library and then store it inside of our database
  // going to be asynchronous function - API request - don't know how long the process is going to take
  // we pass the userAuth object into this function along with any additional data we might need (in the form of an object)
  // as we have seen, if we sign out - we get back null from our auth library instead of a userAuth object
  // only want to perform this save to our database if we get a userAuth object back (i.e. they signed in/not that they signed out)
  // function has to make sure that we check that we get back a valid object
  export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;
    // if userAuth object does not exist/is null - exit the function, otherwise if it does exist - query inside of Firestore for the document to see if it already exists
    // Firestore gives us back one of two different types of potential objects - we either get a QueryReference object or a QuerySnapshot object
    // Query - asking Firestore for some document or collection
    // See PDF for Part 88 of React Course resources
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    // gives us a document reference object at the location of the uid of the userAuth object

    const snapShot = await userRef.get();
    // get a snapShot object (document snapshot) - can use this to tell if there is data present at the queried location (for said user) - have we stored the userAuth (object) before?
    
    if(!snapShot.exists) {
      // if the user does not already exist in the database - we want to create a new entry in the users collection - using the userRef
      // In order for us to create a new entry in our database we need to use documentRef objects (i.e. our userRef)
      const { displayName, email } = userAuth;
      // destructure the displayName and email from our userAuth object
      const createdAt = new Date();
      // current date when function was invoked (i.e. when user was added to the database)

      try {
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        })
        // set = create (CRUD) - create a new entry in our database using the aforementioned data
      } catch (error) {
        console.log('error creating user', error.message);
        // otherwise an error message will be logged to the console
      }
    }
    return userRef;
    // chance we may want to use this object later
  } 

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
