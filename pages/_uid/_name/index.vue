<template>
    <div>
      <Notifications></Notifications>
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
      <div v-for="(streamer, i) in users" v-else>
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
                    <GameStats :gameTitle="game" :apexPF="apexPF" :apexUN="apexUN" :pubgPF="pubgPF" :pubgUN="pubgUN" :fortniteUN="fortniteUN" v-if="game"></GameStats>
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
  import Notifications from '~/components/Notifications.vue'
  export default {
    components: {
      VueTwitchPlayer,
      GameStats,
      Notifications
    },
    data () {
      return {
        drawer: true,
        alertA: true,
        alertB: true,
        loading: true,
        users: [],
        mixer: [],
        twitch: [0],
        error: null,
        online: null,
        twitchOnline: null,
        channel: null,
        game: null,
        /* game: "PLAYERUNKNOWN'S BATTLEGROUNDS", */
        /* game: 'Apex Legends', */
        /* game: 'Fortnite', */
        stats: null,
        apexUN: null,
        apexPF: null,
        pubgUN: null,
        pubgPF: null,
        fortniteUN: null
      }
    },
    created () {
      this.loading = true
      axios.get('https://www.wickedvicious.com/wp-json/wp/v2/streamers?filter[name]=' + this.$route.params.name)
        .then(response => {
          this.users = response.data
          this.mixerUser = this.users[0].acf.mixer_user_name
          this.twitchUser = this.users[0].acf.twitch_user_name
          this.channel = this.users[0].acf.twitch_user_name
          this.apexUN = this.users[0].acf.apex_legends_user_name
          this.apexPF = this.users[0].acf.apex_legends_platform
          this.pubgUN = this.users[0].acf.playerunknowns_battlegrounds_user_name
          this.pubgPF = this.users[0].acf.playerunknowns_battlegrounds_platform
          this.fortniteUN = this.users[0].acf.fortnite_user_name
          console.log('PUBG Username is: ' + this.pubgUN)
          this.pbgUN = this.users[0].acf.playerunknowns_battlegrounds_user_name
          this.pubgPF = this.users[0].acf.playerunknowns_battlegrounds_platform
          this.fortniteUN = this.users[0].acf.fortnite_user_name
          /* ==========CALL MIXER========== */
          /* if (this.mixerUser !== '') {
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
          } */
          // console.log(this.twitchUser)
          /* ==========CALL TWITCH========== */
          if (this.twitchUser !== '') {
            axios.get('https://api.twitch.tv/helix/streams?user_login=' + this.twitchUser, { 'headers': { 'Client-ID': 'a039tkgg05y0fuwvt174q6gjqj4lol', 'Accept': 'application/vnd.twitchtv.v5+json' } })
              .then(res => {
                this.twitch = res.data
                //  console.log(res.data)
                //  console.log(this.twitch.data[0].type)
                // console.log(res.data)
                // console.log(this.twitch.data[0].type)
                if (this.twitch.data[0].type === 'live') {
                  this.twitchOnline = true
                  axios.get('https://api.twitch.tv/helix/games?id=' + this.twitch.data[0].game_id, { 'headers': { 'Client-ID': 'a039tkgg05y0fuwvt174q6gjqj4lol', 'Accept': 'application/vnd.twitchtv.v5+json' } })
                    .then(response => {
                      this.game = response.data.data[0].name
                      console.log(response)
                      // console.log(response)
                      this.loading = false
                    })
                } else {
                  this.twitchOnline = false
                  this.loading = false
                }
              }).catch((err) => {
                // this.error.push(err)
                // this.errors.push(err)
                console.log('error here ' + err)
                this.loading = false
              })
          }
        }).catch((e) => {
          this.errors.push(e)
          // this.errors.push(e)
          console.log(e)
          this.loading = false
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