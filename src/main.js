import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import 'bootstrap/dist/css/bootstrap.min.css';
import firebase from 'firebase'


Vue.config.productionTip = false


 

   var config = {
    apiKey: "AIzaSyDEZVHR9-k34gsfni7fN2f1JCDqwOg7D4s",
    authDomain: "nysl-users.firebaseapp.com",
    databaseURL: "https://nysl-users.firebaseio.com",
    projectId: "nysl-users",
    storageBucket: "nysl-users.appspot.com",
    messagingSenderId: "683030492433"
  };

  firebase.initializeApp(config);


new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
