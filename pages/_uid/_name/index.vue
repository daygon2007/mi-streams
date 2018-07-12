<template>
    <div>
        <div v-for="(streamer, i) in users">
          <div v-if="online == true">
            <div v-if="streamer.acf.mixer_user_name">
                <div v-if="mixer.user">
                    <div v-if="streamer.acf.mixer_user_name == mixer.user.username">
                        <v-container>
                          <v-layout row wrap>
                            <v-flex md8 xs12>
                              <h1>
                                  {{ streamer.title.rendered }} is <span v-if="mixer.online === true">streaming {{ mixer.type.name }} to {{ mixer.viewersCurrent }} viewers</span><span v-else>currently offline.</span>
                              </h1>
                              <v-card>
                              <div class="resp-container">
                                <iframe class="resp-iframe" allowfullscreen="true" :src="'https://mixer.com/embed/player/' + mixer.user.username  + '?disableLowLatency=1'"> </iframe>
                              </div>
                              </v-card>
                            </v-flex>
                            <v-flex md4 xs12>
                              <v-card height="100%">
                              <div class="resp-container" style="height:100%;">
                                <iframe class="resp-iframe" allowfullscreen="true" :src="'https://mixer.com/embed/chat/' + mixer.user.username  + '?disableLowLatency=1'"> </iframe>
                              </div>
                              </v-card>
                            </v-flex>
                          </v-layout>
                        </v-container>
                    </div>
                </div>
            </div>
            </div>
            <!-- End If Mixer Online -->
            <!-- Add Twitch Here -->
            <div v-else-if="twitchOnline === true">
              <v-container>
                <v-layout row wrap>
                  <v-flex xs12>
                    <h1>{{ streamer.acf.twitch_user_name }} is streaming for {{ twitch.data[0].viewer_count }}viewers</h1>
                    <VueTwitchPlayer :channel="streamer.acf.twitch_user_name"></VueTwitchPlayer>
                  </v-flex>
                </v-layout>
              </v-container>
            </div>
            <!-- End If Twitch Online -->
            <!-- TODO: Insert Facebook Gaming and YouTube Gaming Here -->
            <!-- Facebook.gg URL example with user name: https://www.facebook.com/pg/PoolsharkGaming/videos/{{ video.id }} -->
            <!-- Begin Offline -->
            <div v-else>
              <v-container>
                <v-layout row wrap>
                  <v-flex xs12>
                    <h1>{{ streamer.title.rendered }} is currently not streaming</h1>
                  </v-flex>
                </v-layout>
              </v-container>
            </div>
            <v-container>
              <v-layout row wrap>
                <v-flex xs12>
                  <div id="bio" v-html="streamer.acf.streamer_bio"></div>
                </v-flex>
              </v-layout>
            </v-container>
        </div>
    </div>
</template>
<script>
  import axios from 'axios'
  import VueTwitchPlayer from 'vue-twitch-player'
  export default {
    components: {
      VueTwitchPlayer
    },
    data () {
      return {
        users: [],
        mixer: [],
        twitch: [],
        error: '',
        online: '',
        twitchOnline: '',
        channel: ''
      }
    },
    created () {
      axios.get('WORDPRESS API ENDPOPINT URL?filter[name]=' + this.$route.params.name)
        .then(response => {
          this.users = response.data
          this.mixerUser = this.users[0].acf.mixer_user_name
          this.twitchUser = this.users[0].acf.twitch_user_name
          this.channel = this.users[0].acf.twitch_user_name
          // Mixer Stuff
          if (this.mixerUser !== '') {
            axios.get('https://mixer.com/api/v1/channels/' + this.mixerUser)
              .then(res => {
                this.mixer = res.data
                if (this.mixer.online === true) {
                  this.online = true
                } else {
                  this.online = false
                }
                console.log(this.mixer.online)
              }).catch(err => {
                this.errors.push(err)
              })
          }
          console.log(this.twitchUser)
          if (this.twitchUser !== '') {
            axios.get('https://api.twitch.tv/helix/streams?user_login=' + this.twitchUser, { 'headers': { 'Client-ID': 'YOUR CLIENT ID', 'Accept': 'application/vnd.twitchtv.v5+json' } })
              .then(res => {
                this.twitch = res.data
                console.log(this.twitch.data[0].type)
                if (this.twitch.data[0].type === 'live') {
                  this.twitchOnline = true
                } else {
                  this.twitchOnline = false
                }
              }).catch(err => {
                this.errors.push(err)
              })
          }
        }).catch(e => {
          this.errors.push(e)
        })
    }
  }
</script>

<style>
.resp-container {
    position: relative;
    overflow: hidden;
    padding-top: 56.25%;
}
.resp-iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: 0;
}
</style>