<template>
  <div class="todo-card__wrapper">
    <div class="todo-card__content">
      <div class="todo-card__header">
        <h1>Hello</h1>
      </div>
      <div class="todo-card__description">
        <p>Lorem ipsum Lorem ipsumLorem ipsum Lorem ipsum Lorem ipsum</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TodoCard"
}
</script>

<style lang="scss" scoped>
.todo-card {
  &__wrapper {
    width: 100%;
    background: white;
    border: 1px solid #00000028;
    border-radius: 8px;
    min-height: 300px;
  }

  &__content {
    padding: 10px;
  }

  &__header {
    width: 100%;
  }
}
</style>