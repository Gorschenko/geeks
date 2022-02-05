<template>
<div
  v-if="alert.visible"
  :class="{
    'alert': true,
    'alert_primary': alert.type === 'primary',
    'alert_danger': alert.type === 'danger'
  }"
>
  <h1 class="text mb-05">{{ alert.type === 'primary' ? 'Успешно!' : 'Ошибка!' }}</h1>
  <p class="text">{{ alert.text }}</p>
</div>
</template>
<script>
import {onUpdated} from 'vue'

export default {
props: ['alert'],
setup(props) {
  onUpdated(() => setTimeout(() => props.alert.visible = false, 1500))
}
}
</script>
<style scoped lang="scss">
.alert {
  @include container;
  position: fixed;
  z-index: 1;
  background: $color-light;
  bottom: 20px;
  right: 20px;
  min-width: 300px;
  max-width: 400px;

  &_primary {
    border-left: 10px solid $color-success;
  }

  &_danger {
    border-left: 10px solid $color-danger;
  }
}

</style>
