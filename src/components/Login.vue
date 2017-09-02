<template>
  <div id="login">
    <div class="container">
      <div class="row">
        <div class="login-clean">
          <form>
          <h1>VUE-CHAT FIREBASE APP</h1>
          <h1>{{ msg }}</h1>
          
          <div class="form-group">
            <button class="btn btn-primary btn-block" ></button>
				Login with Facebook
    </a>
          </div>

          <div class="form-group">
            <button class="btn btn-info btn-block"@click="startLogin()"></button>
      Login with Twitter
    </a>
          </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
 /* eslint-disable */
import {startLogin} from '../auth/auth'
  export default {
    name: 'login',
    data () {
      return {
        msg: 'Login Component'
      }
    },
    startLogin () {
        return startLogin();
      }
  }
  
</script>
<style>
</style>
