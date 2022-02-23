<template>
<section class="mail">
  <div class="inner">

    <section class="emails">

      <ul class="emails__list">
        <li class="emails__list-item" v-for="email in emails" :key="email">
          <router-link :to="'/mail/' + email.id">
            {{ email.title }}
          </router-link>
        </li>
      </ul>

      <router-view :emails="emails"></router-view>

    </section>

  </div>
</section>
</template>

<script>
import axios from 'axios'

export default {
data() {
  return {
    emails: []
  }
},
mounted() {
  this.loadEmails()
},
methods: {
  async loadEmails() {
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/posts?_page=1')
      this.emails = response.data
    } catch(e) {}
  }
}
}
</script>

<style lang="scss" scoped>
.emails {
  @include container;
  display: grid;
  grid-template-columns: 0.5fr 1.5fr;
  grid-template-rows: 1fr;

  margin: 0 auto;
  &__list {
    margin-right: 1rem;
    &-item {
      overflow: hidden;
      margin-bottom: 0.5rem;
      padding-bottom: 1rem;
      border-bottom: $border-secondary-light;
    }
  }
}
</style>
