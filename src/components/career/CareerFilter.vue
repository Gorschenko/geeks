<template>
<section class="filter">
  <form class="form" @submit.prevent>
    <div class="form__control mr-1">
      <label for="position" class="text text_smallest mb-05">Введите название должности:</label>
      <input
        id="position"
        type="text"
        class="form__control-input"
        placeholder="Должность"
      >
    </div>
    <div class="form__control mr-1">
      <label for="location" class="text text_smallest mb-05">Введите название города:</label>
      <input
        id="location"
        type="text"
        class="form__control-input"
        placeholder="Город"
      >
    </div>
    <div class="form__control mr-1">
      <label for="category" class="text text_smallest mb-05">Выберите направление:</label>
      <select
        id="category"
        class="form__control-select text_smallest"
      >
        <option value="Design" class="text_smallest">Design</option>
        <option value="Engineering" class="text_smallest">Engineering</option>
        <option value="Administrative" class="text_smallest">Administrative</option>
      </select>
    </div>
    <button class="button button_danger form__button">Clear</button>
  </form>
</section>
</template>
<style lang="scss" scoped>
.form {
  display: flex;
  align-items: flex-end;
  &__control {
    &-select {
      width: 100%;
      height: 50px;
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
  }
  &__button {
    height: 50px;
  }
}
</style>
