<template>
<section class="career mt-2">
  <div class="inner">
    <div class="career__row mb-4">
      <Description :description="descriptionTop"/>
      <CareerGallery/>
    </div>
    <Description class="mb-2" :description="descriptionBottom"/>
    <CareerFilter class="mb-2"/>
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
}
.info {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 50vh;
  background: lightseagreen;
}
</style>
