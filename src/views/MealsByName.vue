<template>
  <div class="p-8 pb-0">
    <input type="text" class="rounded border-2 border-gray-200 w-full" placeholder="Search for meals" v-model="keyword"
      @change="searchMeals" />
  </div>
  <div class="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-3 gap-6 p-8">
    <div v-for="meal of meals" :key="meal.idMeal" class="bg-white shadow rounded-xl">
      <MealCard :meal="meal" />
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue';
import store from '../store';
import { computed } from 'vue';
import { onMounted } from 'vue';
import { useRoute } from 'vue-router';
import MealCard from '../components/MealCard.vue'

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