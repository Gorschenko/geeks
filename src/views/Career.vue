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
        <CareerFilter v-model="filterValue" class="mb-2"/>
        <CareerVacancies :vacancies="filtredVacancies"/>
      </div>
    </div>
</section>
</template>

<script>
import Description from '../components/parts/Description'
import CareerGallery from '../components/career/CareerGallery'
import CareerFilter from '../components/career/CareerFilter'
import CareerVacancies from '../components/career/CareerVacancies'
import {useStore} from 'vuex'
import {computed, ref} from 'vue'

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

  const store = useStore()
  const filterValue = ref({})
  const filtredVacancies = computed(() => store.getters.vacancies
    .filter(vacancy => {
      if (filterValue.value.position) {
        return vacancy.position.includes(filterValue.value.position)
      }
      return vacancy
    })
    .filter(vacancy => {
      if(filterValue.value.location) {
        return vacancy.location.includes(filterValue.value.location)
      }
      return vacancy
    })
    .filter(vacancy => {
      if (filterValue.value.category) {
        return vacancy.industry === filterValue.value.category
      }
      return vacancy
    })
  )

  return {
    descriptionTop, descriptionBottom,
    filterValue, filtredVacancies
  }
},
components: { Description, CareerGallery, CareerFilter, CareerVacancies }
}
</script>

<style scoped lang="scss">
.career {
  &__row {
    @include row_space-between;
  }
}
</style>
