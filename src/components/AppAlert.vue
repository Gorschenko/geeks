<template>
<div
  v-if="alert.visible"
  :class="{
    'alert': true,
    'alert_primary': alert.type === 'primary',
    'alert_danger': alert.type === 'danger'
  }"
  @click="$emit('close-alert')"
>
  <h1 class="text mb-05">{{ alert.title }}</h1>
  <p class="text">{{ alert.text }}</p>
</div>
</template>
<script>
export default {
emits: ['close-alert'],
props: ['alert']
}
</script>
<style scoped lang="scss">
.alert {
  @include container;
  position: fixed;
  z-index: 1;
  bottom: 20px;
  right: 20px;
  min-width: 200px;
  max-width: 300px;

  &_primary {
    border-left: 10px solid $color-success;
  }

  &_danger {
    border-left: 10px solid $color-danger;
  }
}

</style>