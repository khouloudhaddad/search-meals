<template>
  <div class="max-w-full mx-auto p-8">
    <div class="grid grid-cols-3 items-center gap-5 mb-4">
      <div class="cover">
        <img :src="meal.strMealThumb" :alt="meal.strMeal" class="max-w-[100%] rounded-xl" />
      </div>
      <div class="product_info col-span-2">
        <h1 class="text-4xl font-bold mb-5 text-blue-600">{{ meal.strMeal }}</h1>
        <div class="text-lg py-2">
          <div>
            <strong class="font-bold">Category:</strong> {{ meal.strCategory }}
          </div>
          <div>
            <strong class="font-bold">Area:</strong> {{ meal.strArea }}
          </div>
          <div>
            <strong class="font-bold">Tags:</strong> {{ meal.strTags }}
          </div>
        </div>
        <!--Instructions-->
        <div class="my-3">
          {{ meal.strInstructions }}
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2">
          <div class="mt-4">
            <YouTubeButton :href="meal.strYoutube" />
            <a :href="meal.strSource" target="_blank"
              class="px-3 py-2 rounded border-2 border-transparent bg-blue-600 text-white hover:bg-blue-700 transition-colors">
              View Original Source <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </div>
      </div>
    </div>

    <div class="mb-4 border-b border-gray-200 dark:border-gray-700">
      <ul class="flex flex-wrap -mb-px text-sm font-medium text-center" id="myTab" data-tabs-toggle="#myTabContent"
        role="tablist">
        <li class="mr-2" role="presentation">
          <button class="inline-block p-4 border-b-2 rounded-t-lg" id="profile-tab" data-tabs-target="#profile"
            type="button" role="tab" aria-controls="profile" aria-selected="false">Ingredients</button>
        </li>
        <li class="mr-2" role="presentation">
          <button
            class="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
            id="dashboard-tab" data-tabs-target="#dashboard" type="button" role="tab" aria-controls="dashboard"
            aria-selected="false">Mesures</button>
        </li>
      </ul>
    </div>
    <div id="myTabContent">
      <div class="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800" id="profile" role="tabpanel"
        aria-labelledby="profile-tab">
        <h2 class="text-2xl font-semibold mb-2">Ingredients</h2>
        <ul>
          <template v-for="(el, ind) of new Array(20)">
            <li v-if="meal[`strIngredient${ind + 1}`]">
              {{ ind + 1 }}. {{ meal[`strIngredient${ind + 1}`] }}
            </li>
          </template>
        </ul>
      </div>
      <div class="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800" id="dashboard" role="tabpanel"
        aria-labelledby="dashboard-tab">
        <h2 class="text-2xl font-semibold mb-2">Measures</h2>
        <ul>
          <template v-for="(el, ind) of new Array(20)">
            <li v-if="meal[`strMeasure${ind + 1}`]">
              {{ ind + 1 }}. {{ meal[`strMeasure${ind + 1}`] }}
            </li>
          </template>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue';
import { ref } from 'vue';
import { useRoute } from 'vue-router';
import axiosClient from '../axiosClient';

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