import Vue from 'vue'
import App from './App.vue'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faArrowCircleDown, faDownload, faCode, faTerminal, faMicrochip, faVrCardboard,
        faRobot, faPlane, faSatellite, faMemory } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import './registerServiceWorker'
import router from './router'

library.add(faArrowCircleDown, faDownload, faCode, faTerminal, faMicrochip, faVrCardboard,
  faRobot, faPlane, faSatellite, faMemory)
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
