<template>
  <v-container>
    <v-alert v-model="alertA" dismissible type="warning" outline>
        This app is currently in Alpha so there might be some bugs. As of now stats will only support PC versions of select games, however, work will be done to support all platforms in the future.
      </v-alert>
      <v-alert v-model="alertB" dismissible type="success" outline>
        Currently Supported Games: Apex Legends, Fortnite, & PlayerUnknown's Battlegrounds
      </v-alert>
    <v-layout row wrap>
      <v-flex xs12 class="text-xs-center">
        <h1>Welcome To the Malicious Intentions Stream Team</h1>
        <p>This is a simple app to see which MI official streamers are online, without having to login to any of the stream platforms, and see their stats for the game they're playing.</p>
      </v-flex>
    </v-layout>
    <v-layout row wrap v-if="loading">
      <v-flex xs-12 class="text-xs-center" mt-5>
        <v-progress-circular
      indeterminate
      color="purple"
      :size="100"
      class="text-xs-center align-center d-inline-block"
      :width:="0"
    ></v-progress-circular>
      </v-flex>
    </v-layout>
    <v-layout row wrap v-else>
          <v-flex xs12 md2 mb-3 pa-3 :key="i"
            :name="user.title.rendered"
            :uid="user.id"
            v-for="(user, i) in users">
            <v-card router
            :to="'/user/' + user.title.rendered"
            class="text-xs-center"
            >
              <v-img
                v-if="user.acf.streamer_logo" :src="user.acf.streamer_logo.sizes.medium" height="user.acf.streamer_logo.sizes.medium-height" width="user.acf.streamer_logo.sizes.medium-width" aspect-ratio="1"
              ></v-img>
      
              <v-card-title primary-title class="text-xs-center">
                  <h3 class="headline mb-0 text-xs-center" align-center>{{ user.title.rendered}}</h3>
              </v-card-title>
      
              <v-card-actions>
                <v-btn color="purple darken-2">Check Me Out</v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
</template>
<script>
  import axios from 'axios'
  export default {
    data () {
      return {
        users: [],
        alertA: true,
        alertB: true,
        loading: true
      }
    },
    created () {
      console.log(this.loading)
      this.loading = true
      axios.get('https://www.malicious-intentions.com/wp-json/wp/v2/streamers')
        .then(response => {
          console.log(response)
          this.users = response.data
          this.loading = false
          console.log(this.loading)
          console.log(this.users)
        }).catch(e => {
          this.errors.push(e)
          this.loading = false
        })
      // axios.get();
      // axios.get();
    }
  }
</script>