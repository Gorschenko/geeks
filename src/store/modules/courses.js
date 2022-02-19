import axios from 'axios'
export default {
  namespaced: true,
  state() {
    return {
      courses: []
    }
  },
  mutations: {
    addCourse(state, course) {
      state.courses.push(course)
    },
    loadCourses(state, courses) {
      state.courses = courses
    }
  },
  actions: {
    async addCourse({ commit }, course) {
      try {
        const { data } = await axios.post('https://gorschenko-geeks-default-rtdb.europe-west1.firebasedatabase.app/courses.json', course)
        commit('addCourse', { id: data.name, ...course })
      } catch (e) {}
    },
    async loadCourses({ commit }) {
      try {
        const { data } = await axios.get('https://gorschenko-geeks-default-rtdb.europe-west1.firebasedatabase.app/courses.json')
        const response = Object.keys(data).map(key => {
          return {
            id: key,
            ...data[key]
          }
        })
        commit('loadCourses', response)
      } catch (e) {}
    }
  },
  getters: {
    courses(state) {
      return state.courses
    }
  }
}