import './assets/main.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faHatWizard } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import { createApp } from 'vue'
import App from './App.vue'

library.add(faHatWizard)

createApp(App)
    .component("font-awesome-icon", FontAwesomeIcon)
    .mount('#app')