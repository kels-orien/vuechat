<template>
  <div id="login">
    <div class="container">
      <div class="row">
        <div class="login-clean">
          <form>
          <h1>VUE-CHAT FIREBASE APP</h1>
          <h1>{{ msg }}</h1>
          
          <div class="form-group">
            <a href="#" class="btn btn-primary btn-block">
				Login with Facebook
    </a>
          </div>

          <div class="form-group">
            <a href="#" class="btn btn-info btn-block">
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
  export default {
    name: 'login',
    data () {
      return {
        msg: 'Login Component'
      }
    }
  }
  
</script>
<style>
</style>
