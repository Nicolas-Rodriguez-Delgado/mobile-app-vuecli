<template>
  <v-container fluid>
    <v-slide-y-transition mode="out-in">
      <v-layout column align-center>
        <div :style="{ backgroundImage: `url('football_pitch_background_2.jpg')` }">
        <img src="@/assets/nysl_logo.png" alt="nysl logo" class="mb-5 logo">
        </div>
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
h1, h2 {
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
.logo
{
  height: 60%;
  width: 60%;
  margin: 20px;
}
a .li a {
    text-decoration: none;
    }



</style>
