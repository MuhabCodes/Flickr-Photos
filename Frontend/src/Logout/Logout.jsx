import jwt from 'jwt-decode';
import firebase from 'firebase/app';

import('firebase/messaging');
import('firebase/database');

const FBlogout = () => {
  const FIREBASE_MESSAGING = firebase.messaging();
  const FIREBASE_DATABASE = firebase.database();
  const userjwt = jwt(localStorage.getItem('token'));
  FIREBASE_MESSAGING.getToken()
    .then((token) => {
      console.log(token);
      FIREBASE_MESSAGING.deleteToken(token);// DELETING TOKEN FROM FIREBASE_MESSAGING
    })
    .then(() => FIREBASE_DATABASE.ref('/tokens').orderByChild('userId').equalTo(userjwt.userId)
      .once('value')) // DELETING TOKEN FROM DB
    .then((snapshot) => {
      if (snapshot.val()) {
        const key = Object.keys(snapshot.val())[0]; // since i ordered them above
        return FIREBASE_DATABASE.ref('/tokens').child(key).remove(); // deleting obtained key
      }
      return null;
    })
    .catch((err) => {
      console.log(err);
    });
};

export default function Logout() {
  console.log('Here');
  const storedToken = localStorage.getItem('token');
  if (storedToken) {
    const decodedData = jwt(storedToken);
    const expirationDate = decodedData.exp;
    const currenttime = (Date.now() / 1000) + 215640;
    console.log(expirationDate);
    console.log(currenttime);
    // eslint-disable-next-line no-self-compare
    if (expirationDate === expirationDate + 10000) {
      localStorage.removeItem('token');
      FBlogout();
    }
  }
}
