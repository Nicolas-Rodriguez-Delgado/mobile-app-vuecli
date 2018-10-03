<template>
        <div class="chat">
    <div id="posts" class="box">
      Loading posts...
    </div>

    <div class="inputs">
      <input v-model= "text" id= "text" class="input" type="text" placeholder="Your message...">

      <button id="create-post" v-on:click= "writePost" class="button is-primary">Send</button>
    </div>
  </div>
</template>
<script src="https://www.gstatic.com/firebasejs/5.5.1/firebase.js"></script>

<script>
import firebase from "firebase";

export default {
  name: "chat",
  data: function() {
          return {
              message: {name: ' ' , text: ''}
            
          }
      
  },
  methods: {
    writePost: function() {
      firebase
        .database()
        .ref("myChat")
        .push(message
        );
        this.name = firebase.auth().currentUser.displayName;
    },
    
  }
};
</script>