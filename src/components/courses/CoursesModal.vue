<template>
<div class="modal">
  <form class="form" @submit.prevent>

    <div class="form__control mb-1">
      <label for="coursesName" class="text text_smallest mb-05">Введите название:</label>
      <input id="coursesName" type="text" class="input">
    </div>

    <div class="form__control mb-1">
      <label for="coursesCategory" class="text text_smallest mb-05">Выберите категорию:</label>
      <select id="coursesCategory" class="select">
        <option value="javascript">JavaScript</option>
        <option value="react">React</option>
        <option value="angular">Angular</option>
        <option value="node">Node</option>
        <option value="css">CSS</option>
        <option value="python">Python</option>
        <option value="wordpress">WordPress</option>
      </select>
    </div>

    <div class="form__control mb-1">
      <label for="coursesLevel" class="text text_smallest mb-05">Выберите уровень:</label>
      <select id="coursesLevel" class="select">
        <option value="begginner">Begginner</option>
        <option value="intermediate">Intermediate</option>
        <option value="expert">Expert</option>
      </select>
    </div>

    <div class="form__control mb-1">
      <label for="coursesPrice" class="text text_smallest mb-05">Введите цену:</label>
      <input id="coursesPrice" type="text" class="input">
    </div>

    <div class="form__control mb-1">
      <label for="coursesAuthor" class="text text_smallest mb-05">Укажите автора:</label>
      <input id="coursesAuthor" type="text" class="input">
    </div>

    <div class="form__buttons">
      <div>
        <button class="button button_danger mr-1">Очистить</button>
        <button class="button button_success">Загрузить</button>
      </div>
      <button class="button button_secondary">Закрыть</button>
    </div>

  </form>
  <div class="modal__overflay">

  </div>
</div>
</template>
<script>

</script>

<style lang="scss" scoped>
.modal {
  &__overflay {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1;
    width: 100%;
    height: 100vh;
    background: lightcoral;
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
