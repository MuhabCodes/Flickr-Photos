/* eslint-disable max-len */
/* eslint-disable no-undef */
// import importScripts from 'import-scripts';
/* eslint-disable no-console */
// import firebase from 'firebase/app';
// import 'firebase/analytics';

// importScripts('/__/firebase/8.6.3/firebase-app.js');
// importScripts('/__/firebase/8.6.3/firebase-messaging.js');
// importScripts('/__/firebase/init.js');
importScripts('https://www.gstatic.com/firebasejs/8.6.3/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.6.3/firebase-messaging.js');

// import('firebase/messaging');

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
if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app(); // if already initialized, use that one
}
// firebase.analytics();

// const FIREBASE_MESSAGING = firebase.messaging();
console.log('booo');
// FIREBASE_MESSAGING.usePublicVapidKey('BHJ6Jx3l8mZncJgAYB1ZcFo76ZGSk5DiRr52t3Zq4Vmmg F-U1gYfAreDuXjeh66xjUNrC-qDrdYrfC_OG-S3-w');
// FIREBASE_MESSAGING.onMessage((payload) => {
//   console.log('Message received. ', payload);
//   // Update the UI to include the received message.
// });

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('../firebase-messaging-sw.js')
    .then((registration) => {
      console.log('Registration successful, scope is:', registration.scope);
    }).catch((err) => {
      console.log('Service worker registration failed, error:', err);
    });
}
const messaging = firebase.messaging();
messaging.onBackgroundMessage((payload) => {
  console.log('Received background message ', payload);
});
