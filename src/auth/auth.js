 /* eslint-disable */
 import firebase, { firebaseRef, twitterProvider, facebookProvider } from '../firebase/index'

 export var login = (uid) => {
     return {
         type: 'LOGIN',
         uid
     };
 };

 export var startLogin = () => {
     return () => {
         return firebase.auth().signInWithPopup(twitterProvider).then((result) => {
             console.log('Auth worked!', result);
         }, (error) => {
             console.log('Unable to auth', error);
         });
     };
 };


 export var logout = () => {
     return {
         type: 'LOGOUT'
     };
 };

 export var startLogout = () => {
     return (dispatch, getState) => {
         return firebase.auth().signOut().then(() => {
             console.log('Logged out!');
         });
     };
 };