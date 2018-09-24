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
      temporary
      :right="right"
      v-model="sideNav"
      app
    >
      <v-list>

          <v-list-tile-title><v-icon>home</v-icon><router-link to= "/">  Home</router-link></v-list-tile-title><v-divider></v-divider>
    
          <v-list-tile-title><v-icon>schedule</v-icon><router-link to= "/schedule">  Schedule</router-link></v-list-tile-title><v-divider></v-divider>
          <v-list-tile-title><v-icon>location_on</v-icon><router-link to= "/locations">  Location</router-link></v-list-tile-title><v-divider></v-divider>
          <v-list-tile-title><v-icon>group</v-icon><router-link to= "/teams">    Teams</router-link></v-list-tile-title><v-divider></v-divider>
          <v-list-tile-title><v-icon>chat_bubble</v-icon><router-link to= "/chat">    Chat</router-link></v-list-tile-title><v-divider></v-divider>

      </v-list>
    </v-navigation-drawer>
    <v-footer :fixed="fixed" app>
      <span>&copy; 2018</span>
    </v-footer>
  </v-app>
</template>

<script>

export default {
  name: 'App',
  data () {
    return {
      clipped: false,
      drawer: true,
      fixed: false,
      App: false,
      items: [{
        icon: 'bubble_chart',
        title: 'Inspire'
      }],
      miniVariant: false,
      right: true,
      sideNav: false,
      title: 'NYSL Soccer League'
    }
  }
}
</script>
