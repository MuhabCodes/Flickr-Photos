/* eslint-disable no-console */
import firebase from 'firebase/app';
import 'firebase/analytics';

export default function FirebaseLogin() {
  const firebaseConfig = {
    apiKey: 'AIzaSyBhoW86v4GTGCoQJO1meS-JGDJNdBaVIjs',
    authDomain: 'notify-d4836.firebaseapp.com',
    databaseURL: 'https://notify-d4836-default-rtdb.firebaseio.com/',
    projectId: 'notify-d4836',
    storageBucket: 'notify-d4836.appspot.com',
    messagingSenderId: '655264697952',
    appId: '1:655264697952:web:4feeebd4172696c164bd05',
    measurementId: 'G-PQ2YH8NWKS',
  };
  // Initialize Firebase
  console.log(firebase);
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  } else {
    firebase.app(); // if already initialized, use that one
  }
  firebase.analytics();
  return (null);
}
