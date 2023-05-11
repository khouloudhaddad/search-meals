<template>
  <div class="p-8">
    <input type="text"
    class="rounded border-2 border-gray-200 w-full" 
    placeholder="Search for meals"
    :model="keyword"
    @change="searchMeals"
    />
  </div>
  <div  class="grid grid-cols-1 lg:grid-cols-5 md:grid-cols-3 gap-5 p-8">
    <div v-for="meal of meals" :key="meal.idMeal" class="bg-white shadow rounded-md">
      <img :src="meal.strMealThumb" :alt="meal.strMeal" class="rounded-md rounded-b-none" />
      <h3 class="px-2 py-3 font-semibold">{{ meal.strMeal }}</h3>
      <div class="flex items-center justify-between p-2">
        <div><strong>Category:</strong> {{ meal.strCategory }}</div>
      <div><strong>Origin:</strong> {{ meal.strArea }}</div>
      </div>
      <p class="p-2">{{ meal.strInstructions.slice(0,100) }}</p>
      <div class="flex items-center justify-between">
        <a class="p-2 bg-primary-500 rounded text-white hover:bg-primary-600 transition-colors m-2 w-[50%] text-center" :href="meal.strYoutube" target="_blank">Youtube</a>
        <router-link class="p-2 bg-slate-500 rounded text-white hover:bg-slate-600 transition-colors m-2 w-[50%] text-center" to="/" target="_blank">View</router-link>
      </div>
    </div> 
  </div>
</template>
<script setup>
import { ref } from 'vue';
import store from '../store';
import { computed } from 'vue';

const keyword= ref('');
const meals = computed(()=>store.state.searchedMeals)

function searchMeals(){
  store.dispatch('searchMeals', keyword.value)
}
</script>