<template>
<section class="career mt-2">
  <div class="inner">
    <div class="career__row mb-4">
      <Description :description="descriptionTop"/>
      <CareerGallery/>
    </div>
  </div>
   <div class="wrapper wrapper_light">
      <div class="inner">
        <Description class="mb-2" :description="descriptionBottom"/>
        <CareerFilter class="mb-2"/>
        <ul class="career__list">
          <li class="career__list-item">
            <span class="text text_smallest text_secondary">Должность</span>
            <span class="text text_smallest text_secondary">Локация</span>
            <span class="text text_smallest text_secondary">Направление</span>
            <button class="button button_primary">Подробнее</button>
          </li>
        </ul>
      </div>
    </div>
</section>
</template>

<script>
import Description from '../components/parts/Description'
import CareerGallery from '../components/career/CareerGallery'
import CareerFilter from '../components/career/CareerFilter'

export default {
setup() {
  const descriptionTop = {
    title: 'Join the team, we are growing fast!',
    text: 'We are looking for incredible people to build on our strong momentum. Help us power the brands you know and love.'
  }
  const descriptionBottom = {
    title: 'All open positions',
    text: 'We are looking for enthusiastic collaborators who are passionate about their craft to be a part of our journey building technology that is a force for positive change in the world.'
  }
  return {
    descriptionTop, descriptionBottom
  }
},
components: { Description, CareerGallery, CareerFilter }
}
</script>

<style scoped lang="scss">
.career {
  &__row {
    @include row_space-between;
  }
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
