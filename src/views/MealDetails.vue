<template>
  <div class="max-w-full mx-auto p-8">

    <MealItem :meal="meal" />
    <MealItemTabs :meal="meal" />
  </div>
</template>

<script setup>
import { onMounted, watch } from 'vue';
import { ref } from 'vue';
import { useRoute } from 'vue-router';
import axiosClient from '../axiosClient';
import MealItem from '../components/MealItem.vue'
import MealItemTabs from '../components/MealItemTabs.vue';

const meal = ref({})
const route = useRoute()

onMounted(() => {
  const mealId = route.params.id
  axiosClient.get(`lookup.php?i=${mealId}`).then(({ data }) => {
    //debugger;
    meal.value = data.meals[0]
  })
})

</script>