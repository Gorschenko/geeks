<template>
<section class="courses">
  <div class="wrapper_primary">
    <div class="inner">
      <CoursesTitleBox class="courses__title-box"/>
    </div>
  </div>
  <div class="inner">
    <div class="row row_between mb-1">
      <button class="button button_success" @click="toggleModal">Добавить курс</button>
      <CoursesSorting class="courses__sorting" v-model="view"/>
    </div>
    <div class="row">
      <CoursesFilter class="courses__filter" @filter-courses="filter"/>
      <CoursesCards :courses="courses"/>
    </div>
  </div>
  <CoursesModal v-if="modal" @close-modal="toggleModal" @add-course="addCourse"/>
</section>
</template>

<script>
import CoursesTitleBox from '../components/courses/CoursesTitleBox'
import CoursesSorting from '../components/courses/CoursesSorting'
import CoursesFilter from '../components/courses/CoursesFilter'
import CoursesCards from '../components/courses/CoursesCards'
import CoursesModal from '../components/courses/CoursesModal'

import { useStore } from 'vuex'
import { ref, computed, onMounted} from 'vue'

export default {
setup() {
  const store = useStore()
  const filterInfo = ref([])
  const view = ref('grid')

  function filter(data) {
    filterInfo.value = data
  }
  onMounted(async () => {
    await loadCourses()
  })

  const courses = computed(() => store.getters['coursesModule/courses']
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

  const modal = ref(false)
  const toggleModal = () => modal.value = !modal.value

  const addCourse = course => {
    store.dispatch('coursesModule/addCourse', course)
    toggleModal()
  }
  const loadCourses = async () => {
    await store.dispatch('coursesModule/loadCourses')
  }
  return {
    courses, view,
    filter,
    modal, toggleModal,
    addCourse, loadCourses
  }
},
components: { CoursesTitleBox, CoursesSorting, CoursesFilter, CoursesCards, CoursesModal },
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
