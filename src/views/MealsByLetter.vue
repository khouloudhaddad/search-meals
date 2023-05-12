<template>
  <div class="flex flex-col gap-2 p-4 pb-5">
    <div class="flex flex-wrap items-center justify-center p-3">
      <router-link 
      v-for="letter of letters" 
      :key="letter" :to="{ name: 'byLetter', params: { letter } }"
      class="bg-indigo-600 text-white py-2 mb-1 me-1 px-4 rounded-md hover:bg-indigo-700 transition-colors"
    
      >
        {{ letter }}
      </router-link>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-3 gap-6">
      <div v-for="meal of meals" :key="meal.idMeal" class="bg-white shadow rounded-xl">
        <MealCard :meal="meal" />
      </div>
    </div>
  </div>
</template>
<script setup>
import { computed } from 'vue';
import store from '../store';
import { onMounted } from 'vue';
import { useRoute } from 'vue-router';
import MealCard from '../components/MealCard.vue';
import { watch } from 'vue';

const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split("");
const route = useRoute()
const meals = computed(() => store.state.mealsByLetter)

watch(route, ()=>{
  store.dispatch('searchMealsByLetter', route.params.letter)
})

onMounted(() => {
  if(route.params.letter){
    store.dispatch('searchMealsByLetter', route.params.letter)
  }else{
    store.dispatch('searchMealsByLetter', 'A')
  }
  
})
</script>