<template>
<section class="slider">
  <button class="button button_circle button_primary slider__button" @click="preview">&#8592;</button>
  <div class="slider__list-wrapper">
    <ul class="slider__list" :style="`width: ${width}px`">
      <li class="slider__list-item" v-for="n in number" :style="style">
        <img :src="require(`../../assets/image/photos/photos-${n}.jpg`)" class="slider__list-item-image">
      </li>
    </ul>
  </div>
  <button class="button button_circle button_primary slider__button" @click="next">&#8594;</button>
</section>
</template>

<script>
import {computed, ref} from 'vue'
export default {
  setup() {
    const position = ref(0)
    const number = 6
    const width = 800
    const style = computed(() => {
      return 'transform: translateX(-' + position.value + 'px)'
    })

    function next() {
      if (position.value !== (number - 1) * width) {
        position.value += width
      }
    }

    function preview() {
      if (position.value !== 0) {
        position.value -= width
      }
    }

    return {
      style, position, number, width,
      next, preview
    }
  }
}

</script>
<style scoped lang="scss">
.slider {
  display: flex;
  justify-content: center;
  align-items: center;

  &__list {
    display: flex;
    overflow: hidden;

    &-wrapper {
      margin: 0 1rem;
      padding: 1rem;
      background: $color-secondary-light;
    }

    &-item {
      flex-shrink: 0;
      max-width: 100%;

      &-image {
        display: block;
        max-width: 100%;
      }
    }
  }
  &__button {
    width: 50px;
    height: 50px;
  }
}
</style>
