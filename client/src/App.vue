<script>
import AuthPage from '@/pages/AuthPage.vue'
import TodosPage from "@/pages/TodosPage.vue"
export default {
  name: 'App',
  components: {
    TodosPage,
    AuthPage
  },
}
</script>

<template>
  <TodosPage/>
<!--  <AuthPage/>-->
</template>

<style scoped>

</style>
