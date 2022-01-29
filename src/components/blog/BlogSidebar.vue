<template>
<aside class="aside">
  <button
    class="button button_success mb-1"
    @click="$emit('add-article')"
  >Добавить статью</button>
    <button
    class="button button_success"
    @click="$emit('load-articles')"
  >Загрузить список</button>
</aside>
</template>

<script>
export default {
  emits: ['add-article', 'load-articles']
}
</script>

<style lang="scss" scoped>
.aside {
  padding: 20px;
  border-radius: 10px;
  box-shadow: $shadow-secondary-light;
}
</style>