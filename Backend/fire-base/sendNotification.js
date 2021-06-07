const admin = require('firebase-admin');
const serviceAccount = require('../secret/serviceAccountKey.json');

async function clearInvalidToken(tokenSnapshot, result) {
  // since results is array and we have only one notification therefore
  // 0 is our index
  const FIREBASE_DATABASE = admin.database();

  const size = Object.keys(tokenSnapshot.val()).length;
  for (let i = 0; i < size; i += 1) {
    // eslint-disable-next-line no-continue
    if (!result[i].error) continue;
    switch (result[i].error.code) {
      case 'messaging/invalid-registration-token':
      case 'messaging/registration-token-not-registered':
        FIREBASE_DATABASE.ref('/tokens').child(Object.keys(tokenSnapshot.val())[i])
          .remove();
        break;
      default:
        break;
    }
  }
}
// this function send live notification to user as push up notification
module.exports = async function SendNotificationToUser(notification) {
  if (!admin.apps.length) { // this to check if there's app
    admin.initializeApp({
      credential: admin.credential.cert(serviceAccount),
      databaseURL: 'https://notify-d4836-default-rtdb.firebaseio.com',
    });
  }
  const FIREBASE_MESSAGING = admin.messaging();
  const FIREBASE_DATABASE = admin.database();

  // creating my Own notification that will be (pushed-up)
  const newNotification = notification;

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

  const {
    sender,
    reciever,
    recieverName,
    senderName,
    imageUrl,
    id,
    act,
    photoId,
    notificationDate,
    title,
    body,
    icon,
  } = notification;

  // querying database searching for reciever token
  // if found therefore he will be online and send to him notification
  // else will just exit
  const tokensRef = FIREBASE_DATABASE.ref('/tokens');
  const tokenSnapshot = await tokensRef.orderByChild('userId').equalTo(reciever).once('value');
  if (!tokenSnapshot.val()) {
    return;
  }

  // accessing token as its returned as
  // { "encryptedid":{token:token,userId:userId},"encryptedid":{token:token,userId:userId} }
  // Object.keys(token.val())[0] is getting first key which is encryptedid

  // we will make array of tokens as if user is logged in in mobile and web
  // at same time so to send to both
  const tokensValue = [];// tokenSnapshot.val()[Object.keys(tokenSnapshot.val())[0]].token;

  const size = Object.keys(tokenSnapshot.val()).length;
  for (let i = 0; i < size; i += 1) {
    tokensValue.push(tokenSnapshot.val()[Object.keys(tokenSnapshot.val())[i]].token);
  }

  const payload = {
    notification: {
      title: newNotification.title,
      body: newNotification.body,
      icon: newNotification.icon,
    },
    data: { // real data must be sent ( whole notification)
      sender,
      reciever,
      recieverName,
      senderName,
      imageUrl,
      id,
      act,
      photoId,
      notificationDate,
      title,
      body,
      icon,
    },
  };
    // so now we have token of reciever and we just need to send
  const response = await FIREBASE_MESSAGING.sendToDevice(tokensValue, payload);

  // will do here some database cleanups if token fails !!!
  await clearInvalidToken(tokenSnapshot, response.results);
  // so if he unsubscribe or token changed --> delete it from db
};
