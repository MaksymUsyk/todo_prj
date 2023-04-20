<template>
  <a-form :onSubmit={handleSubmit} class="auth-form" :model="formData">
    <a-form-item
      name="login"
      :rules="[{ required: true, message: 'Please input your username!' }]">
      <a-input
        placeholder="Login"
        v-model:value="formData.login"
      >
        <template #prefix>
          <font-awesome-icon icon="fa-regular fa-user" />
        </template>
      </a-input>
    </a-form-item>
    <a-form-item
      name="password"
      :rules="[{ required: true, message: 'Please input your Password!' }]"
    >
      <a-input
        type="password"
        placeholder="Password"
        v-model:value="formData.password"
      >
        <template #prefix>
          <font-awesome-icon icon="fa-solid fa-shield-halved" />
        </template>
      </a-input>
    </a-form-item>
    <a-form-item>
      <a-checkbox v-model:checked="formData.remember">Remember me</a-checkbox>
    </a-form-item>
    <a-form-item>
      <a-button
        type="primary"
        htmlType="submit"
        class="auth-form-button"
      >
        {{formMode === 'login' ? 'Log in' : 'Register'}}
      </a-button>
      Or <a @click.prevent="toggleFormMode">{{formMode === 'login' ? 'Register' : 'Log in'}}</a>
    </a-form-item>
  </a-Form>
</template>

<script>
import { ref } from "vue"
import { useStore } from "vuex"
import { useRouter } from "vue-router"

export default {
  setup() {
    const store = useStore()
    const router = useRouter()
    const formMode = ref('register')

    const toggleFormMode = () => {
      formMode.value = formMode.value === 'login' ? 'register' : 'login'
    }

    const formData = ref({
      username: "",
      password: "",
      remember: true,
    });

    const onLogin = () => {
      store.dispatch('AuthModule/onLogin', {
        login: formData.value.username,
        password: formData.value.password
      }).then(() => {
        router.push(({ name: 'Home '}))
      })
    }
    const handleSubmit = () => {
      if (formMode.value === 'login') {
        onLogin()
      }
    }

    return { formMode, formData, toggleFormMode, handleSubmit }
  }
}
</script>

<style scoped>
.auth-form {
  /*max-width: 300px;*/
  width: 100%;
}
.auth-form-forgot {
  float: right;
}
.auth-form-button {
  width: 100%;
}
</style>