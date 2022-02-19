<template>
<section class="sorting">
  <div class="sorting__buttons">
    <button
      @click="active = 'grid'"
      class="button sorting__button"
      :class="active === 'grid' ? 'button_primary' : 'button_secondary'"
    >
      <i class="fas fa-th-large"></i>
    </button>
    <button
      @click="active = 'list'"
      class="button sorting__button"
      :class="active === 'list' ? 'button_primary' : 'button_secondary'"
    >
      <i class="fas fa-list-ul"></i>
    </button>
  </div>
</section>
</template>
<script>
import {ref, watch} from 'vue'

export default {
emits: ['update:modelValue'],
props: ['modelValue'],
setup(_, context) {
  const active = ref('grid')

  watch(active, value => {
    context.emit('update:modelValue', value)
    console.log(value)
  })

  return {
    active
  }
}
}
</script>
<style scoped lang="scss">
.sorting {
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 100%;

  &__buttons {
    display: flex;
  }

  &__button {
    width: 60px;
  }
}
</style>
