<template>
  <div class="grid grid-cols-3 items-center gap-5 mb-4">
      <div class="cover">
        <img :src="meal.strMealThumb" :alt="meal.strMeal" class="max-w-[100%] rounded-xl" />
      </div>
      <div class="product_info col-span-2">
        <h1 class="text-4xl font-bold mb-5 text-indigo-600">{{ meal.strMeal }}</h1>
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
        <div class="my-3" v-if="meal.strInstructions && meal.strInstructions.length>0">
          {{ meal.strInstructions.slice(0, 700) }}
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2">
          <div class="mt-4">
            <YouTubeButton :href="meal.strYoutube" />
            <a :href="meal.strSource" target="_blank"
              class="me-3 px-3 py-2 rounded border-2 border-transparent bg-indigo-600 text-white hover:bg-indigo-700 transition-colors">
              View Original Source <span aria-hidden="true">&rarr;</span>
            </a>
            <YoutubeButton :href="meal.strYoutube">View on Youtube</YoutubeButton>
          </div>
        </div>
      </div>
    </div>
</template>

<script setup>
import YoutubeButton from '../components/common/YoutubeButton.vue'

const {meal} = defineProps({
  meal:{
    required:true,
    type: Object
  }
})
</script>