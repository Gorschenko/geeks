<template>
<div class="loader"></div>
</template>

<style scoped lang="scss">
.loader {
  position: relative;
  width: 125px;
  height: 125px;
  border-radius: 50%;
  background: conic-gradient($color-primary, transparent);
  animation: rotating 1s linear infinite;
  
  &::before {
   content: '';
    position: absolute;
    width: 75px;
    height: 75px;
    top: 25px;
    left: 25px;
    border-radius: 50%;
    background: white;
  }
}

@keyframes rotating {
  from {
      transform: rotate(360deg);
  }
  to {
      transform: rotate(0deg);
  }
}
</style>