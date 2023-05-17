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
    <div class="icons-share bg-white p-5 rounded-lg border">
      <div class="flex items-center justify-center">
        <s-email :share-options="shareOptions">
          <svg
            fill="none"
            stroke="currentColor"
            stroke-width="1.5"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M21.75 9v.906a2.25 2.25 0 01-1.183 1.981l-6.478 3.488M2.25 9v.906a2.25 2.25 0 001.183 1.981l6.478 3.488m8.839 2.51l-4.66-2.51m0 0l-1.023-.55a2.25 2.25 0 00-2.134 0l-1.022.55m0 0l-4.661 2.51m16.5 1.615a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V8.844a2.25 2.25 0 011.183-1.98l7.5-4.04a2.25 2.25 0 012.134 0l7.5 4.04a2.25 2.25 0 011.183 1.98V19.5z"
            ></path>
          </svg>
        </s-email>
        <s-blogger
          :window-features="windowFeatures"
          :share-options="shareOptionsBlog"
          :use-native-behavior="useNativeBehavior"
        >
          <svg
            fill="none"
            stroke="currentColor"
            stroke-width="1.5"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
            ></path>
          </svg>
        </s-blogger>
      </div>
    </div>
  </div>
</template>

<script setup>
import YoutubeButton from './common/YoutubeButton.vue'
import { SEmail, SBlogger } from "vue-socials";
const shareOptions = {
  mail: "google@gmail.com",
  cc: ["google1@gmail.com", "google3@gmail.com"],
  bcc: ["google2@gmail.com", "google4@gmail.com"],
  subject: "Subject",
  body: "Hello\nWorld",
};
const windowFeatures = {};
const shareOptionsBlog = {
  url: "https://github.com/",
  title: "Title",
  text: "Text",
};
const useNativeBehavior = false;
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