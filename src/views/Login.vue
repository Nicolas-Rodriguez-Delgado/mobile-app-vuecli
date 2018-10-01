<template>
    <div>
        <div class="container">
        <div class="card card-container">
            <!-- <img class="profile-img-card" src="//lh3.googleusercontent.com/-6V8xOA6M7BA/AAAAAAAAAAI/AAAAAAAAAAA/rzlHcD0KYwo/photo.jpg?sz=120" alt="" /> -->
            <img id="profile-img" class="profile-img-card logo1" src="@/assets/nysl_logo.png" />
            <p id="profile-name" class="profile-name-card"></p>
            <form class="form-signin">
                <span id="reauth-email" class="reauth-email"></span>
                <input type="email" id="inputEmail" class="form-control" placeholder="Email address" required autofocus>
                <input type="password" id="inputPassword" class="form-control" placeholder="Password" required>
                
                <button v-on:click= "login" class="btn btn-lg btn-primary btn-block btn-signin" id="login" type="submit">Log in</button>
                <p> You don't have an account? You can <router-link to="/signup">create one</router-link></p>
            </form><!-- /form -->
            <a href="#" class="forgot-password">
                Forgot the password?
            </a>
        </div><!-- /card-container -->
    </div><!-- /container -->
    </div>

    
</template>
<style>
.card-container.card {
    max-width: 300px;
    padding: 20px 40px;
    background-color: rgb(59, 59, 59);
}

.btn {
    font-weight: 700;
    height: 36px;
    -moz-user-select: none;
    -webkit-user-select: none;
    user-select: none;
    cursor: default;
}

/*
 * Card component
 */
.card {
    background-color: rgb(59, 59, 59);
    /* just in case there no content*/
    padding: 20px 15px 30px;
    margin: 0 auto 25px;
    margin-top: 30px;
    /* shadows and rounded borders */
    -moz-border-radius: 2px;
    -webkit-border-radius: 2px;
    border-radius: 2px;
    -moz-box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
    -webkit-box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
}

.logo1 {
  height: 80%;
  width: 80%;
  margin: 20px;
}

.form-control {
    margin-bottom: 7px;

}

</style>

<script src="https://www.gstatic.com/firebasejs/5.5.1/firebase.js"></script>
<script>
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyDEZVHR9-k34gsfni7fN2f1JCDqwOg7D4s",
    authDomain: "nysl-users.firebaseapp.com",
    databaseURL: "https://nysl-users.firebaseio.com",
    projectId: "nysl-users",
    storageBucket: "nysl-users.appspot.com",
    messagingSenderId: "683030492433"
  };
  firebase.initializeApp(config);
</script>
<script>
export default {
    methods: { 
    
    login: function() {

            this.$router.replace("chat")    
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider);
    console.log("login");

},
created() {

    document.getElementById("login").addEventListener("click", login);

}

    }
}
</script>
