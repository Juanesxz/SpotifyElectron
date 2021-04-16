import firebase from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDs6tECONyIwfKI88Gd4W1E0BGzurOo9as",
  authDomain: "musicfy-4731c.firebaseapp.com",
  databaseURL: "https://musicfy-4731c-default-rtdb.firebaseio.com",
  projectId: "musicfy-4731c",
  storageBucket: "musicfy-4731c.appspot.com",
  messagingSenderId: "708703554400",
  appId: "1:708703554400:web:417c4c261dd4d559322c05",
};

export default firebase.initializeApp(firebaseConfig);
