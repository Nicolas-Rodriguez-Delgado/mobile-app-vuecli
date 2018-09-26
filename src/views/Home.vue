<template>
  <v-container fluid>
    <v-slide-y-transition mode="out-in">
      <v-layout column align-center>
        <img src="@/assets/nysl_logo.png" alt="nysl logo" class="mb-5 logo">
        <blockquote>
          &#8220;Football is a game of mistakes. Whoever makes the fewest mistakes wins.&#8221;
          <footer>
            <small>
              <em>&mdash;Johan Cruyff</em>
            </small>
          </footer>
        </blockquote>
        <v-btn block large><router-link to= "/schedule"> Schedule </router-link></v-btn>
        <v-btn block large><router-link to= "/locations"> Locations</router-link></v-btn>
        <v-btn block large><router-link to= "/teams"> Teams</router-link></v-btn>
        <v-btn block large><router-link to= "/chat"> Chat</router-link></v-btn>
      </v-layout>
    </v-slide-y-transition>
  </v-container>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
  text-decoration: none;
}
a {
  color: #42b983;
  text-decoration: none;
}
@media only screen and (min-width: 668px) {
  .logo {
    height: 40%;
    width: 0%;
    margin: 20px;
  }
}

.logo {
  height: 60%;
  width: 60%;
  margin: 20px;
}
a .li a {
  text-decoration: none;
}

</style>
