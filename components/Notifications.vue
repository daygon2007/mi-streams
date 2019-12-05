<template>
  <div>
    <v-alert v-model="alertA" dismissible type="warning" outline @click="dismissA">
        This app is currently in Alpha so there might be some bugs. As of now stats will only support PC versions of select games, however, work will be done to support all platforms in the future.
      </v-alert>
      <v-alert v-model="alertB" dismissible type="success" outline @click="dismissB">
        Currently Supported Games: Apex Legends, Fortnite, & PlayerUnknown's Battlegrounds
      </v-alert>
    </div>
</template>
<script>
export default{
  methods: {
    dismissA () {
      this.$store.commit('toggleA')
    },
    dismissB () {
      this.$store.commit('toggleB')
    }
  },
  computed: {
    alertA () {
      console.log(this.$store)
      return this.$store.state.alertA
    },
    alertB () {
      return this.$store.state.alertB
    }
  }
}
</script>