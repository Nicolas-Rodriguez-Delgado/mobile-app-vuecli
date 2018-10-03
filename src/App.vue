<template>
  <v-app dark>
    
    <v-toolbar
      app
      :clipped-left="clipped"
    >
      <router-link to= "/"><v-icon>home</v-icon></router-link>
      
      <v-btn icon @click.stop="miniVariant = !miniVariant">
        <v-icon v-html=" 'chevron_left'"></v-icon>
      </v-btn>
      <v-spacer></v-spacer>
      <v-icon>account_circle</v-icon>
      <router-link to= "/login"><v-toolbar-title>  Login</v-toolbar-title>
      </router-link>
      <v-spacer></v-spacer>
      <v-btn icon @click.stop="sideNav = !sideNav">
        <v-icon>menu</v-icon>
      </v-btn>
    </v-toolbar>
    <v-content>
      <router-view/>
    </v-content>
    <v-navigation-drawer
      v-model="sideNav"
      :right="right"
      width="250"
      clipped
      fixed
      app
    >
      <v-list>
        <router-link to="/">
        <v-list-tile>
          <v-list-tile-action>
            <v-icon>home</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>HOME</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        </router-link>
        <router-link :to="{ name: 'schedule', params: {dataToPass: this.info}}">
        <v-list-tile >
          <v-list-tile-action>
              <v-icon>schedule</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>SCHEDULE</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        </router-link>
            <router-link :to="{ name: 'locations', params: {dataToPass: this.fields}}">
        <v-list-tile>
          <v-list-tile-action>
            <v-icon>location_on</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>LOCATIONS</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
            </router-link>
            <router-link :to="{ name: 'teams', params: {dataToPass: this.teams}}">
        <v-list-tile>
          <v-list-tile-action>
            <v-icon>group</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>TEAMS</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
            </router-link>
            <router-link :to="{ name: 'chat', params: {dataToPass: this.info}}">
        <v-list-tile>
          <v-list-tile-action>
            <v-icon>chat_bubble</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>CHAT</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
            </router-link>
      </v-list>
    </v-navigation-drawer>
    <v-footer :fixed="fixed" app>
      <span>&copy;  2018</span>
    </v-footer>
  </v-app>
</template>
<style>
href {
  text-decoration: none;
}
a {
  text-decoration: none;
}
router link {
  text-decoration: none;
}
</style>


<script>
export default {
  name: "App",
  data() {
    return {
      clipped: false,
      drawer: true,
      fixed: false,
      App: false,
      info: null,
      miniVariant: false,
      right: true,
      sideNav: false,
      teams:'null',
      fields: 'null'
    };
  },
  created(){
    this.getData();
  },
  methods: {
    getData(){
      fetch("https://api.myjson.com/bins/gla14")
    .then(resp => 
      resp.json())
    .then((data) => {
    this.info = data.Matches;
    this.teams = data.Teams;
    this.fields = data.Fields;
    })
    }
  }
};
</script>
