import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import firebase from 'firebase'

Vue.config.productionTip = false

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCdt1dQxrUk1XqR8j6ALOZMdiTcMpPbZDA",
  authDomain: "my-address-pj-d5931.firebaseapp.com",
  databaseURL: "https://my-address-pj-d5931.firebaseio.com",
  projectId: "my-address-pj-d5931",
  storageBucket: "my-address-pj-d5931.appspot.com",
  messagingSenderId: "628163984301",
  appId: "1:628163984301:web:8ed99270dc856b587fff24",
  measurementId: "G-0QRNN6VV86"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();


new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
