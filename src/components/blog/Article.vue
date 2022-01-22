<template>
<article class="card">
  <span class="text card__category mb-2">{{ article.category }}</span>
  <h1 class="text_smallest text_dark mb-1 card__category-title">{{ article.title }}</h1>
  <p class="text text_secondary card__category-content mb-1">{{ article.content }}</p>
  <router-link
    class="card__category-link"
    to="/home"
  >Подробнее</router-link>
</article>
</template>

<script>
export default {
  props: ['article']
}
</script>

<style lang="scss" scoped>
.card {
  padding: 20px;
  box-shadow: $shadow-secondary-light;
  background: white;
  &__category {
    &-title {
      overflow: hidden;
      height: 45px;
    }
    &-content {
      overflow: hidden;
      height: 40px;
    }
    &-link {
      height: 20px;
      padding: 10px;
      border: $border-secondary-light;
      color: $color-secondary;
      transition: 0.5s;
      &:hover {
        background: $color-secondary-light;
        border: $border-secondary;
      }
    }
  }
}
</style>