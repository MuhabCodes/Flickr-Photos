module.exports = async function SaveNotification(notification) {
  const admin = require('firebase-admin');
  const serviceAccount = require('./serviceAccountKey.json');
  try {
    if (!admin.apps.length) { // this to check if there's app
      admin.initializeApp({
        credential: admin.credential.cert(serviceAccount),
        databaseURL: 'https://notify-d4836-default-rtdb.firebaseio.com',
      });
    }
    const FIREBASE_AUTH = admin.auth();
    const FIREBASE_MESSAGING = admin.messaging();
    const FIREBASE_DATABASE = admin.database();

    const ref = FIREBASE_DATABASE.ref('/notifications');

    const doc = await FIREBASE_DATABASE.ref('/notifications').push(notification);
    if (doc) { return doc; }
  } catch (err) {
    console.log(err);
  }
};
