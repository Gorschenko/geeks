<template>
<section class="description">
  <h1 class="text_biggest text_dark mb-1">{{ description.title }}</h1>
  <p class="text_smaller text_secondary">{{ description.text }}</p>
</section>
</template>

<script>
export default {
props: ['description']
}
</script>

<style lang="scss">
.description {
  max-width: 600px;
}
</style>
