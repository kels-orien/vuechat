<template>
<div id="login">
    <h1>VUE-CHAT FIREBASE APP</h1>
    <h1>{{ msg }}</h1>

    <div>
            <ul/>
                <li>Login with facebook</li>
                <li>Login with Google</li>
                <li>Login via Email</li>
            <ul/>
            
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