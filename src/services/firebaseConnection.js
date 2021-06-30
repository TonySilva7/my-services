import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

let firebaseConfig = {
  apiKey: "AIzaSyD9NnPrTUmHJsbipQ8sFkhP9SZVzO5Gbx0",
  authDomain: "my-services-547b6.firebaseapp.com",
  projectId: "my-services-547b6",
  storageBucket: "my-services-547b6.appspot.com",
  messagingSenderId: "182485226720",
  appId: "1:182485226720:web:bf0972fa96729ce5de2c85",
  measurementId: "G-C58EBCZ2PE"
};

if ( !firebase.apps.length ) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase;
