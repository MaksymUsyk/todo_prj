<template>
  <div class="auth-page__wrapper">
    <a-row class="row" align="middle">
      <a-col offset="8" span="8">
        <AuthForm />
      </a-col>
    </a-row>
  </div>
</template>

<script>
export default {
  name: "AuthPage"
}
</script>

<style scoped>
.auth-page__wrapper {
  height: 100%;
}

.row {
  height: 100%;
}
</style>