const admin = require('firebase-admin');
const serviceAccount = require('./serviceAccountKey.json');

module.exports = async function getNotifications(userId) {
  if (!admin.apps.length) { // this to check if there's app
    admin.initializeApp({
      credential: admin.credential.cert(serviceAccount),
      databaseURL: 'https://notify-d4836-default-rtdb.firebaseio.com',
    });
  }
  const FIREBASE_DATABASE = admin.database();
  try {
    const snapshot = await FIREBASE_DATABASE.ref('/notifications').orderByChild('reciever').equalTo(userId)
      .once('value');
    if (snapshot.val()
    && snapshot.val()[Object.keys(snapshot.val())[0]] === undefined) { return null; }
    return snapshot.val();
  } catch (err) {
    console.log(err);
  }
};
