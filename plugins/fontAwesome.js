import Vue from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faChevronDown, faPhone, faAt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faGithub, faBehance, faLinkedin, faFacebook } from '@fortawesome/free-brands-svg-icons'

library.add(faChevronDown, faPhone, faAt, faGithub, faBehance, faLinkedin, faFacebook)

Vue.component('FontAwesomeIcon', FontAwesomeIcon)
