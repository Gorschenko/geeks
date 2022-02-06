<template>
<div class="filter">
  <select class="select" v-model="selectValue">
    <option value="default">По умолчанию</option>
    <option value="name">По наименованию</option>
    <!-- <option value="max">По возрастанию</option>
    <option value="min">По убыванию</option> -->
  </select>
</div>
</template>
<script>
import {ref, watch} from 'vue'

export default {
props: ['modelVlaue'],
emits: ['update:modelValue'],
setup(_, {emit}) {
  const selectValue = ref('default')
  watch(selectValue, value => emit('update:modelValue', value))

  return {selectValue}
}
}
</script>
<style lang="scss" scoped>
.filter {

}

.select {
  @include container;
  color: $color-secondary;
  appearance: none;
  background: url('../../assets/icons/arrow.svg') no-repeat right;
  background-position-x: calc(100% - 6px);
  cursor: pointer;

  &:hover, &:focus {
    outline: $border-secondary;
  }
}
</style>
