<template>
<section class="vacancies">
  <span class="text text_small mb-1">Всего вакансий: {{vacancies.length}}</span>
  <ul class="vacancies__list">
    <li class="vacancies__list-item" v-for="vacancy in vacancies">
      <span class="vacancies__list-item-info">{{ vacancy.position }}</span>
      <span class="vacancies__list-item-info">{{ vacancy.location }}</span>
      <span class="vacancies__list-item-info">{{ vacancy.industry }}</span>
      <button class="button button_primary">View details</button>
    </li>
  </ul>
</section>
</template>

<script>
export default {
props: ['vacancies'],
setup() {

}
}

</script>
<style lang="scss" scoped>
.vacancies {
  &__list {
    &-item {
      @include row_space-between;
      width: 100%;
      margin-bottom: 1rem;
      padding-bottom: 1rem;
      border-bottom: $border-secondary-light;
      &-info {
        font-size: 1.25rem;
        color: $color-secondary;
        width: calc(100%/4);
      }
    }
  }
}
</style>
