<template>
<article class="card">
  <header class="card__header">
    <img :src="image" class="image card__header-image">
  </header>
  <div class="card__inner">
    <section class="card__body">
      <h1 class="text_smallest text_dark mb-1">{{course.name}}</h1>
      <div class="row mb-1">
        <span class="row mr-1">
          <i class="far fa-clock mr-03"></i>
          <span>{{course.time}}</span>
        </span>
        <span class="row">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" class="mr-03">
            <rect x="4" y="8" width="3" height="6" rx="1" :fill="chart[0]"></rect>
            <rect x="8" y="5" width="3" height="9" rx="1" :fill="chart[1]"></rect>
            <rect x="12" y="2" width="3" height="12" rx="1" :fill="chart[2]"></rect>
          </svg>
          <span>{{course.level}}</span>
        </span>
      </div>
      <span class="text_black text_bold">{{course.price}}$</span>
    </section>
    <footer class="card__footer">
      <div class="card__footer-avatar">
        <img :src="avatar" class="image image_circle">
      </div>
      <span class="title">{{course.author}}</span>
    </footer>
  </div>
</article>
</template>
<script>
import {computed} from 'vue'

export default {
props: ['course'],
setup(props) {
  const course = props.course

  const image = computed(() => {
    const path = course.category.toLowerCase()
    return require(`../../assets/image/categories/categories-${path}.jpg`)
  })

  const chart = computed(() => {
    let colors = ['rgb(118, 79, 254)', 'rgb(121, 117, 143)', 'rgb(121, 117, 143)']
    
    if (course.level === 'Intermediate') {
      colors[1] = 'rgb(118, 79, 254)'
    } else if ((course.level === 'Expert')) {
      colors[1] = colors[2] = 'rgb(118, 79, 254)'
    }
    return colors
  })

  const avatar = computed(() => {
    const path = course.author.split(' ')[1].toLowerCase()
    return require(`../../assets/image/avatars/avatar-small-${path}.jpg`)
  })

  return {
    course, image, avatar, chart
  }
}
}
</script>
<style scoped lang="scss">
.card {
  width: 100%;
  border-radius: 0.5rem;
  color: $color-secondary;
  background: white;
  box-shadow: 3px 3px 5px $color-secondary-light;

  &__header {
    &-image {
      border-top-left-radius: 0.5rem;
      border-top-right-radius: 0.5rem;
    }
  }

  &__inner {
    padding: 1rem;
  }

  &__body {
    margin-bottom: 1rem;
  }

  &__footer {
    display: flex;
    align-items: center;
    padding-top: 1rem;
    border-top: 1px solid $color-secondary-light;

    &-avatar {
      width: 24px;
      height: 24px;
      margin-right: 0.5rem;
    }
  }
}
</style>