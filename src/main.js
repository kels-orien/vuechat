// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import firebase, { config } from './firebase/index'
import router from './router'

Vue.config.productionTip = false
    /* eslint-disable */
Vue.use(VueRouter)
new Vue({
    router,
    created() {
        //firebase.initializeApp(config);
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.$router.push('/chat')
            } else {
                this.$router.push('/auth')
            }
        });
    },
    el: '#app',
    template: '<App/>',
    components: { App }
})