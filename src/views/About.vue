<template>
<section class="about mt-2 mb-3">
  <div class="inner">
    <AboutInformation class="mb-3"/>
    <AboutSlider class="mb-3"/>
    <AboutStatistics class="mb-3"/>
  </div>
  <div class="wrapper_light pb-2 pt-2 mb-3">
    <div class="inner">
      <AboutValues/>
    </div>
  </div>
  <div class="inner">
    <Team/>
  </div>
</section>

</template>

<script>
import AboutInformation from '../components/about/AboutInformation'
import AboutSlider from '../components/about/AboutSlider'
import AboutStatistics from '../components/about/AboutStatistics'
import AboutValues from '../components/about/AboutValues'
import AboutTeam from '../components/about/AboutTeam'

export default {
  components: {AboutInformation, AboutSlider, AboutStatistics, AboutValues, AboutTeam}
}
</script>