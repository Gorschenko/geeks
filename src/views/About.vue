<template>
<section class="about mt-2 mb-3">
  <div class="inner">
    <Information class="mb-3"/>
    <Slider class="mb-3"/>
    <Statistics class="mb-3"/>
  </div>
  <div class="wrapper_light pb-2 pt-2 mb-3">
    <div class="inner">
      <Values/>
    </div>
  </div>
  <div class="inner">
    <Team/>
  </div>
</section>

</template>

<script>
import Information from '../components/about/Information'
import Slider from '../components/about/Slider'
import Statistics from '../components/about/Statistics'
import Values from '../components/about/Values'
import Team from '../components/about/Team'

export default {
  components: {Information, Slider, Statistics, Values, Team}
}
</script>