<template>
<section class="article">
  <div class="inner">
    <ul>
      <li v-for="article in articles">
        {{ article.id }}
      </li>
    </ul>
  </div>
</section>
</template>
<script>
import {useStore} from 'vuex'
import {computed} from 'vue'

export default {
props: ['articleId'],
setup() {
  const store = useStore()
  return {
    articles: computed(() => store.getters['articlesModule/articles'])
  }
}
}
</script>
<style lang="scss" scoped>
.article {
  background: orange;
}
</style>
