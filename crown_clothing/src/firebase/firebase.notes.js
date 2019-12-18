// To properly understand what Firebase Auth gives us, we have to understand the concept of a subscription. Normally, how we fetched data before is inside of our componentDidMount() method, we're used to firing a fetch to the backend (to fetch data) - but this is a one-off thing - once code calls fetch it doesn't call fetch again unless componentDidMount gets called again.

  // We don't want to remount our app, we just want to always know when Firebase has realised that the authentication state has changed (i.e. whenever somebody signs in/out) - we want to be aware of these changes without having to manually fetch

  // Firebase helps us out a lot wrt this

// our app has stored the details of the user - knows that this app has not yet signed out - hence why we still see the object even though our app refreshed when we saved App.js
    // Firebase is still aware of the last user that signed in - user authenticated session persistence - right out of the box feature
    // Don't want user to re sign-in when we refresh our page/ or if we close the window and then come back to our application (without signing out) - this Firebase feature means that we never have to worry about these
    // Firebase is aware - keeps track of all app instances that are open and communicating with it - it knows what instance of our app that the user came from and whether or not they signed out
    // Because of our subscriber - our subscription is always listening to the auth (for a user state change) - auth keeps sending same authenticated user state/object until the user signs out
    // TLDR - Firebase helps us avoid having to set up complex persistent user sessions code.

    // Let's look at the user authenticated object/state that we get back from Firebase, ignore a lot of values (don't need them)
    // Interested in displayName and email keys (and associated values)
    // Firebase OAuth allows users to sign in using many common 3rd party services (e.g. Facebook, Twitter, GitHub) - don't have to go through tedious sign up process on websites

     // why is this an open subscription? - open messaging system between our application and our Firebase app - whenever any changes occur on Firebase from any source related to this application - Firebase sends out a message that says the Auth State has changed - the user has updated - regardless of how they have signed in/signed out
    // Gives us the authenticated user object/state - calls the onAuthStateChanged method and passes in the user object
    // Don't have to manually fetch every time we want to check if the Auth state has changed - this connection is always open as long as our App component is mounted on our DOM
    // Because the subscription is open - we also have to close subscriptions when the component unmounts - don't want memory leaks within our application