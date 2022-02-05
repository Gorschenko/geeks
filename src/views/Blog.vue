<template>
<section class="blog mt-2">
  <div class="inner">
    <Description class="description_center mb-2" :description="description"/>
    <BlogFilter v-model="filterValue" class="mb-1"/>
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
  <AppAlert :alert="alert"/>
</section>
</template>

<script>
import Description from '../components/parts/Description'
import BlogFilter from '../components/blog/BlogFilter'
import AppLoader from '../components/AppLoader'
import BlogArticles from '../components/blog/BlogArticles'
import BlogSidebar from '../components/blog/BlogSidebar'
import BlogModal from '../components/blog/BlogModal'
import AppAlert from '../components/AppAlert'

import {useAlert} from '../use/alert'
import {useStore} from 'vuex'
import {ref, computed, onMounted, toRefs} from 'vue'

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
  const addArticle = (article) => {
    store.dispatch('articlesModule/addArticle', article)
    toggleModal()
    setAlert(true, 'primary', 'Созданная статья добавлена.')
  }
  const loadArticles = () => {
    loading.value = true
    store.dispatch('articlesModule/loadArticles')
    setTimeout(() => {
      loading.value = false
      setAlert(true, 'primary', 'Все статьи загружены.')
    }, 600)
  }
  const removeArticle =  (id) => {
    store.dispatch('articlesModule/removeArticle', id)
    setAlert(true, 'primary', 'Выбранная статья удалена.')
  }

  // Modal begin
  const modal = ref(false)
  const toggleModal = () => modal.value = !modal.value

  const {alert, toggleAlert, setAlert} = useAlert()

  const filterValue = ref('default')
  return {
    articles, loadArticles, addArticle, removeArticle,
    description,
    modal, toggleModal, loading,
    alert, toggleAlert, setAlert, ...toRefs(alert),
    filterValue
  }
},
components: { Description, BlogFilter, AppLoader, BlogSidebar, BlogModal, BlogArticles, AppAlert}
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
