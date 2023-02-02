import { createApp } from 'vue'
import Antd from 'ant-design-vue'
import { UserOutlined, LockOutlined } from '@ant-design/icons-vue'
import App from './App.vue'
import AuthPage from "@/pages/AuthPage.vue";
import TodosPage from "@/pages/TodosPage.vue";
import AuthForm from "@/components/AuthForm.vue";
import TodoCard from "@/components/TodoCard.vue";
import 'ant-design-vue/dist/antd.css'

import './assets/main.css'

const app = createApp(App)

app.component('AuthPage', AuthPage)
   .component('TodosPage', TodosPage)
   .component('AuthForm', AuthForm)
   .component('TodoCard', TodoCard)
   .component(UserOutlined.name, UserOutlined)
   .component(LockOutlined.name, LockOutlined)

app.use(Antd).mount('#app')