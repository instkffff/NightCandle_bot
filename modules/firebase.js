const admin = require("firebase-admin");

const serviceAccount = require("../config/nightcandlebot-firebase.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://nightcandlebot.firebaseio.com"
});

module.exports = admin