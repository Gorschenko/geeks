<template>
<section class="home">
  <div class="wrapper_primary">
    <div class="inner">
      <HomeWelcome/>
    </div>
  </div>
  <div class="inner">
    <HomeProgress/>
  </div>
</section>
</template>

<script>
import HomeWelcome from '../components/home/HomeWelcome'
import HomeProgress from '../components/home/HomeProgress'

export default {
components: { HomeWelcome, HomeProgress }
}
</script>
