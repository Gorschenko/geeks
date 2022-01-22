<template>
<div class="search">
  <img class="search__icon" src="../../assets/icons/search.svg">
  <form class="search__form" @submit.prevent="submit">
    <input
      type="text"
      class="search__form-input"
      placeholder="Search Courses"
      v-model="text"
    >
  </form>
  <button
    class="search__form-button"
    v-if="isValid"
    @click="clear"
  >X</button>
  <div class="search__form-button" v-else></div>
</div>
</template>

<script>
import {ref, computed} from 'vue'

export default {
setup() {
  const text = ref('')
  const isValid = computed(() => text.value.length !== 0)
  const clear = () => text.value = ''
  const submit = () => {
    if (isValid.value) {
      console.log('submit')
      clear()
    }
  }
  return {
    text,
    isValid,
    clear,
    submit
  }
}
}
</script>

<style scoped lang="scss">
.search {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 280px;
  height: 100%;
  padding: 0.5rem;
  border-radius: 0.25rem;
  outline: 1px solid $color-secondary-light;
  transition: 0.5s;

  &:hover {
    outline: 1px solid $color-primary;
  }

  &__icon {
    width: 20px;
    margin: 0 0.5rem;
  }

  &__form {
    &-input {
      height: 100%;
      color: $color-dark;
    }
    
    &-button {
      margin: 0 0.5rem;
      color: $color-primary;
      font-weight: 600;
      cursor: pointer;
    }
  }
}
</style>