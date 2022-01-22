<template>
<nav class="navigation">
  <ul class="navigation__list">
    <li class="navigation__list-item" v-for="route in routes">
      <router-link
        class="navigation__list-item-link"
        :to="route.path"
      >{{route.name}}</router-link>
    </li>
  </ul>
</nav>
</template>
<script>
import {useRouter} from 'vue-router'
import {computed} from 'vue'
export default {
props: ['type'],
setup(props) {
    const router = useRouter()
    const routes = computed(() => router.options.routes
      .filter(route => route.meta.navigation === props.type))
      
    return {
      routes
    }
}
}
</script>

<style lang='scss'>
.navigation__list {
  display: flex;

  &-item {
    margin-right: 1rem;

    &-link {
       color: $color-dark;
       transition: 0.5s;
       
       &:hover {
         color: $color-primary;
      }
    }
  }
}
</style>
