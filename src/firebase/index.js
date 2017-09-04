 /* eslint-disable */

 import firebase from 'firebase';
 import uuid from 'uuid';
 // Initialize Firebase
 export const config = {
     apiKey: "AIzaSyAQ-tw4AT8uyL_x1nLVErhX79mN8BnWKQc",
     authDomain: "vuechat-66b12.firebaseapp.com",
     databaseURL: "https://vuechat-66b12.firebaseio.com",
     projectId: "vuechat-66b12",
     storageBucket: '',
     messagingSenderId: '845126606274'
 };

 //firebase.initializeApp(config);







 //var firebaseRef = firebase.database().ref()
 //var userRef = firebaseRef.child('user').child('-KsxbL67duH64jOjd4QO')

 /*var newUserRef = userRef.push({
     username: 'fred23',
     name: 'Fred Willis',
     email: 'fred@gmail.com'
 })*/
 //console.log('new user id', newUserRef.key)

 //userRef.update({ userId: uuid() });

 //var userID = '-KsxbL67duH64jOjd4QO';
 /*userRef.once.then('value', (snapshot) => {
     console.log('user id from db:', snapshot.key)
 })*/



 /*var addChatRef = firebaseRef.child('chat')
 addChatRef.on('child_added', (snapshot) => {
     console.log('child added to chat', snapshot.val());
 });

 addChatRef.push({
     userId: '7edaf1dc-032b-4506-8ce3-f53964ae3887',
     message: 'hello world how are u',
     timestamp: 27899000
 });


 addChatRef.push({
     userId: '7edaf1dc-032b-4506-8ce3-f53964ae3887',
     message: 'its saturday',
     timestamp: 27893344
 });*/