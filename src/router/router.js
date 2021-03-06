import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home'
import Courses from '../views/Courses'
import Blog from '../views/Blog'
import Career from '../views/Career'
import About from '../views/About'
import Contact from '../views/Contact'
import Terms from '../views/Terms'
import Policy from '../views/Policy'
import Article from '../views/Article'
import Pagination from '../views/Pagination'
import Mail from '../views/Mail'
import EmailBody from '../components/parts/EmailBody'

const router = createRouter({
  history: createWebHistory(),
  routes: [{
      path: '/home',
      name: 'Home',
      component: Home,
      alias: '/',
      meta: {}
    },
    {
      path: '/courses',
      name: 'Courses',
      component: Courses,
      meta: { navigation: 'header' }
    },
    {
      path: '/blog',
      name: 'Blog',
      component: Blog,
      meta: { navigation: 'header' }
    },
    {
      path: '/about',
      name: 'About',
      component: About,
      meta: { navigation: 'header' }
    },
    {
      path: '/career',
      name: 'Career',
      component: Career,
      meta: { navigation: 'header' }
    },
    {
      path: '/pagination',
      name: 'Pagination',
      component: Pagination,
      meta: { navigation: 'header' }
    },
    {
      path: '/mail',
      name: 'Mail',
      component: Mail,
      meta: { navigation: 'header' },
      children: [
        { path: ':mailId?', component: EmailBody, props: true }
      ]
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact,
      meta: { navigation: 'footer' }
    },
    {
      path: '/terms',
      name: 'Terms & Conditions',
      component: Terms,
      meta: { navigation: 'footer' }
    },
    {
      path: '/policy',
      name: 'Privacy Policy',
      component: Policy,
      meta: { navigation: 'footer' }
    },
    {
      path: '/article/:articleId',
      name: 'Article',
      component: Article,
      meta: {},
      props: true
    }
  ],
  linkActiveClass: 'active',
  linkExactActiveClass: 'active',
})

export default router