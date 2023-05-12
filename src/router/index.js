import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue'
import MealsByName from '../views/MealsByName.vue'
import MealsByLetter from '../views/MealsByLetter.vue'
import MealDetails from '../views/MealDetails.vue'
import MealsByIngredient from '../views/MealsByIngredient.vue'
import DefaultLayout from '../components/common/DefaultLayout.vue'
import GuestLayout from '../components/common/GuestLayout.vue'
import Ingredients from '../views/Ingredients.vue'
/** auth pages **/
import Login from '../views/auth/Login.vue'
import Register from '../views/auth/Register.vue'
import ForgotPassword from '../views/auth/ForgotPassword.vue';

const routes = [
  {
    path: "/",
    component: DefaultLayout,
    children: [
      {
        path: '/',
        name: 'home',
        component: Home
      },
      {
        path: '/by-name/:name?',
        name: 'byName',
        component: MealsByName
      },
      {
        path: '/by-letter/:letter?',
        name: 'byLetter',
        component: MealsByLetter
      },
      {
        path: '/by-ingredient/:ingredient?',
        name: 'byIngredient',
        component: MealsByIngredient
      },
      {
        path: '/meal/:id(\\d+)',
        name: 'mealDetails',
        component: MealDetails
      },
      {
        path: "/ingredients",
        name: "ingredients",
        component: Ingredients,
      },
    ]
  },

  {
    path: '/auth',
    component: GuestLayout,
    children: [
      {
        path: '/login',
        name: 'login',
        component: Login
        ,
      },
      {
        path: '/register',
        name: 'register',
        component: Register
        ,
      },
      {
        path: '/ForgotPassword',
        name: 'forgotPassword',
        component: ForgotPassword
      }
    ]
  }

]

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;