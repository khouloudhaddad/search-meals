<template>
  <div class="p-8">
    <input type="text" class="rounded border-2 border-gray-200 w-full" 
    placeholder="Search for meals by ingredients" 
    v-model="ingredient"
      @change="searchMeals" />

    <div class="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-3 gap-6 mt-5" v-if="meals">
      <div v-for="meal of meals" :key="meal.idMeal" class="bg-white shadow rounded-xl">
        <MealCard :meal="meal" />
      </div>
    </div>
  </div>
</template>
<script setup>
import { computed, ref } from 'vue';
import store from '../store';
import { onMounted } from 'vue';
import { useRoute } from 'vue-router';
import MealCard from '../components/MealCard.vue';
import { watch } from 'vue';

const ingredient = ref('')
const route = useRoute()
const meals = computed(() => store.state.mealsByIngredient)

function searchMeals() {
  store.dispatch('searchMealsByIngredient', ingredient.value)
}

watch(route, ()=>{
  store.dispatch('searchMealsByIngredient', ingredient.value)
})

onMounted(() => {
    store.dispatch('searchMealsByIngredient', ingredient.value)
})
</script>