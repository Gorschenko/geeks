<template>
<section class="home">
  <div class="wrapper_primary">
    <div class="inner">
      <Welcome/>
    </div>
  </div>
  <div class="inner">
    <Progress/>
  </div>
</section>
</template>

<script>
import Welcome from '../components/home/Welcome'
import Progress from '../components/home/Progress'

export default {
components: { Welcome, Progress }
}
</script>
