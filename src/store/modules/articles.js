import axios from 'axios'
export default {
  namespaced: true,
  state() {
    return {
      articles: []
    }
  },
  mutations: {
    addArticle(state, article) {
      state.articles.push(article)
    },
    loadArticles(state, articles) {
      state.articles = articles
    },
    removeArticle(state, id) {
      state.articles = state.articles.filter(a => a.id !== id)
    }
  },
  actions: {
    async addArticle({ commit }, article) {
      try {
        const { data } = await axios.post('https://gorschenko-geeks-default-rtdb.europe-west1.firebasedatabase.app/articles.json', article)
        commit('addArticle', {...article, id: data.name })
      } catch (e) {}
    },
    async loadArticles({ commit }) {
      try {
        const { data } = await axios.get('https://gorschenko-geeks-default-rtdb.europe-west1.firebasedatabase.app/articles.json')
        const response = Object.keys(data).map(key => {
          return {
            id: key,
            ...data[key]
          }
        })
        commit('loadArticles', response)
      } catch (e) {}
    },
    async removeArticle({ commit }, id) {
      try {
        await axios.delete(`https://gorschenko-geeks-default-rtdb.europe-west1.firebasedatabase.app/articles/${id}.json`)
        commit('removeArticle', id)
      } catch (e) {}
    }
  },
  getters: {
    articles(state) {
      return state.articles
    }
  }
}