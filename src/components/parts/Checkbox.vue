<template>
<div class="checkbox">
  <h1 class="checkbox__title">{{name}}</h1>
  <ul class="checkbox__list">
    <li class="checkbox__list-item" v-for="item in items" :key="item">
      <label class="checkbox__list-item-name">
        <input
          class="checkbox__list-item-input"
          type="checkbox"
          :name="name"
          :value="item"
          v-model="checked"
        >{{item}}</label>
    </li>
  </ul>
</div>
</template>

<script>
import {ref, watch} from 'vue'

export default {
emits: ['update:modelValue'],
props: ['name', 'items', 'modelValue'],

setup(_, context) {
  const checked = ref([])

  watch(checked, value => {
    context.emit('update:modelValue', value)
  })

  return {
    checked
  }
}
}
</script>

<style scoped lang="scss">
.checkbox {
  padding-top: 0.5rem;
  border-top: 1px solid $color-secondary-light;

  &__title {
    margin-bottom: 0.5rem;
    font-size: 1rem;
    text-transform: uppercase;
    color: $color-secondary;
  }

  &__list {
    &-item {
      margin-bottom: 0.5rem;
      
      &-input {
        margin-right: 0.5rem;
      }
    }
  }
}
</style>