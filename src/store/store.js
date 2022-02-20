import { createStore } from 'vuex'
import articlesModule from './modules/articles'
import coursesModule from './modules/courses'

export const store = createStore({
  state() {
    return {
      categories: ['JavaScript', 'Angular', 'React', 'Css', 'Node', 'Python', 'WordPress'],
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
      vacancies: [{
          position: 'Marketing Designer',
          industry: 'Design',
          location: 'San Francisco',
          mode: 'Remote'
        },
        {
          position: 'Product Design Lead',
          industry: 'Design',
          location: 'United Kingdom',
          mode: 'Full-time'
        },
        {
          position: 'Brand Designer',
          industry: 'Design',
          location: 'Canada',
          mode: 'Remote'
        },
        {
          position: 'Sr. UX Engineer',
          industry: 'Design',
          location: 'Ireland',
          mode: 'Remote'
        },
        {
          position: 'Principal Data Engineer',
          industry: 'Engineering',
          location: 'Ireland',
          mode: 'Remote'
        },
        {
          position: 'Sr. React Engineer',
          industry: 'Engineering',
          location: 'Ireland',
          mode: 'Remote'
        },
        {
          position: 'Sr. Engineering Manager',
          industry: 'Engineering',
          location: 'Canada',
          mode: 'Remote'
        },
        {
          position: 'Software Engineer Ruby on Rails',
          industry: 'Engineering',
          location: 'United Kingdom',
          mode: 'Remote'
        },
        {
          position: 'Customer Success Manager',
          industry: 'Administrative',
          location: 'United Kingdom',
          mode: 'Full-time'
        },
        {
          position: 'Account Executive',
          industry: 'Administrative',
          location: 'Philippines',
          mode: 'Remote'
        },
        {
          position: 'Sales Development Representative',
          industry: 'Administrative',
          location: 'Canada',
          mode: 'Full-time'
        }
      ]
    }
  },
  getters: {
    vacancies(state) {
      return state.vacancies
    }
  },
  modules: { articlesModule, coursesModule }
})