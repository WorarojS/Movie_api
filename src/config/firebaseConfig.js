import firebase from "firebase";
var firebaseConfig = {
  apiKey: "AIzaSyAC55KvldURQZli6fg7bsUCnSvnPonCsfY",
  authDomain: "myport-821a1.firebaseapp.com",
  databaseURL: "https://myport-821a1.firebaseio.com",
  projectId: "myport-821a1",
  storageBucket: "myport-821a1.appspot.com",
  messagingSenderId: "116603367001",
  appId: "1:116603367001:web:9573c7ea29e1b090"
};
// Initialize Firebase
const Firebase = firebase.initializeApp(firebaseConfig);

export default Firebase;
