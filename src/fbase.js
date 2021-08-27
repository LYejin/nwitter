import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCRdi3Fxew2XfoqPZVnqpzUBfZz8v5des8",
  authDomain: "nwitter-e9df3.firebaseapp.com",
  projectId: "nwitter-e9df3",
  storageBucket: "nwitter-e9df3.appspot.com",
  messagingSenderId: "908355098199",
  appId: "1:908355098199:web:ade826a468d2187aaab512",
};

firebase.initializeApp(firebaseConfig);

export const firebaseInstance = firebase;

export const authService = firebase.auth();
export const dbService = firebase.firestore();
export const storageService = firebase.storage();
export const auth = firebase.auth();
