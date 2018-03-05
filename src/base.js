const Rebase = require('re-base');
const firebase = require('firebase');

const firebaseApp = firebase.initializeApp({
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
});

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };
export default base;
