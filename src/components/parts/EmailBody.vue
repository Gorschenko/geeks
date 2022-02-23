<template>
<div>
  <div class="email" v-if="email">
    <span class="text text_smallest text_bold text_primary mb-05">{{ email.id }}</span>
    <p class="text text__smallest">{{ email.body }}</p>
  </div>
  <div v-else>Выберите письмо</div>
</div>
</template>
<script>
export default {
props: ['mailId', 'emails'],
computed: {
  email() {
    return this.emails.find(e => e.id == this.mailId)
  }
}
}
</script>
<style lang="scss" scoped>
.email {

}
</style>
