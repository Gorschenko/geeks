<template>
<section class="welcome">
    <div class="welcome__content">
      <h1 class="text_biggest text_white mb-1">Welcome to Geeks UI Learning Application</h1>
      <p class="text_smaller text_secondary-dark mb-1">Hand-picked Instructor and expertly crafted courses, designed for the modern students and entrepreneur.</p>
      <div class="welcome__buttons">
        <button
          class="button button_success mr-1"
          @click="$router.push('/courses')"
        >Browse courses</button>
        <button
          class="button button_secondary"
          @click="$router.push('/career')"
        >Are you Instructor?</button>
      </div>
    </div>
    <div class="welcome__image-wrapper">
      <img class="welcome__image" src="../../assets/image/start-page.png">
    </div>
</section>
</template>

<style scoped lang="scss">
.welcome {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 408px;

  &__content {
    max-width: 490px;
  }

  &__buttons {
    height: 50px;
    display: flex;
  }

  &__image {
    display: block;
    max-width: 553px;
    max-height: 408px;
  }
}
</style>
