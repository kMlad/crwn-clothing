import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDJkB8ynQ2xCrDDJS8-QU27j93NmhUmN2E",
  authDomain: "crwn-clothing-db-kmlad.firebaseapp.com",
  projectId: "crwn-clothing-db-kmlad",
  storageBucket: "crwn-clothing-db-kmlad.appspot.com",
  messagingSenderId: "418824834027",
  appId: "1:418824834027:web:f6049c288502db871027ae",
  measurementId: "G-KDTNF496QL",
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
