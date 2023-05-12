<template>
  <router-link :to="{ name: 'mealDetails', params: { id: meal.idMeal } }">
    <img :src="meal.strMealThumb" :alt="meal.strMeal" class="rounded-xl rounded-b-none h-64 w-full object-cover" />
  </router-link>
  <div class="px-3 py-3">
    <router-link :to="'/meal/' + meal.idMeal">
      <h3 class="py-3 font-semibold text-xl text-indigo-600">{{ meal.strMeal }}</h3>
    </router-link>
    <div class="flex items-center justify-between py-2">
      <strong>Category:</strong> {{ meal.strCategory }}
      <strong>Origin:</strong> {{ meal.strArea }}
    </div>
    <p class="py-3" v-if="meal.strInstructions">{{ meal.strInstructions.slice(0, 75) + " ..." }}</p>
    <div class="flex items-center justify-between">
      <YoutubeButton :href="meal.strYoutube">Youtube</YoutubeButton>
    </div>
  </div>
</template>

<script setup>
import YoutubeButton from './common/YoutubeButton.vue'

const { meal } = defineProps({
  meal: {
    required: true,
    type: Object
  },
  truncated: {
    required: true,
    type: Number
  }
})
</script>