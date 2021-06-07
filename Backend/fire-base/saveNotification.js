const admin = require('firebase-admin');
const serviceAccount = require('../secret/serviceAccountKey.json');

module.exports = async function SaveNotification(notification) {
  if (!admin.apps.length) { // this to check if there's app
    admin.initializeApp({
      credential: admin.credential.cert(serviceAccount),
      databaseURL: 'https://notify-d4836-default-rtdb.firebaseio.com',
    });
  }
  const FIREBASE_DATABASE = admin.database();

  const doc = await FIREBASE_DATABASE.ref('/notifications').push(notification);
  if (doc) { return doc; }
};
