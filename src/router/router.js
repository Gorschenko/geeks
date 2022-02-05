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
      path: '/about',
      name: 'About',
      component: About,
      meta: { navigation: 'header' }
    },
    {
      path: '/courses',
      name: 'Courses',
      component: Courses,
      meta: { navigation: 'header' }
    },
    {
      path: '/career',
      name: 'Career',
      component: Career,
      meta: { navigation: 'header' }
    },
    {
      path: '/blog',
      name: 'Blog',
      component: Blog,
      meta: { navigation: 'header' }
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