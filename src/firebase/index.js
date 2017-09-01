 /* eslint-disable */

 import firebase from 'firebase';
 import uuid from 'uuid';
 // Initialize Firebase
 var config = {
     apiKey: "AIzaSyAQ-tw4AT8uyL_x1nLVErhX79mN8BnWKQc",
     authDomain: "vuechat-66b12.firebaseapp.com",
     databaseURL: "https://vuechat-66b12.firebaseio.com",
     projectId: "vuechat-66b12",
     storageBucket: '',
     messagingSenderId: '845126606274'
 };

 firebase.initializeApp(config);

 export default {
     database: firebase.database()
 }


 var firebaseRef = firebase.database().ref()
 var userRef = firebaseRef.child('user').child('-KsxbL67duH64jOjd4QO')

 /*var newUserRef = userRef.push({
     username: 'fred23',
     name: 'Fred Willis',
     email: 'fred@gmail.com'
 })*/
 //console.log('new user id', newUserRef.key)

 userRef.update({ userId: uuid() });

 //var userID = '-KsxbL67duH64jOjd4QO';
 /*userRef.once.then('value', (snapshot) => {
     console.log('user id from db:', snapshot.key)
 })*/