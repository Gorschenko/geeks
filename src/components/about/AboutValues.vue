<template>
<section class="values">
  <Description :description="description"/>
  <ul class="values__list">
    <li class="values__list-item" v-for="value in values">
      <i class="values__list-item-icon" :class="value.cls"></i>
      <h1 class="text_small text_dark mb-05">{{ value.title }}</h1>
      <p class="text_secondary">{{ value.text }}</p>
    </li>
  </ul>
</section>
</template>

<script>
import Description from '../parts/Description'

export default {
  components: { Description },

  data() {
    return {
      description: {
        title: 'Our core values',
        text: 'Our core values are the fundamental beliefs of a person or organization geeks academy. We help people understand the difference between right and wrong.'
      },
      values: [
        {
          cls: 'fas fa-graduation-cap',
          title: 'Make Education Accessible',
          text: 'Quis cursus turpis in habitant sagittis amet dolor malesuada ut. Volutpat nunc id blanvolutpat nunc.'
        },
        {
          cls: 'fas fa-user-friends',
          title: 'Learn and Grow',
          text: 'Quis cursus turpis in habitant sagittis amet dolor malesuada ut. Volutpat nunc id blanvolutpat nunc.'
        },
        {
          cls: 'fas fa-chart-line',
          title: 'Make Education Accessible',
          text: 'Quis cursus turpis in habitant sagittis amet dolor malesuada ut. Volutpat nunc id blanvolutpat nunc.'
        },
      ]
    }
  }
}
</script>

<style scoped lang="scss">
.values {
  &__list {
    display: flex;
    justify-content: space-between;

    &-item {
      width: 32%;
      padding: 2rem;
      border-radius: 10px;
      background: white;

      &-icon {
        margin-bottom: 0.5rem;
        font-size: 3rem;
        color: $color-primary;
      }
    }
  }
}
</style>