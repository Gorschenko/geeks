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
            <BlogArticle 
              :article="article"
              @remove-article="removeArticle"
            />
          </li>
        </transition-group>
      </section>
      <BlogSidebar
        class="blog__sidebar"
        @add-article="toggleModal"
        @load-articles="loadArticles"
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
import axios from 'axios'
import {useStore} from 'vuex'
import {ref, onMounted} from 'vue'

export default {
  setup() {
    const store = useStore()
    const articles = ref([])
    const description = {
      title: 'Geeks Newsroom',
      text: 'Stories, tips, and tools to inspire you to find your most creative self. Subscribe to get curated content delivered directly to your inbox.'
    }
    onMounted(() => {
      loadArticles()
    })
    // Modal begin
    const modal = ref(false)
    const toggleModal = () => modal.value = !modal.value
    const addArticle = async (content) => {
      // store.commit('addArticle', content)
      const response = await fetch('https://gorschenko-geeks-default-rtdb.europe-west1.firebasedatabase.app/courses.json', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          ...content
        })
      })
      const firebaseData = await response.json()
      articles.value.push({
        id: firebaseData.name,
        ...content
      })
      console.log(firebaseData)
      toggleModal()
    }
    // Modal end
    const loadArticles = async () => {
      try {
        const {data} = await axios.get('https://gorschenko-geeks-default-rtdb.europe-west1.firebasedatabase.app/courses.json')
        const response = Object.keys(data).map(key => {
          return {
            id: key,
            ...data[key]
          }
        })
      articles.value = response
      console.log(response)
      } catch(e) {
        console.log(e.message)
      }
    }
    const removeArticle =  async (id) => {
      await axios.delete(`https://gorschenko-geeks-default-rtdb.europe-west1.firebasedatabase.app/courses/${id}.json`)
      articles.value = articles.value.filter(article => article.id !== id)
    }
    return {
      articles, loadArticles, removeArticle,
      description,
      modal, toggleModal, addArticle
    }
  },
  components: { Description, BlogArticle, BlogSidebar, BlogModal}
}
</script>

<style lang="scss" scoped>
.blog-item {
  transition: all 0.5s ease;
}
.blog-enter-from,
.blog-leave-to {
  opacity: 0;
  transform: translateY(100px);
}

.blog-leave-active {
  position: absolute;
}
.blog {
  &__content {
    width: calc(100% - 300px);
    &-list {
      display: flex;
      flex-wrap: wrap;
      width: 100%;
      margin: 0 -0.5rem;
      &-item {
        width: calc(100%/3 - 1rem);
        margin: 0 0.5rem 0.5rem 0.5rem;
      }
    }
  }
  &__sidebar {
    width: 300px;
    height: 500px;
  }
}
</style>