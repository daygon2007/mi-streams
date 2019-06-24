import Vue from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faTwitch } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// asociate it to the library, if you need to add more you can separate them by a comma
library.add(faTwitch)
Vue.component('font-awesome-icon', FontAwesomeIcon)
