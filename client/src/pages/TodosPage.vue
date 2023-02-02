<template>
  <div class="todos-page__wrapper">
    <a-layout class="todos-page__container">
      <a-layout-content>
        <a-row class="row" :gutter="16">
          <a-col span="8">
            <TodoCard/>
          </a-col>
          <a-col span="8">
            <TodoCard/>
          </a-col>
          <a-col span="8">
            <TodoCard/>
          </a-col>
        </a-row>
      </a-layout-content>
    </a-layout>
  </div>
</template>

<script>
export default {
  name: "TodosPage",
  components: {}

}
</script>

<style lang="scss" scoped>
.todos-page {
  &__container {
    background: white;
  }
}
</style>