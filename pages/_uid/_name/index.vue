<template>
    <div>
      <v-alert v-model="alertA" dismissible type="warning" outline>
        This app is currently in Alpha so there might be some bugs. As of now stats will only support PC versions of select games, however, work will be done to support all platforms in the future.
      </v-alert>
      <v-alert v-model="alertB" dismissible type="success" outline>
        Currently Supported Games: Apex Legends, Fortnite, & PlayerUnknown's Battlegrounds
      </v-alert>
      <div v-for="(streamer, i) in users">
          <div v-if="online == true">
            <div v-if="streamer.acf.mixer_user_name">
                <div v-if="mixer.user">
                    <div v-if="streamer.acf.mixer_user_name == mixer.user.username">
                        <v-container>
                          <v-layout row wrap>
                            <v-flex xs12>
                              <h1>
                                  {{ streamer.title.rendered }} is <span v-if="mixer.online === true">streaming {{ mixer.type.name }} to {{ mixer.viewersCurrent }} viewers</span><span v-else>currently offline.</span>
                              </h1>
                              </v-flex>
                            </v-layout>
                          </v-container>
                          <v-container>
                          <v-layout row wrap>
                            <v-flex md8 xs12>
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
                    <h1>{{ streamer.title.rendered }} is streaming {{game}} for {{ twitch.data[0].viewer_count }} viewers</h1>
                    </v-flex>
                    <v-flex xs12>
                      <v-card>
                        <VueTwitchPlayer :channel="streamer.acf.twitch_user_name" class="resp-container"></VueTwitchPlayer>
                      </v-card>
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
                  <div v-if="game">
                    This is where stats should go
                    <GameStats :gameTitle="game" :apexPF="apexPF" :apexUN="apexUN" :pubgPF="pubgPF" :pubgUN="pubgUN" v-if="game"></GameStats>
                  </div>
                </v-flex>
              </v-layout>
            </v-container>
        </div>
    </div>
</template>
<script>
  import axios from 'axios'
  import VueTwitchPlayer from 'vue-twitch-player'
  import GameStats from '~/components/GameStats.vue'
  export default {
    components: {
      VueTwitchPlayer,
      GameStats
    },
    data () {
      return {
        alertA: true,
        alertB: true,
        users: [],
        mixer: [],
        twitch: [0],
        error: null,
        online: null,
        twitchOnline: null,
        channel: null,
        /* game: null, */
        /* game: "PLAYERUNKNOWN'S BATTLEGROUNDS", */
        /* game: 'Apex Legends', */
        game: 'Fortnite',
        stats: null,
        apexUN: null,
        apexPF: null,
        pubgUN: null,
        pubgPF: null
      }
    },
    created () {
      axios.get('http://www.maliciousintentions.gg/wp-json/wp/v2/streamers?filter[name]=' + this.$route.params.name)
        .then(response => {
          this.users = response.data
          this.mixerUser = this.users[0].acf.mixer_user_name
          this.twitchUser = this.users[0].acf.twitch_user_name
          this.channel = this.users[0].acf.twitch_user_name
          this.apexUN = this.users[0].acf.apex_legends_user_name
          this.apexPF = this.users[0].acf.apex_legends_platform
          this.pybgUN = this.users[0].acf.playerunknowns_battlegrounds_user_name
          this.pubgPF = this.users[0].acf.playerunknowns_battlegrounds_platform
          /* ==========CALL MIXER========== */
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
          // console.log(this.twitchUser)
          /* ==========CALL TWITCH========== */
          /* if (this.twitchUser !== '') {
            axios.get('https://api.twitch.tv/helix/streams?user_login=' + this.twitchUser, { 'headers': { 'Client-ID': 'a039tkgg05y0fuwvt174q6gjqj4lol', 'Accept': 'application/vnd.twitchtv.v5+json' } })
              .then(res => {
                this.twitch = res.data
                // console.log(res.data)
                // console.log(this.twitch.data[0].type)
                if (this.twitch.data[0].type === 'live') {
                  this.twitchOnline = true
                  axios.get('https://api.twitch.tv/helix/games?id=' + this.twitch.data[0].game_id, { 'headers': { 'Client-ID': 'a039tkgg05y0fuwvt174q6gjqj4lol', 'Accept': 'application/vnd.twitchtv.v5+json' } })
                    .then(response => {
                      this.game = response.data.data[0].name
                      // console.log(response)
                    })
                } else {
                  this.twitchOnline = false
                }
              }).catch((err) => {
                // this.errors.push(err)
                console.log('error here ' + err)
              })
          } */
        }).catch((e) => {
          // this.errors.push(e)
          console.log(e)
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
iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: 0;
}
</style>