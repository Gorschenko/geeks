<template>
<aside class="filter">
    <header class="filter__header">
      <span class="filter__header-title">Filter</span>
      <button class="button button_secondary" @click="clear">Clear</button>
    </header>
    <section class="filter__main">
      <form class="filter__form">
        <Checkbox name="categories" :items="categories" v-model="checkedCategories" :key="componentKey"/>
        <Checkbox name="levels" :items="levels" v-model="checkedLevels" :key="componentKey"/>
      </form>
    </section>
</aside>
</template>

<script>
import Checkbox from '../parts/Checkbox'
import {ref, watch} from 'vue'
import {useStore} from 'vuex'

export default {
components: { Checkbox },

emits: ['filter-courses'],

setup(_, context) {
  const store = useStore()
  const categories = store.state.categories
  const levels = store.state.levels
  const checkedCategories = ref([])
  const checkedLevels = ref([])
  const componentKey = ref()

  watch([checkedCategories, checkedLevels], values => {
    context.emit('filter-courses', values)
  })

  function clear() {
    checkedCategories.value = []
    checkedLevels.value = []
    componentKey.value = Math.random()
  }

  return {
    categories, levels, componentKey,
    checkedCategories, checkedLevels,
    clear
  }
}
}
</script>

<style scoped lang="scss">
.filter {
  padding: 1.5rem;
  border-radius: 0.5rem;
  background: white;
  color: $color-secondary;
  box-shadow: 3px 3px 5px $color-secondary-light;

  &__header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 1rem;
  }
}
</style>