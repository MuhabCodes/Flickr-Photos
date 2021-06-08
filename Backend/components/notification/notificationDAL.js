const admin = require('firebase-admin');
const { join } = require('path');
const serviceAccount = require('../../secret/serviceAccountKey.json');
require('dotenv').config({ path: join(__dirname, '/../../secret/', '.env') });

module.exports.getNotifications = async function getNotifications(userId) {
  if (!admin.apps.length) { // this to check if there's app
    admin.initializeApp({
      credential: admin.credential.cert(serviceAccount),
      databaseURL: process.env.FIREBASE_URL,
    });
  }
  const FIREBASE_DATABASE = admin.database();
  const snapshot = await FIREBASE_DATABASE.ref('/notifications').orderByChild('reciever').equalTo(userId)
    .once('value');
  if (snapshot.val()
    && snapshot.val()[Object.keys(snapshot.val())[0]] === undefined) { return null; }
  return snapshot.val();
};
