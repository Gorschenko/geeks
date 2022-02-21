<template>
<section class="test">

  <div class="test__header">
    <button
      class="button button_success"
      @click="loadPosts"
    >Загрузить список</button>
  </div>

  <div class="test__body">
    <ul class="list">
      <li class="list__item" v-for="post in posts">
        <span class="text text_small text_bold text_primary mb-05">{{ post.id }}</span>
        <h1 class="text text_smallest mb-05">{{ post.title }}</h1>
        <p class="text text_smallest">{{ post.body }}</p>
      </li>
    </ul>
  </div>
</section>
</template>

<script>
import axios from 'axios'
export default {
data() {
  return {
    posts: []
  }
},
methods: {
  async loadPosts() {
    try {
      const {data} = await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=50')
      this.posts = data
    } catch(e) {}
  }
}
}
</script>

<style lang="scss" scoped>
.test {
  &__header {
    margin-bottom: 1rem;
  }
}
.list {
  &__item {
    @include container;
    width: 80%;
    margin: 0 auto 1rem;
  }
}
</style>
