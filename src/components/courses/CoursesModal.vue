<template>
<div class="modal">
  <form class="form" @submit.prevent>

    <span v-if="isDisabled" class="text text_small text_danger mb-1">Ошибка. Укажите все поля</span>

    <div class="form__control mb-1">
      <label for="coursesName" class="text text_smallest mb-05">Введите название:</label>
      <input id="coursesName" type="text" class="input" v-model="modalCourses.name">
    </div>

    <div class="form__control mb-1">
      <label for="coursesCategory" class="text text_smallest mb-05">Укажите категорию:</label>
      <select id="coursesCategory" class="select" v-model="modalCourses.category">
        <option value="JavaScript">JavaScript</option>
        <option value="React">React</option>
        <option value="Angular">Angular</option>
        <option value="Node">Node</option>
        <option value="Css">CSS</option>
        <option value="Python">Python</option>
        <option value="WordPress">WordPress</option>
      </select>
    </div>

    <div class="form__control mb-1">
      <label for="coursesPrice" class="text text_smallest mb-05">Введите цену:</label>
      <input id="coursesPrice" type="number" class="input" v-model="modalCourses.price">
    </div>

    <div class="form__control mb-1">
      <label for="coursesTime" class="text text_smallest mb-05">Введите время:</label>
      <input id="coursesTime" type="text" class="input" v-model="modalCourses.time">
    </div>

    <div class="form__control mb-1">
      <label for="coursesLevel" class="text text_smallest mb-05">Укажите уровень:</label>
      <select id="coursesLevel" class="select" v-model="modalCourses.level">
        <option value="Begginner">Begginner</option>
        <option value="Intermediate">Intermediate</option>
        <option value="Expert">Expert</option>
      </select>
    </div>

    <div class="form__control mb-1">
      <label for="coursesAuthor" class="text text_smallest mb-05">Укажите автора:</label>
      <select id="coursesAuthor" class="select" v-model="modalCourses.author">
        <option value="Juanita Bell">Juanita Bell</option>
        <option value="Morris Mccoy">Morris Mccoy</option>
        <option value="Ted Hawkins">Ted Hawkins</option>
        <option value="Claire Robertson">Claire Robertson</option>
      </select>
    </div>

    <div class="form__buttons">
      <div>
        <button class="button button_danger mr-1" @click="resetForm">Очистить</button>
        <button class="button button_success" @click="$emit('add-course', modalCourses)" :disabled="isDisabled">Добавить</button>
      </div>
      <button class="button button_secondary" @click="$emit('close-modal')">Закрыть</button>
    </div>

  </form>
  <div class="modal__overlay" @click="$emit('close-modal')"></div>
</div>
</template>
<script>
import {reactive, computed} from 'vue'
export default {
emits: ['close-modal', 'add-course'],
setup(_, {emit}) {
  const modalCourses = reactive({
    name: null,
    category: 'JavaScript',
    price: null,
    time: null,
    level: 'Begginner',
    author: 'Juanita Bell'
  })
  const isDisabled = computed(() =>
    !modalCourses.name || !modalCourses.category || !modalCourses.price || !modalCourses.time || !modalCourses.level || !modalCourses.author
  )
  const resetForm = () => {
    modalCourses.name = null,
    modalCourses.category = 'javascript',
    modalCourses.price = null,
    modalCourses.time = null,
    modalCourses.level = 'begginner',
    modalCourses.author = 'bell'
    emit('close-modal')
  }

  return {
    modalCourses,
    isDisabled,
    resetForm
  }
}
}

</script>

<style lang="scss" scoped>
.modal {
  &__overlay {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1;
    width: 100%;
    height: 100%;
    background: rgba(20, 20, 20, 0.5);
  }
}
.form {
  position: fixed;
  z-index: 100;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  width: 800px;
  padding: 20px;
  border-radius: 10px;
  background: white;
  &__buttons {
    display: flex;
    justify-content: space-between;
  }
}
.select {
  padding: 10px;
  border: $border-secondary;
  cursor: pointer;
}
.input {
  width: 100%;
  padding: 10px;
  border: $border-secondary;
}
</style>
