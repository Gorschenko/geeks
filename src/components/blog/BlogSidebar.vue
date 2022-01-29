<template>
<aside class="aside">
  <button
    class="button button_success mb-1"
    @click="$emit('add-article')"
  >Добавить статью</button>
</aside>
</template>

<script>
export default {
  emits: ['add-article']
}
</script>

<style lang="scss" scoped>
.aside {
  @include container;
}
</style>