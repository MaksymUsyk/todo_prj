import { createApp } from 'vue'
import Antd from 'ant-design-vue'
import App from './App.vue'
import AuthPage from "@/pages/AuthPage.vue";
import TodosPage from "@/pages/TodosPage.vue";
import AuthForm from "@/components/AuthForm.vue";
import TodoCard from "@/components/TodoCard.vue";
import 'ant-design-vue/dist/antd.css'

import './assets/main.css'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'
/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
/* import specific icons */
import { faPenToSquare, faUser } from '@fortawesome/free-regular-svg-icons'
import { faTrash, faLock, faShieldHalved } from '@fortawesome/free-solid-svg-icons'
/* add icons to the library */
library.add(faPenToSquare, faTrash, faUser, faLock, faShieldHalved)

const app = createApp(App)

app.component('AuthPage', AuthPage)
  .component('TodosPage', TodosPage)
  .component('AuthForm', AuthForm)
  .component('TodoCard', TodoCard)
  .component('font-awesome-icon', FontAwesomeIcon)

app.use(Antd).mount('#app')