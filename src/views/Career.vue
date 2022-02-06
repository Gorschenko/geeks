<template>
<section class="career mt-2">
  <div class="inner">
    <div class="career__row mb-2">
      <Description :description="description"/>
      <CareerGallery/>
    </div>
  </div>
  <section class="info">
    <h1 class="text text_biggest text_white">Раздел находится в разработке</h1>
  </section>
</section>
</template>

<script>
import Description from '../components/parts/Description'
import CareerGallery from '../components/career/CareerGallery'

export default {
setup() {
  const description = {
    title: 'Join the team, we are growing fast!',
    text: 'We are looking for incredible people to build on our strong momentum. Help us power the brands you know and love.'
  }
  return {
    description
  }
},
components: { Description, CareerGallery }
}
</script>

<style scoped lang="scss">
.career {
  &__row {
    @include row-center;
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
