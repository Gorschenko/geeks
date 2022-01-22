<template>
<TheHeader/>
<main class="main">
  <router-view></router-view>
</main>
<div class="inner">
  <TheFooter/>
</div>
</template>

<script>
import TheHeader from './components/TheHeader'
import TheFooter from './components/TheFooter'

export default {
components: { TheHeader, TheFooter }
}
</script>

<style lang="scss">
* {
  padding: 0;
  margin: 0;
  background: 0;
  border: 0;
  outline: 0;
  list-style: none;
  text-decoration: none;
  font-family: Arial, sans-serif;
  font-size: 16px;
  box-sizing: border-box;
}
a {
  &:active {
    color: inherit;
  }
  &:visited {
    color: inherit;
  }
}
</style>