<template>
<div class="modal">
  <form class="modal__form form" @submit.prevent>
    <h1 class="text_small mb-1">Для создания статьи заполните форму</h1>
    <div class="form__control mb-1">
      <label for="category" class="text text_smallest mb-05">Выберите категорию:</label>
      <select
        id="category"
        class="form__control-select text_smallest"
        v-model="modalCategory"
      >
        <option value="Courses" class="text_smallest">Courses</option>
        <option value="Tutorial" class="text_smallest">Tutorial</option>
        <option value="Company" class="text_smallest">Company</option>
      </select>
    </div>
    <div class="form__control mb-1">
      <label for="title" class="text text_smallest mb-05">Введите название заголовка:</label>
      <input
        id="title"
        type="text"
        class="form__control-input"
        v-model="modalTitle"
      >
    </div>
    <div class="form__control mb-1">
      <label for="content" class="text text_smallest mb-05">Введите контент:</label>
      <textarea
        id="content"
        class="form__control-textarea"
        v-model="modalContent"
      ></textarea>
    </div>
    <div class="form__buttons">
      <button
        class="button button_secondary mr-1"
        @click="$emit('close-modal')"
      >Отмена</button>
      <button
        class="button button_success"
        @click="addArticle"
        :disabled="isDisabled"
      >Добавить</button>
    </div>
  </form>
  <div class="modal__overlay" @click="$emit('close-modal')"></div>
</div>
</template>

<script>
import {ref, computed} from 'vue'

export default {
emits: ['close-modal', 'add-article'],
setup(_, context) {
  const modalCategory = ref('Courses')
  const modalTitle = ref(null)
  const modalContent = ref(null)
  function addArticle() {
    context.emit('add-article', {
      category: modalCategory.value,
      title: modalTitle.value,
      content: modalContent.value,
      date: new Date().toLocaleDateString()
    })
  }
  return {
    modalCategory, modalTitle, modalContent,
    isDisabled: computed(() => !modalCategory.value || !modalTitle.value || !modalContent.value),
    addArticle
  }
}
}
</script>

<style lang="scss" scoped>
.modal {
  &__form {
    position: fixed;
    top: 50%;
    left: 50%;
    z-index: 999;
    transform: translate(-50%,-50%);
    width: 700px;
    padding: 20px;
    border-radius: 10px;
    background: white;
  }
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
  &__control {
    &-select {
      padding: 10px;
      border: $border-secondary;
      cursor: pointer;
    }
    &-input {
      width: 100%;
      height: 50px;
      padding: 10px;
      border: $border-secondary;
    }
    &-textarea {
      width: 100%;
      height: 300px;
      padding: 10px;
      border: $border-secondary;
      resize: none;
    }
  }
  &__buttons {
    display: flex;
    justify-content: flex-end;
  }
}
</style>
