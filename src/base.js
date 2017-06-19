import firebase from 'firebase';

const config = {
  apiKey: "AIzaSyDVet-WD6SzIi0PlTNaT9YaWhFvdKoJDts",
  authDomain: "mint-website-45235.firebaseapp.com",
  databaseURL: "https://mint-website-45235.firebaseio.com",
  projectId: "mint-website-45235",
  storageBucket: "mint-website-45235.appspot.com",
  messagingSenderId: "750122013175"
};

const app = firebase.initializeApp(config);

const fireDb = app.database();
const fireAuth = app.auth();

export {
  fireAuth,
  fireDb,
};
