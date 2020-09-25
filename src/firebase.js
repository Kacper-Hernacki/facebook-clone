import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDUcgGFh9GHSolwgKYTOQxeC9-nhukkfrU",
  authDomain: "facebook-clone-296fb.firebaseapp.com",
  databaseURL: "https://facebook-clone-296fb.firebaseio.com",
  projectId: "facebook-clone-296fb",
  storageBucket: "facebook-clone-296fb.appspot.com",
  messagingSenderId: "861206292764",
  appId: "1:861206292764:web:3c58b90bd67b48862ff2d9",
  measurementId: "G-C3F9HHZW4Z",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
