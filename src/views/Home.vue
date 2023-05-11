<template>
  <div class="flex flex-col p-8">

    <input type="text" class="rounded border-2 border-gray-200 w-full" name="" id="" 
    placeholder="Search for meals" 
    />

    <div class="flex justify-center gap-2 mt-2">
      <router-link v-for="letter of letters" :key="letter" :to="{name: 'byLetter', params: { letter } }">
        {{ letter }}
      </router-link>
    </div>

  </div>
</template>

<script setup>
import { computed } from 'vue';
import store from '../store';
import { onMounted } from 'vue';
import axiosClient from '../axiosClient'
import { ref } from 'vue';

const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split("");

const ingredients = ref([])

onMounted(async ()=>{
  const response = await axiosClient.get('/list.php?i=list');
  console.log(response.data.meals)
  ingredients.value = response.data.meals

})

</script>