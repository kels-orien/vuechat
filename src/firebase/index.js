 import firebase from 'firebase';

 // Initialize Firebase
 var config = {
     apiKey: "AIzaSyAQ-tw4AT8uyL_x1nLVErhX79mN8BnWKQc",
     authDomain: "vuechat-66b12.firebaseapp.com",
     databaseURL: "https://vuechat-66b12.firebaseio.com",
     projectId: "vuechat-66b12",
     storageBucket: "",
     messagingSenderId: "845126606274"
 };
 firebase.initializeApp(config);

 export default {
     database: firebase.database()
 }