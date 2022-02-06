<template>
<section class="vacancies">
  <span class="text text_smallest mb-1">Всего вакансий: {{ vacancies.length }}</span>
  <ul class="vacancies__list">
    <li class="vacancies__list-item" v-for="vacancy in vacancies">
      <span class="text text_smallest text_secondary">Должность</span>
      <span class="text text_smallest text_secondary">Локация</span>
      <span class="text text_smallest text_secondary">Направление</span>
      <button class="button button_primary">Подробнее</button>
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
    }
  }
}
</style>
