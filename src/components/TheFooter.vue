<template>
<footer class="footer">
  <span class="footer__text">© {{date}} Geeks. All rights reserved.</span>
  <Navigation :type="'footer'"/>
</footer>
</template>
<script>
import Navigation from './parts/Navigation'

export default {
  components: {Navigation},
  data() {
    return {
      date: new Date().getFullYear()
    }
  }
}
</script>
<style scoped lang="scss">
.footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 50px;
  color: $color-secondary;
  border-top: 1px solid $color-secondary-light;
}
</style>