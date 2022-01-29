<template>
<section class="blog mt-2">
  <div class="inner">
    <Description
      class="description_center mb-1"
      :description="description"
    />
    <div class="row">
      <section class="blog__content">
        <!-- <ul class="blog__content-list">
          <li class="blog__content-list-item" v-for="article in articles" :key="article">
            <Article :article="article"/>
          </li>
        </ul>
      </section> -->
        <transition-group name="blog" class="blog__content-list" tag="ul">
          <li class="blog__content-list-item blog-item" v-for="article in articles" :key="article">
            <BlogArticle :article="article"/>
          </li>
        </transition-group>
      </section>
      <BlogSidebar
        class="blog__sidebar"
        @add-article="toggleModal"
      />
    </div>
  </div>
  <BlogModal
    v-if="modal"
    @close-modal="toggleModal"
    @add-article="addArticle"
  />
</section>
</template>

<script>
import Description from '../components/parts/Description'
import BlogArticle from '../components/blog/BlogArticle'
import BlogSidebar from '../components/blog/BlogSidebar'
import BlogModal from '../components/blog/BlogModal'
import {useStore} from 'vuex'
import {ref} from 'vue'

export default {
  setup() {
    const store = useStore()
    const articles = store.getters.articles
    const description = {
      title: 'Geeks Newsroom',
      text: 'Stories, tips, and tools to inspire you to find your most creative self. Subscribe to get curated content delivered directly to your inbox.'
    }

    // Modal begin
    const modal = ref(false)
    const toggleModal = () => modal.value = !modal.value
    const addArticle = (content) => {
      store.commit('addArticle', content)
      toggleModal()
    }
    // Modal end

    return {
      articles,
      description,
      modal, toggleModal, addArticle
    }
  },
  components: { Description, BlogArticle, BlogSidebar, BlogModal}
}
</script>

<style lang="scss" scoped>
.blog-item {
  transition: all 0.8s ease;
}
.blog-enter-from,
.blog-leave-to {
  opacity: 0;
  transform: translateX(-100px);
}

.blog-leave-active {
  position: absolute;
}
.blog {
  &__content {
    width: calc(100% - 360px);
    &-list {
      display: flex;
      flex-wrap: wrap;
      width: 100%;
      margin: 0 -1rem;
      &-item {
        width: calc(100%/3 - 2rem);
        margin: 1rem;
      }
    }
  }
  &__sidebar {
    width: 360px;
    height: 500px;
  }
}
</style>