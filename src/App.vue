<template>
  <div id="app">
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
      <img src="./assets/logo.png" alt="Vue.js PWA">
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
import './firebase/index'
export default {
  name: 'app'
}
</script>

<style>
body {
  margin: 0;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

main {
  text-align: center;
  margin-top: 40px;
}

a {
  margin: 0;
  height: 40px;
  padding: 10px 16px 0 24px;
  background-color: #35495E;
  color: #ffffff;
  text-decoration: none;
}
.nav ul a :hover {
   text-decoration: none;
}

header span {
  display: block;
  position: relative;
  font-size: 20px;
  line-height: 1;
  letter-spacing: .02em;
  font-weight: 400;
  box-sizing: border-box;
  padding-top: 16px;
}
</style>
