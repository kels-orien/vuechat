<template>
<div>
<div>
    <nav>
      <div class="container">
        <a href=''>
          VUECHAT
        </a>
        <ul class="nav__left">
        </ul>
        <ul class="nav__right">
          <a href=''@click="logOut()">SIGNOUT</a>
        </ul>
      </div>
    </nav>
    <main>
      <img src="../assets/logo.png" alt="Vue.js PWA">
      <router-view></router-view>
    </main>
  </div>
  <div>
      
      <div class="chatbox" >
          <div class = "chatlogs">
              <div class = "chat friend"v-for="item in anArray">
                  <div class ='user-photo'>
                      <img src = "">
                  </div><p class = "chat-message">{{item.message}}</p>
              </div>
          </div>
          <div class = "chat-form">
              <textarea v-model ="newComment"></textarea>
              <button @click="addComment()">Send</button>
          </div>
      </div>
      


    </div>
</div>
</template>


<script>
/*eslint-disable*/

import firebase, { chatRef } from '../firebase/index'
import Vue from 'vue'
import Vuefire from 'vuefire'
import moment from 'moment'
Vue.use(Vuefire);
  export default {
    name: 'chat',
    data() {
    return {
      messages: [],
      userId:'',
      commment:'',
      parsedChat:[]
    };
  },
  firebase: {
    // can bind to either a direct Firebase reference or a query
    anArray: chatRef,
    // optionally provide the cancelCallback
      cancelCallback: function () {},
      // this is called once the data has been retrieved from firebase
      readyCallback: function () {}
  },
     methods: {
    logOut() {
      firebase.auth().signOut()
    },
    addComment() {
        
        if (this.newComment !== '' ){
            this.comment = this.newComment.trim(); 
            chatRef.push({
                message:this.comment,
                timestamp: moment().unix()
            });
            this.newComment ="";
        }
    }
  }
  }
</script>
<style>
</style>
