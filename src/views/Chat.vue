<template>
        <div class="chat">
    <div id="posts"  size= "500"  class="box text-right">
      Loading posts...
    </div>

    <div class="inputs">
      <input v-model= "text" id= "text" class="input" type="text" size="32" placeholder="Your message...">

      <button id="create-post" v-on:click= "writePost" class="button is-primary">Send</button>
    </div>
  </div>
  
</template>
<style >
.box {
    background-color: white;
    height: 440px; 
    margin: 15px;
    overflow: scroll;
    
}
p scoped {
  color: black;
}
#text {
    background-color: whitesmoke;
    height: 40px;
    margin: 15px;
    color: black;

}
#create-post {
    color:black;
    width: 80px;
    height: 70px;
    background-color: rgb(95, 170, 85);
    margin-right: 3px;
}
.par {
  background-color: gray;
  color: white;
}
.speech-bubble {
	position: relative;
	background: #008fbb;
	border-radius: .4em;
  height: 20px;
}

</style>


<script src="https://www.gstatic.com/firebasejs/5.5.1/firebase.js"></script>

<script>
import firebase from "firebase";

export default {
  name: "chat",
  data: function() {
    return {
      text: ""
    };
  },
  methods: {
    writePost: function() {

      let message = {text: this.text , email: firebase.auth().currentUser.email}
      firebase
        .database()
        .ref("myChat")
        .push(message);
       document.getElementById('text').value = "";

    }
  },

    created() {
      firebase
        .database()
        .ref("myChat")
        .on("value", function(data) {
          console.log(data.val());
          let allMessages = data.val();
          let div = document.getElementById("posts");
          div.innerHTML = null;

          console.log("getting")

          for (let key in allMessages) {
            console.log(allMessages[key]);

            let p = document.createElement("p");
            let par = document.createElement("small");
            
            p.className = "speech-bubble"
            p.append(allMessages[key].text);
            div.append(p);

            par.className = "par";
            par.append(allMessages[key].email);
            div.append(par);
            
            
          }
        });
    }
  }
</script>