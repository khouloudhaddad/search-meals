<template>
  <div class="p-8 pb-0 text-orange-500">
    <h1 class="text-4xl font-bold mb-4">Random Meals</h1>
  </div>
  <div class="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-3 gap-6 mt-5 px-8" v-if="meals">
      <div v-for="meal of meals" :key="meal.idMeal" class="bg-white shadow rounded-xl">
        <MealCard :meal="meal" />
      </div>
    </div>
</template>

<script setup>
import {  onMounted, ref } from "vue";
import MealCard from "../components/MealCard.vue";
import axiosClient from "../axiosClient.js";

const meals = ref([]);

onMounted(async () => {
  for (let i = 0; i < 10; i++) {
    axiosClient
      .get(`random.php`)
      .then(({ data }) => meals.value.push(data.meals[0]));
  }
});
</script>