import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
    apiKey: "AIzaSyAXm7lJk8hdXOfSeCiQCBFbKLauVWMUxKc",
    authDomain: "trialjcwd2302.firebaseapp.com",
    projectId: "trialjcwd2302",
    storageBucket: "trialjcwd2302.appspot.com",
    messagingSenderId: "606301520935",
    appId: "1:606301520935:web:2f838c029e537936ce3a02"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);