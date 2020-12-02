import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import  firebase from 'firebase';
import 'firebase/firestore';

var firebaseConfig = {
  apiKey: "AIzaSyB6MKqAv2vwF5neVUeEZDNLaKCTOUjIbb4",
  authDomain: "cart-82748.firebaseapp.com",
  databaseURL: "https://cart-82748.firebaseio.com",
  projectId: "cart-82748",
  storageBucket: "cart-82748.appspot.com",
  messagingSenderId: "459779924497",
  appId: "1:459779924497:web:7548cda7651f2e79bc47b0"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


