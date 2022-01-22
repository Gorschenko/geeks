<template>
<section class="career mt-2">
  <div class="inner">
    <div class="career__row">
      <Description :description="description"/>
    </div>
  </div>
  <section class="info">
    <h1 class="text text_biggest text_white">Раздел находится в разработке</h1>
  </section>
</section>
</template>

<script>
import Description from '../components/parts/Description'

export default {
components: { Description },

setup() {
  const description = {
    title: 'Join the team, we are growing fast!',
    text: 'We are looking for incredible people to build on our strong momentum. Help us power the brands you know and love.'
  }
  return {
    description
  }
}
}
</script>

<style scoped lang="scss">
.career {
  &__row {
    display: flex;
    justify-content: space-between;
    align-items: center;
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