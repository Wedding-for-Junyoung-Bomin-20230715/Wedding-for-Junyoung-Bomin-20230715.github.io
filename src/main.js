import { createApp } from 'vue'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faMagnifyingGlass, faAngleUp, faAngleDown } from '@fortawesome/free-solid-svg-icons'
import { faCircleXmark, faCopy, faShareFromSquare } from '@fortawesome/free-regular-svg-icons'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Vue3SlideUpDown } from 'vue3-slide-up-down'

import App from './App'

const vuetify = createVuetify({
  components,
  directives,
})

/* add icons to the library */
library.add(faMagnifyingGlass, faCircleXmark, faAngleUp, faAngleDown, faCopy, faShareFromSquare)

gsap.registerPlugin(ScrollTrigger)

const app = createApp(App)
app.use(vuetify)
app.component('font-awesome-icon', FontAwesomeIcon)
app.component('vue-slide-up-down', Vue3SlideUpDown)
app.mount('#app')