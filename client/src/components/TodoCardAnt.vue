<template>
  <a-card :class="isDone ? 'ready' : ''" :title="data.title">
    <p>{{data.description}}</p>
    <template #actions>
      <a-checkbox v-model:checked="isDone">Ready</a-checkbox>
      <font-awesome-icon icon="fa-regular fa-pen-to-square" />
      <font-awesome-icon icon="fa-solid fa-trash" />
    </template>
  </a-card>
</template>

<script>
import { ref } from "vue"

export default {
  name: "TodoCardAnt",
  setup (props) {
    return {
      isDone: ref(props.data.isDone)
    }
  },
  props: {
    data: {
      type: Object,
      default: () => null
    }
  }
}
</script>

<style lang="scss" scoped>
.ready {
  text-decoration: line-through !important;
  color: rgba(0, 0, 0, 0.45);
}

</style>