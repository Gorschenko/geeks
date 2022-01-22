<template>
<aside class="aside">
  <button
    class="button button_success"
    @click="$emit('add-article')"
  >Добавить запись</button>
</aside>
</template>

<script>
export default {
  emits: ['add-article']
}
</script>

<style lang="scss" scoped>
.aside {
  padding: 20px;
  border-radius: 10px;
  box-shadow: $shadow-secondary-light;
}
</style>