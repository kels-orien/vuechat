<template>
<div id="app">
<div>
    <nav>
      <div class="container">
        <a href=''>
          VUECHAT
        </a>
        <ul class="nav__left">
        </ul>
        <ul class="nav__right">
          <a href=''>SIGNUP</a>
        </ul>
      </div>
    </nav>
    <main>
      <img src="../assets/logo.png" alt="Vue.js PWA">
      <router-view></router-view>
    </main>
  </div>
  <div id="login">
    <div class="container">
      <div class="row">
        <div class="login-clean">
          <form>
          <h1>VUE-CHAT FIREBASE APP</h1>
          <h1>{{ msg }}</h1>
          
          <div class="form-group">
            <button class="btn btn-primary btn-block" @click="facebookAuth()">	Login with Facebook</button>
			
    </a>
          </div>

          <div class="form-group">
            <button class="btn btn-info btn-block"  @click="twitterAuth()"> Login with Twitter</button>
    
    </a>
          </div>
          </form>
        </div>
      </div>
    </div>
    
  </div>
 </div>
</template>


<script>
 /* eslint-disable */
import firebase from 'firebase'
import firebaseui from 'firebaseui'
import { config } from '../firebase/index'
  export default {
    name: 'auth',
    data () {
      return {
        msg: 'Auth Component'
      }
    },
    methods :{
      facebookAuth: function (){
          const facebookProvider = new firebase.auth.FacebookAuthProvider();
          return firebase.auth().signInWithPopup(facebookProvider).then((result) => {
           console.log('Auth worked!', result);
           this.$router.push('/chat');
          }, (error) => {
             console.log('Unable to auth', error);
          });
      },
      twitterAuth: function (){
          const provider = new firebase.auth.TwitterAuthProvider();
          // const result = auth().signInWithPopup(provider);
          return firebase.auth().signInWithPopup(provider).then((result) => {
           console.log('Auth worked!', result);
           this.$router.push('/chat');
          }, (error) => {
             console.log('Unable to auth', error);
          });
      }

    },
  }
  
</script>
<style>
</style>
