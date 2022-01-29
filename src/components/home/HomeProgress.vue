<template>
<section class="progress">
    <div class="progress__item" v-for="item in items">
      <div class="progress__item-icon">
        <i :class="item.cls"></i>
      </div>
      <div class="progress__item-content">
        <h1 class="title">{{item.title}}</h1>
        <span class="text_secondary">{{item.text}}</span>
      </div>
    </div>
</section>
</template>

<script>
export default {
  setup() {
    const items = [
      {
        cls: 'fas fa-video',
        title: '30,000 online courses',
        text: 'Enjoy a variety of fresh topics'
      },
      {
        cls: 'fas fa-user-friends',
        title: 'Expert instruction',
        text: 'Find the right instructor for you'
      },
      {
        cls: 'fas fa-clock',
        title: 'Lifetime access',
        text: 'Learn on your schedule'
      },
    ]

    return {
      items
    }
  }
}
</script>

<style scoped lang="scss">
.progress {
  display: flex;
  justify-content: space-between;
  height: 100px;
  // border-bottom: 1px solid $color-secondary-light;
  background: white;

  &__item {
  display: flex;
  align-items: center;

    &-icon {
      width: 50px;
      height: 50px;
      margin-right: 1rem;
      line-height: 50px;
      border-radius: 50%;
      text-align: center;
      color: rgb(194, 129, 53);
      background: rgb(255, 238, 218);
    }
  }
}
</style>
