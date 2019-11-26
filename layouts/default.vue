<template>
  <v-app dark>
    <v-navigation-drawer
      :mini-variant.sync="miniVariant"
      :clipped="clipped"
      v-model="drawer"
      fixed
      app
    >
      <v-list>
        <v-list-tile
          router
          :to="'/user/' + user.title.rendered"
          :key="i"
          :name="user.title.rendered"
          :uid="user.id"
          v-for="(user, i) in users"
          exact
        >
          <v-list-tile-action>
            <img v-if="user.acf.streamer_logo" :src="user.acf.streamer_logo.sizes.thumbnail" height="25" width="25" class="streamer-icon">
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>{{ user.title.rendered }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar fixed app :clipped-left="clipped">
      <v-toolbar-side-icon @click="drawer = !drawer"></v-toolbar-side-icon>
      <v-btn
        icon
        @click.stop="miniVariant = !miniVariant"
      >
        <v-icon v-html="miniVariant ? 'chevron_right' : 'chevron_left'"></v-icon>
      </v-btn>
      <v-toolbar-title><nuxt-link to="/" class="logo"><img src="http://wickedvicious.com/wp-content/themes/wicked-vicious/theme/img/logo-full-header.png" height="50" width="50" id="logo"> {{ title }}</nuxt-link></v-toolbar-title>
      <v-toolbar-title><nuxt-link to="/" class="logo"><img src="http://www.malicious-intentions.com/wp-content/uploads/2018/06/MI_logo_Purple_only_2_15.png" height="50" width="50" id="logo"> {{ title }}</nuxt-link></v-toolbar-title>
      <v-spacer></v-spacer>
    </v-toolbar>
    <v-content>
      <v-container>
        <nuxt uid="Test" />
      </v-container>
    </v-content>
    <v-footer :fixed="fixed" app>
      <span>&copy; 2019 | Developed by <a href="https://jonathon-harrelson.com" target="_blank">Jonathon Harrelson (Daygon07)</a></span>
    </v-footer>
  </v-app>
</template>

<script>
  import axios from 'axios'
  export default {
    data () {
      return {
        clipped: true,
        drawer: true,
        fixed: false,
        miniVariant: false,
        right: false,
        rightDrawer: false,
        title: 'Wicked Vicious Stream Team',
        users: [],
        custID: null
      }
    },
    created () {
      axios.get('http://www.malicious-intentions.com/wp-json/wp/v2/streamers')
        .then(response => {
          this.users = response.data
        }).catch(e => {
          this.errors.push(e)
        })
    }
  }
</script>
<style>
  .streamer-icon{
    float: right;
  }
  .streamer-icon:after{
    clear: both;
  }
  #logo{
    vertical-align: middle;
  }
  .logo{
    color: #fff;
    text-decoration: none;
  }
</style>