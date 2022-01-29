<template>
<section class="statistics">
  <Description :description="description"/>
  <ul class="statistics__list">
    <li class="statistics__list-item" v-for="item in statistics">
      <span class="text text_biggest text_uppercase text_bold mb-05">{{ item.value }}</span>
      <span class="text text_secondary text_uppercase">{{ item.name }}</span>
    </li>
  </ul>
</section>
</template>
<script>
import Description from '../parts/Description'
export default {
components: {Description},
data() {
  return {
    statistics: [
      {name: 'learners', value: '94k'},
      {name: 'instructors', value: '14'},
      {name: 'courses', value: '42'},
      {name: 'courses enrollments', value: '390'}
    ],
    description: {
      title: 'Our global reach',
      text: 'Geeks is the leading global marketplace for teaching and learning, connecting millions of students to the skills they need to succeed.'
    }
  }
}
}
</script>
<style scoped lang="scss">
.statistics {
  &__description {
    max-width: 600px;
    margin-bottom: 1rem;
  }

  &__list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    &-item {
      width: 20%;
      padding-top: 0.5rem;
      border-top: 1px solid $color-secondary-light;
    }
  }
}
</style>