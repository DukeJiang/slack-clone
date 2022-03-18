import firebase from 'firebase/compat/app';
import "firebase/compat/auth";
import "firebase/compat/database";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyB4rwi12ydkAKgdBNdgoKibt2HxG0ASr2Q",
  authDomain: "slack-clone-f2b1c.firebaseapp.com",
  databaseURL: "https://slack-clone-f2b1c-default-rtdb.firebaseio.com",
  projectId: "slack-clone-f2b1c",
  storageBucket: "slack-clone-f2b1c.appspot.com",
  messagingSenderId: "641370710066",
  appId: "1:641370710066:web:9aa9328ff5994d190a1c2b"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;