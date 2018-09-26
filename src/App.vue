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
      
      <v-toolbar-title v-text="title"></v-toolbar-title>
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
        <v-list-tile @click="">
          <v-list-tile-action>
            <v-icon>home</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>HOME</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile @click="">
          <v-list-tile-action>
            <v-icon>schedule</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>SCHEDULE</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile @click="">
          <v-list-tile-action>
            <v-icon>location_on</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>LOCATIONS</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile @click="">
          <v-list-tile-action>
            <v-icon>group</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>TEAMS</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile @click="">
          <v-list-tile-action>
            <v-icon>chat_bubble</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>CHAT</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-footer :fixed="fixed" app>
      <span>&copy;  2018</span>
    </v-footer>
  </v-app>
</template>
<style>

a {
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
      info: [],
      miniVariant: false,
      right: true,
      sideNav: false,
      title: "NYSL Soccer League"
    };
  },
  created(){
    this.getData();
  },
  methods: {
    getData(){
      fetch("https://api.myjson.com/bins/1eyfrg")
    .then(resp => 
      resp.json())
    .then((data) => {
    this.info = data.Matches;
    console.log(this.info);
    })
    }
  }
};
</script>
