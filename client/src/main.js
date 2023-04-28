import { createApp } from 'vue'
import Antd from 'ant-design-vue'
import App from './App.vue'
import AuthPage from "@/pages/AuthPage.vue";
import Dashboard from "@/pages/Dashboard.vue";
import AuthForm from "@/components/AuthForm.vue";
import TodoCard from "@/components/TodoCard.vue";
import 'ant-design-vue/dist/antd.css'

import store from "@/store/store"
import router from "@/router"

import './assets/main.css'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'
/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
/* import specific icons */
import { faPenToSquare, faUser, faAddressCard } from '@fortawesome/free-regular-svg-icons'
import { faTrash, faLock, faShieldHalved, faArrowRightFromBracket, faXmark, faPlus } from '@fortawesome/free-solid-svg-icons'
/* add icons to the library */
library.add(
  // regular icons
  faPenToSquare, faTrash, faUser, faAddressCard,
  // solid icons
  faLock, faShieldHalved, faArrowRightFromBracket, faXmark, faPlus
)

const app = createApp(App)

app.component('AuthPage', AuthPage)
  .component('Dashboard', Dashboard)
  .component('AuthForm', AuthForm)
  .component('TodoCard', TodoCard)
  .component('font-awesome-icon', FontAwesomeIcon)

app.use(store)
app.use(router)
app.use(Antd).mount('#app')