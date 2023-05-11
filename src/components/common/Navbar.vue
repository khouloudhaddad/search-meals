<template>
  <header class="bg-white h-16 shadow flex justify-between items-stretch">
    <router-link :to="{ name: 'home' }"
      class="inline-flex items-center h-full px-5 transition-colors hover:text-purple-600">Home</router-link>
    <div class="flex items-center gap-1">
      <router-link :to="{ name: 'byName' }"
        class="inline-flex items-center px-2 h-full transition-colors hover:bg-purple-100">
        Search Meals
      </router-link>
      <router-link :to="{ name: 'byLetter' }"
        class="inline-flex items-center px-2 h-full transition-colors hover:bg-purple-100">
        Meals By Letter
      </router-link>
      <router-link :to="{ name: 'byIngredient' }"
        class="inline-flex items-center px-2 h-full transition-colors hover:bg-purple-100">
        Meals By Ingredient
      </router-link>
  </div>
</header>
</template>