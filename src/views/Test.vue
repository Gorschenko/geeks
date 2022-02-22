<template>
<section class="test">
  <div class="inner">

    <div class="test__header">
      <button
        class="button button_success mr-1"
        @click="loadPosts"
      >Загрузить список</button>
      <ol class="pages">
        <li
        v-for="pageNumber in totalPages"
        :key="pageNumber"
        :class="{
          'pages__item': true,
          'text_smallest': true,
          'pages__item_active': page === pageNumber
        }"
        @click="page = pageNumber"
        >{{ pageNumber }}</li>
      </ol>
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

  </div>
</section>
</template>

<script>
import axios from 'axios'
export default {
data() {
  return {
    posts: [],
    page: 1,
    limitPosts: 10,
    totalPages: 0
  }
},
mounted() {
  this.loadPosts()
},
methods: {
  async loadPosts() {
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
        params: {
          _page: this.page,
          _limit: this.limitPosts
        }
      })
      this.posts = response.data
      this.totalPages = Math.ceil(response.headers['x-total-count'] / this.limitPosts)
    } catch(e) {}
  }
},
watch: {
  page() {
    this.loadPosts()
  }
}
}
</script>

<style lang="scss" scoped>
.test {
  &__header {
    display: flex;
    margin-bottom: 1rem;
  }
}

.pages {
  display: flex;
  &__item {
    padding: 10px;
    outline: $border-secondary;
    cursor: pointer;
    &_active {
      background: $color-success;
    }
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
