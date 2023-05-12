<template>
  <div class="p-8 pb-0">
    <input type="text" class="rounded border-2 border-gray-200 w-full" placeholder="Search for meals" v-model="keyword"
      @change="searchMeals" />
  </div>
  <div class="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-3 gap-6 p-8">
    <div v-for="meal of meals" :key="meal.idMeal" class="bg-white shadow rounded-xl">
      <router-link to="/">
        <img :src="meal.strMealThumb" :alt="meal.strMeal" class="rounded-xl rounded-b-none h-64 w-full object-cover" />
      </router-link>
      <div class="px-3 py-3">
        <router-link :to="'/meal/'+meal.idMeal">
          <h3 class="py-3 font-semibold text-xl text-pink-600">{{ meal.strMeal }}</h3>
        </router-link>
        <div class="flex items-center justify-between py-2">
          <strong>Category:</strong> {{ meal.strCategory }}
          <strong>Origin:</strong> {{ meal.strArea }}
        </div>
        <p class="py-3">{{ meal.strInstructions.slice(0, 77) + " ..." }}</p>
        <div class="flex items-center justify-between">
          <a class="px-2 py-2 rounded border-2 border-red-600 bg-red-600 me-2 hover:bg-white hover:text-red-600 transition-colors w-full text-center text-white"
            :href="meal.strYoutube" target="_blank">Youtube</a>

        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue';
import store from '../store';
import { computed } from 'vue';
import { onMounted } from 'vue';
import { useRoute } from 'vue-router';

const keyword = ref('');
const meals = computed(() => store.state.searchedMeals)
const route = useRoute()

function searchMeals() {
  store.dispatch('searchMeals', keyword.value)
}

onMounted(() => {
  keyword.value = route.params.name;
  if (keyword.value) {
    searchMeals()
  }
})
</script>