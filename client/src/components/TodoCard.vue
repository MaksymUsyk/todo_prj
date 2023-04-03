<template>
  <div class="todo-card__wrapper">
    <div class="todo-card__body">
      <div class="todo-card__header">
        <h1>{{data.title}}</h1>
      </div>
      <div class="todo-card__description">
        <p>{{data.description}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TodoCard",
  props: {
    data: {
      type: Object,
      default: () => null
    }
  }
}
</script>

<style lang="scss" scoped>
.todo-card {
  &__wrapper {
    width: 100%;
    background: white;
    border: 1px solid #00000028;
    border-radius: 8px;
    min-height: 200px;
  }

  &__body {
    padding: 10px;
  }

  &__header {
    width: 100%;
  }
}
</style>