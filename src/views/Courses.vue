<template>
<section class="courses">
  <div class="wrapper_primary">
    <div class="inner">
      <CoursesTitleBox class="courses__title-box"/>
    </div>
  </div>
  <div class="inner">
    <CoursesSorting class="courses__sorting" v-model="view"/>
    <div class="row">
      <CoursesFilter class="courses__filter" @filter-courses="filter"/>
      <section class="courses__cards">
        <ul class="courses__cards-list">
          <li class="courses__cards-list-item" v-for="course in courses">
            <CoursesCard :course="course" :key="course"/>
          </li>
        </ul>
      </section>
    </div>

  </div>
</section>


</template>

<script>
import CoursesTitleBox from '../components/courses/CoursesTitleBox'
import CoursesSorting from '../components/courses/CoursesSorting'
import CoursesFilter from '../components/courses/CoursesFilter'
import CoursesCard from '../components/courses/CoursesCard'

import { useStore } from 'vuex'
import { ref, computed } from 'vue'

export default {
components: { CoursesTitleBox, CoursesSorting, CoursesFilter, CoursesCard },

setup() {
  const store = useStore()
  const filterInfo = ref([])
  const view = ref('grid')

  function filter(data) {
    filterInfo.value = data
  }

  const courses = computed(() => store.getters.courses
    .filter(course => {
      const categories = filterInfo.value[0]
      if (categories !== undefined && categories.length !== 0) {
        return filterInfo.value[0].includes(course.category)
      }
      return course
    })
    .filter(course => {
      const levels = filterInfo.value[1]
      if (levels !== undefined && levels.length !== 0) {
        return levels.includes(course.level)
      }
      return course
    })
  )

  return {
    courses, view,
    filter
  }
}
}
</script>

<style scoped lang="scss">
.courses {
  &__title-box {
    width: 100%;
    
    margin-bottom: 1rem;
  }

  &__sorting {
    height: 50px;
    margin-bottom: 1rem;
  }

  &__filter {
    width: 270px;
    margin-right: 1rem;
    align-self: flex-start;
  }

  &__cards {
    width: calc(100% - 270px - 1rem + 2rem);
    margin: 0 -1rem 1rem -1rem;

    &-list {
      display: flex;
      flex-wrap: wrap;
      width: 100%;

      &-item {
        width: calc(100%/3 - 2rem);
        margin: 0 1rem 1rem 1rem;
      }
    }
  }
}
</style>