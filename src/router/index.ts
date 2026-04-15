import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/components/Pages/HomePage.vue'
import ExperiencesPage from '@/components/Pages/ExperiencesPage.vue'
import ServicePage from '@/components/Pages/ServicePage.vue'
import HelpCenter from '@/components/Pages/HelpCenter.vue'
import DetailHotelPage from '@/components/Pages/DetailHotelPage.vue'
import TripDetail from '@/components/Pages/TripDetail.vue'
import DetailServices from '@/components/Pages/DetailServices.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/exp',
    name: 'Experience',
    component: ExperiencesPage
  },
  {
    path: '/service',
    name: "Service",
    component: ServicePage
  },
  {
    path: '/help',
    name: 'HelpCenter',
    component: HelpCenter
  },
  {
    path: '/detailHotel/:id',
    name: 'DetailHotel',
    component: DetailHotelPage
  },
  {
    path: '/detailTrip/:id',
    name: 'Detailtrip',
    component: TripDetail
  },
  {
    path: '/detailService/:id',
    name: 'DetailServices',
    component: DetailServices
  },
]


const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router   