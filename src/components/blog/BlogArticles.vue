<template>
  <section class="articles">
    <transition-group class="articles__list" name="list" tag="ul">
      <li 
        class="articles__list-item" 
        v-for="article in articles"
        :key="article.id"
      >
        <span class="text text_bold text_primary mb-1">{{ article.category }}</span>
        <h1 class="text_smallest text_dark text_hidden mb-1">{{ article.title }}</h1>
        <p class="text text_secondary mb-1">{{ article.content }}</p>
        <router-link
          class="button primary mr-1"
          to="/home"
        >Подробнее</router-link>
        <button
          class="button danger"
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
    &-item {
      @include container;
      width: calc(100%/3 - 1rem);
      margin: 0 0.5rem 0.5rem 0.5rem;
      background: white;
      transition: all 0.5s ease;
    }
  }
}
</style>