<template>
<section class="cards">
  <ul class="cards__list">
    <li class="cards__list-item" v-for="course in courses" :key="course">
      <article class="card">
        <header class="card__header">
          <img :src="require(`../../assets/image/categories/categories-${course.category.toLowerCase()}.jpg`)" class="image card__header-image">
        </header>
        <div class="card__inner">
          <section class="card__body">
            <h1 class="text_smallest text_dark mb-1">{{course.name}}</h1>
            <div class="row mb-1">
              <span class="row mr-1">
                <i class="far fa-clock mr-03"></i>
                <span>{{course.time}}</span>
              </span>
              <span class="row">
                <!-- <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" class="mr-03">
                  <rect x="4" y="8" width="3" height="6" rx="1" :fill="chart[0]"></rect>
                  <rect x="8" y="5" width="3" height="9" rx="1" :fill="chart[1]"></rect>
                  <rect x="12" y="2" width="3" height="12" rx="1" :fill="chart[2]"></rect>
                </svg> -->
                <span>{{course.level}}</span>
              </span>
            </div>
            <span class="text_black text_bold">{{course.price}}$</span>
          </section>
          <footer class="card__footer">
            <div class="card__footer-avatar">
              <img :src="require(`../../assets/image/avatars/avatar-medium-${course.author.split(' ')[1].toLowerCase()}.jpg`)" class="image image_circle">
            </div>
            <span class="title">{{course.author}}</span>
          </footer>
        </div>
      </article>
    </li>
  </ul>
</section>
</template>
<script>

export default {
props: ['courses'],
}
</script>
<style lang="scss" scoped>
  .cards {
    width: calc(100% - 270px - 1rem + 2rem);
    margin: 0 -1rem 1rem -1rem;

    &__list {
      display: flex;
      flex-wrap: wrap;
      width: 100%;

      &-item {
        width: calc(100%/3 - 2rem);
        margin: 0 1rem 1rem 1rem;
      }
    }
  }
  .card {
    width: 100%;
    border-radius: 0.5rem;
    color: $color-secondary;
    background: white;
    box-shadow: 3px 3px 5px $color-secondary-light;

    &__header {
      &-image {
        border-top-left-radius: 0.5rem;
        border-top-right-radius: 0.5rem;
      }
    }

    &__inner {
      padding: 1rem;
    }

    &__body {
      margin-bottom: 1rem;
    }

    &__footer {
      display: flex;
      align-items: center;
      padding-top: 1rem;
      border-top: 1px solid $color-secondary-light;

      &-avatar {
        width: 24px;
        height: 24px;
        margin-right: 0.5rem;
      }
    }
}
</style>
