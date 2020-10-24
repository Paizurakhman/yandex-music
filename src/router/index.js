import Vue from 'vue'
import VueRouter from 'vue-router'
import Genre from '../views/Genre.vue'
import Main from '../views/Main.vue'
import Podcast from '../views/Podcast.vue'
import Radio from '../views/Radio.vue'
import NewRel from '../views/NewRel.vue'
import Chart from '../views/Chart.vue'
import Children from '../views/Children.vue'
import Genres from '../views/Genres.vue'
import RadioGenre from '../views/RadioGenre.vue'
import Mood from '../views/Mood.vue'
import Activity from '../views/Activity.vue'
import Epoch from '../views/Epoch.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Main',
    component: Main
  },
  {
    path: '/genre',
    name: 'Genre',
    component: Genre
  },
  {
    path: '/podcast',
    name: 'Podcast',
    component: Podcast
  },
  {
    path: '/radio',
    name: 'Radio',
    component: Radio
  },
  {
    path: '/newrel',
    name: 'NewRel',
    component: NewRel
  },
  {
    path: '/chart',
    name: 'Chart',
    component: Chart
  },
  {
    path: '/children',
    name: 'Children',
    component: Children
  },
  {
    path: '/genres',
    name: 'Genres',
    component: Genres
  },
  {
    path: '/radio/genre',
    name: 'RadioGenres',
    component: RadioGenre
  },
  {
    path: '/radio/mood',
    name: 'Mood',
    component: Mood
  },
  {
    path: '/radio/activity',
    name: 'Activity',
    component: Activity
  },
  {
    path: '/radio/epoch',
    name: 'Epoch',
    component: Epoch
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
