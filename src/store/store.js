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
    courses(state) {
      return state.courses
    },
    vacancies(state) {
      return state.vacancies
    }
  },
  modules: { articlesModule }
})