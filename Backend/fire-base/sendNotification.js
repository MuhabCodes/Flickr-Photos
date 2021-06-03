const admin = require('firebase-admin');
const serviceAccount = require('./serviceAccountKey.json');

async function clearInvalidToken(token, tokenSnapshot, result) {
  // since results is array and we have only one notification therefore 0
  // index
  const FIREBASE_DATABASE = admin.database();
  if (!result[0].error) return;
  switch (result[0].error.code) {
    case 'messaging/invalid-registration-token':
    case 'messaging/registration-token-not-registered':
      FIREBASE_DATABASE.ref('/tokens').child(Object.keys(tokenSnapshot.val())[0])
        .remove();
      break;
    default:
      break;
  }
}
// this function send live notification to user as push up notification
module.exports = async function SendNotificationToUser(notification) {
  try {
    if (!admin.apps.length) { // this to check if there's app
      admin.initializeApp({
        credential: admin.credential.cert(serviceAccount),
        databaseURL: 'https://notify-d4836-default-rtdb.firebaseio.com',
      });
    }
    const FIREBASE_MESSAGING = admin.messaging();
    const FIREBASE_DATABASE = admin.database();

    // .limitToLast(1) make function called only one time as child_added is made
    // to be called on each child in one iteration so i limit that to only once
    // and endAt() to get recently added notification

    console.log(notification);
    // creating my Own notification that will be (pushed-up)
    const newNotification = notification;
    // TODO JUST FOR TESTING
    newNotification.senderName = 'EBBBOOO';

    newNotification.title = 'Flickr App';
    if (notification.act === 'like') {
      newNotification.body = `${notification.senderName} liked your photo`;
    } else if (notification.act === 'comment') {
      newNotification.body = `${notification.senderName} commented on your photo`;
    } else {
      newNotification.body = `${notification.senderName} followed you`;
    }
    newNotification.icon = 'https://cdn2.iconfinder.com/data/icons/social-icons-circular-color/512/flickr-512.png';
    // this icon is icon of notification in push notification (flickr icon)
    // could be changed to be sender icon but still not implemented
    const payload = {
      notification: newNotification,
    };
    console.log('payload', payload);

    // querying database searching for reciever token
    // if found therefore he will be online and send to him notification
    // else will just exit
    const { reciever } = notification;
    const tokensRef = FIREBASE_DATABASE.ref('/tokens');
    const tokenSnapshot = await tokensRef.orderByChild('userId').equalTo(reciever).once('value');
    if (!tokenSnapshot.val()) {
      console.log('failed to send notification to user');
      return;
    }

    // accessing token as its returned as { "encryptedid":{token:token,userId:userId}}
    // Object.keys(token.val())[0] is getting first key which is encryptedid
    const tokenValue = tokenSnapshot.val()[Object.keys(tokenSnapshot.val())[0]].token;
    console.log(tokenValue);
    // so now we have token of reciever and we just need to send
    const response = await FIREBASE_MESSAGING.sendToDevice(tokenValue, payload);
    console.log(response);
    // will do here some database cleanups if token fails !!!
    await clearInvalidToken(tokenValue, tokenSnapshot, response.results);
    // so if he unsubscribe or token changed --> delete it from db
  } catch (error) {
    console.log(error);
  }
};
