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
        <div>
        <router-link :to="{ name: 'schedule', params: {dataToPass: this.info}}"><v-btn class="bton" block large> Schedule </v-btn></router-link></div>
        <router-link :to="{ name: 'locations', params: {dataToPass: this.fields}}"><v-btn class="bton" block large> Locations</v-btn></router-link>
        <router-link :to="{ name: 'teams', params: {dataToPass: this.teams}}"><v-btn class="bton" block large> Teams</v-btn></router-link>
        <router-link :to="{ name: 'chat', params: {dataToPass: this.info}}"><v-btn class="bton" block large> Chat</v-btn></router-link>
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

.router-link-active {
  text-decoration: none;
}

.logo {
  height: 60%;
  width: 60%;
  margin: 20px;
}
a .li a {
  text-decoration: none;
}
.bton {
  width: 320px;
}



</style>
<script>
export default {
  data (){
    return {
        info:'null',
        teams:'null',
        fields: 'null'
    }
  },
  
  created(){
    this.getData();
  },
  methods: {
    getData(){
      fetch("https://api.myjson.com/bins/u0ot4")
    .then(resp => 
      resp.json())
    .then((data) => {
    this.info = data.Matches;
    this.teams = data.Teams;
    this.fields = data.Fields;

    console.log(this.teams);
    })
    }
  }
};

</script>

