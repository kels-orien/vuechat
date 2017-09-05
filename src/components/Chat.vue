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
      <div class="chatbox">
          <div class = "chatlogs">
              <div class = "chat friend">
                  <div class ='user-photo'>
                      <img src = "">
                  </div><p class = "chat-message">Hello World!!!</p>
              </div>
              <div class = "chat self">
                  <div class ='user-photo'>
                      <img src = "">
                  </div>
                   <p class = "chat-message">Hello Nigeria!!!</p>
              </div>
              <div class = "chat friend">
                  <div class ='user-photo'>
                     <img src = "">
                  </div> <p class = "chat-message">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              </div>
          </div>
          <div class = "chat-form">
              <textarea></textarea>
              <button>Send</button>
          </div>
      </div>



    </div>
</div>
</template>


<script>
/*eslint-disable*/
import firebase from 'firebase'
  export default {
    name: 'chat',
    
     methods: {
    logOut() {
      firebase.auth().signOut()
    }
  }
  }
</script>
<style>
</style>
