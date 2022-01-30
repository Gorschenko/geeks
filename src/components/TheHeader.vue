<template>
<header class="header">
  <div class="header__inner">
    <img
      class="logo mr-1"
      src="../assets/icons/logo.svg"
      @click="navigate"
    >
    <Navigation :type="'header'"/>
    <Search/>
  </div>
  <div class="header__inner">
    <button class="button secondary mr-1">Sign In</button>
    <button class="button primary">Sign Up</button>
  </div>
</header>
</template>
<script>
import Navigation from './parts/Navigation'
import Search from './parts/Search'
import {useRouter} from 'vue-router'

export default {
components: {Navigation, Search},
setup() {
  const router = useRouter()

  const navigate = () =>{
    router.push('/home')
    console.log(router)
  }

  return {
    navigate
  }
}
}
</script>

<style scoped lang="scss">
.header {
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 70px;
  padding: 0.75rem;
  background: white;

  &__inner {
    display: flex;
    align-items: center;
    height: 100%;
  }
}
</style>