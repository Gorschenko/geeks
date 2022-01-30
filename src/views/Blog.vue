<template>
<section class="blog mt-2">
  <div class="inner">
    <Description class="description_center mb-1" :description="description"/>
    <div class="row">
      <div class="blog__loader" v-if="loading">
        <AppLoader/>
      </div>
      <BlogArticles
        v-else
        class="blog__content"
        :articles="articles"
        @remove-article="removeArticle"
      />
      <BlogSidebar class="blog__sidebar" @add-article="toggleModal"/>
    </div>
  </div>
  <BlogModal
    v-if="modal"
    @close-modal="toggleModal"
    @add-article="addArticle"
  />
  <AppAlert v-if="alert"/>
</section>
</template>

<script>
import Description from '../components/parts/Description'
import AppLoader from '../components/AppLoader'
import BlogArticles from '../components/blog/BlogArticles'
import BlogSidebar from '../components/blog/BlogSidebar'
import BlogModal from '../components/blog/BlogModal'
import AppAlert from '../components/AppAlert'

import {useAlert} from '../use/alert'
import {useStore} from 'vuex'
import {ref, computed, onMounted} from 'vue'

export default {
setup() {
  const store = useStore()
  const articles = computed(() => store.getters['articlesModule/articles'])
  const loading = ref(false)
  const description = {
    title: 'Geeks Newsroom',
    text: 'Stories, tips, and tools to inspire you to find your most creative self. Subscribe to get curated content delivered directly to your inbox.'
  }
  onMounted(() => loadArticles())
  const addArticle = async (article) => {
    await store.dispatch('articlesModule/addArticle', article)
    toggleModal()
  }
  const loadArticles = async () => {
    loading.value = true
    await store.dispatch('articlesModule/loadArticles')
    setTimeout(() => loading.value = false, 600)
    alert.value = true
  }
  const removeArticle =  async (id) => await store.dispatch('articlesModule/removeArticle', id)

  // Modal begin
  const modal = ref(false)
  const toggleModal = () => modal.value = !modal.value
  // Alert begin
  const {alert, toggleAlert} = useAlert()
  return {
    articles, loadArticles, addArticle, removeArticle,
    description,
    modal, toggleModal, loading,
    alert, toggleAlert
  }
},
components: { Description, AppLoader, BlogSidebar, BlogModal, BlogArticles, AppAlert}
}
</script>

<style lang="scss" scoped>
.blog {
  &__loader {
    @include row_center;
    width: calc(100% - 300px - 1rem);
    margin-right: 1rem;
  }
  &__content {
    width: calc(100% - 300px - 1rem);
    margin-right: 1rem;
  }
  &__sidebar {
    width: 300px;
    height: 500px;
  }
}
</style>