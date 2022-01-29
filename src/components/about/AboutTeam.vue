<template>
<section class="team">
  <Description :description="description"/>
  <ul class="team__list">
    <li class="team__list-item" v-for="author in authors">
      <div class="team__list-item-description">
        <span class="text text_bold text_smallest mb-025">{{author.female}} {{author.name}}</span>
        <span class="text text_secondary">{{author.position}}</span>
      </div>
      <img :src="require(`../../assets/image/avatars/avatar-medium-${author.female.toLowerCase()}.jpg`)" class="team__list-item-image">
    </li>
  </ul>
</section>
</template>

<script>
import Description from '../parts/Description'
import {useStore} from 'vuex'
export default {
components: { Description },

setup() {
  const store = useStore()
  const authors = store.getters.authors
  const description = {
    title: 'Our Team',
    text: 'Want to work with some of the best global talent and build a tool used by all the companies you know and love? Join the Geeks team and help shape the future of design.'
  }
  return {
    description, authors
  }
}
}
</script>

<style scoped lang="scss">
.team {
  &__list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    &-item {
      margin: 0 0.5rem 1rem 0.5rem;
      
      &:hover &-description {
        opacity: 1;
      }

      &-image {
        display: block;
        width: 100%;
        border-radius: 50%;
      }

      &-description {
        opacity: 0;
        width: 100%;
        margin-bottom: 0.5rem;
        padding: 0.5rem;
        border-radius: 5px;
        background: white;
        box-shadow: 0 0 10px 6px $color-secondary-light;
        transition: 0.25s;
      }
    }
  }
}
</style>