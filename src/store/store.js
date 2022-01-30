import { createStore } from 'vuex'
import articlesModule from './modules/articles'

export const store = createStore({
  state() {
    return {
      courses: [{
          name: 'Angular – the complete guide for beginner',
          category: 'Angular',
          level: 'Beginner',
          time: '12h',
          price: '640',
          author: 'Juanita Bell'
        },
        {
          name: 'How to easily create a website with React',
          category: 'React',
          level: 'Beginner',
          time: '4h 12m',
          price: '230',
          author: 'Morris Mccoy'
        },
        {
          name: 'Getting Started with JavaScript',
          category: 'JavaScript',
          level: 'Intermediate',
          time: '13h 22m',
          price: '700',
          author: 'Morris Mccoy'
        },
        {
          name: 'Creating a Custom Event in Javascript',
          category: 'JavaScript',
          level: 'Beginner',
          time: '3h 20m',
          price: '200',
          author: 'Morris Mccoy'
        },
        {
          name: 'Modern JavaScript Beginner Tutorial – Simple',
          category: 'JavaScript',
          level: 'Expert',
          time: '2h 46m',
          price: '550',
          author: 'Ted Hawkins'
        },
        {
          name: 'CSS: ultimate CSS course from beginner to advanced',
          category: 'CSS',
          level: 'Beginner',
          time: '3h 20m',
          price: '200',
          author: 'Juanita Bell'
        },
        {
          name: 'Node.js for beginners and professionals',
          category: 'Node',
          level: 'Beginner',
          time: '3h 45m',
          price: '350',
          author: 'Claire Robertson'
        },
        {
          name: 'The Python course: build web application',
          category: 'Python',
          level: 'Intermediate',
          time: '2h 25m',
          price: '250',
          author: 'Claire Robertson'
        },
        {
          name: 'WordPress themes & plugins development',
          category: 'WordPress',
          level: 'Intermediate',
          time: '2h 40m',
          price: '300',
          author: 'Claire Robertson'
        },
      ],
      categories: ['JavaScript', 'Angular', 'React', 'CSS', 'Node', 'Python', 'WordPress'],
      levels: ['Beginner', 'Intermediate', 'Expert'],
      authors: [
        { female: 'Mccoy', name: 'Morris', position: 'Developer' },
        { female: 'Robertson', name: 'Claire', position: 'Developer' },
        { female: 'Bell', name: 'Juanita', position: 'Developer' },
        { female: 'Hawkins', name: 'Ted', position: 'Developer' },
        { female: 'Pinto', name: 'Maria', position: 'Developer' },
        { female: 'Holler', name: 'Mary', position: 'CEO' },
        { female: 'Holland', name: 'Charlie', position: 'Designer' },
        { female: 'Butler', name: 'James', position: 'Manager' },
      ],
    }
  },
  getters: {
    courses(state) {
      return state.courses
    }
  },
  modules: { articlesModule }
})