<template>
  <section class="articles">
    <transition-group class="articles__list" name="list" tag="ul">
      <li
        class="articles__list-item"
        v-for="article in articles"
        :key="article.id"
      >
        <span class="text text_bold text_primary mb-1">{{ article.category }}</span>
        <h1 class="articles__list-item-title mb-1">{{ article.title }}</h1>
        <p class="articles__list-item-content mb-1">{{ article.content }}</p>
        <span class="text text_dark mb-1">{{ article.date }}</span>
        <router-link
          class="button button_primary mr-1"
          :to="'/article/' + article.id"
        >Подробнее</router-link>
        <button
          class="button button_danger"
          @click="$emit('remove-article', article.id)"
        >Удалить</button>
      </li>
    </transition-group>
  </section>
</template>

<script>
export default {
  emits: ['remove-article'],
  props: ['articles']
}
</script>

<style scoped lang="scss">
.articles {
  &__list {
    @include row;
    width: 100%;
    margin: 0 -0.5rem;
    &-item {
      @include container;
      width: calc(100%/3 - 1rem);
      margin: 0 0.5rem 0.5rem 0.5rem;
      background: white;
      transition: all 0.5s ease;
      &-title {
        overflow: hidden;
        min-height: 25px;
        max-height: 25px;
        font-size: 1.25rem;
        color: $color-dark;
      }
      &-content {
        overflow: hidden;
        min-height: 55px;
        max-height: 55px;
        color: $color-secondary;
      }
    }
  }
}
</style>
