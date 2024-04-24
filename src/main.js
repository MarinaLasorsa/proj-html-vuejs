import { createApp } from 'vue'
//import './style.css'
import App from './App.vue'

import { library } from '@fortawesome/fontawesome-svg-core'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import {
    faMagnifyingGlass,
    faAngleDown,
    faDownload,
    faCircle,
} from '@fortawesome/free-solid-svg-icons'
import {
    faCircleUser,
    faUser,
    faFileLines,
    faCalendar,
    faEye,
} from '@fortawesome/free-regular-svg-icons'
import {
    faSquareFacebook,
    faTwitter,
    faInstagram,
    faLinkedin
} from '@fortawesome/free-brands-svg-icons'

library.add(faMagnifyingGlass, faAngleDown, faDownload, faCircleUser, faUser, faFileLines, faCalendar, faEye, faSquareFacebook, faTwitter, faInstagram, faLinkedin, faCircle);

const app = createApp(App)

app.component('font-awesome-icon', FontAwesomeIcon)
app.mount('#app')
