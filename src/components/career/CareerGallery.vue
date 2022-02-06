<template>
<section class="gallery">
  <div class="gallery__column">
    <img src="../../assets/image/avatars/avatar-medium-bell.jpg" class="gallery__column-image gallery__column-image_small">
    <img src="../../assets/image/avatars/avatar-medium-holler.jpg" class="gallery__column-image gallery__column-image_long">
  </div>
  <div class="gallery__column">
    <img src="../../assets/image/avatars/avatar-medium-butler.jpg" class="gallery__column-image gallery__column-image_long">
    <img src="../../assets/image/avatars/avatar-medium-robertson.jpg" class="gallery__column-image gallery__column-image_long">
  </div>
  <div class="gallery__column">
    <img src="../../assets/image/avatars/avatar-medium-mccoy.jpg" class="gallery__column-image gallery__column-image_small">
    <img src="../../assets/image/avatars/avatar-medium-pinto.jpg" class="gallery__column-image gallery__column-image_small">
    <img src="../../assets/image/avatars/avatar-medium-holland.jpg" class="gallery__column-image gallery__column-image_small">
  </div>
</section>
</template>
<style lang="scss" scoped>
.gallery {
  @include row;
  margin: 0 -0.25rem;
  &__column {
    width: calc(100%/3 - 0.5rem);
    margin: 0 0.25rem -0.5rem 0.25rem;
    &-image {
      width: 100%;
      margin-bottom: 0.5rem;
      border-radius: 5px;
      display: block;
      object-fit: cover;
      &_small {
        width: 200px;
        height: 220px;
      }
      &_long {
        width: 200px;
        height: 300px;
      }
    }
  }
}
</style>
