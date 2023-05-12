<template>
  <div>
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
        <h2 class="text-2xl font-semibold mb-3">Ingredients</h2>
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
        <h2 class="text-2xl font-semibold mb-3">Measures</h2>
        <table class="w-[100%] table-auto text-md text-left text-gray-700 dark:text-gray-400">
          <thead class="h-10 text-md text-center text-gray-700 uppercase bg-gray-300 dark:bg-gray-700 dark:text-gray-400">
            <th class="border">Ingredient</th>
            <th class="border">Mesure</th>
          </thead>
          <template v-for="(el1, ind1) of new Array(20)">
            <tr v-if="meal[`strMeasure${ind1 + 1}`] && meal[`strIngredient${ind1 + 1}`]"  class="h-8">
            <td v-if="meal[`strIngredient${ind1 + 1}`] && meal[`strIngredient${ind1 + 1}`].length>1" class="px-3 border">
              {{ ind1 + 1 }}. {{ meal[`strIngredient${ind1 + 1}`] }} 
            </td>
            <td class="px-3 border">{{ meal[`strMeasure${ind1 + 1}`] }}</td>
          </tr>
          </template>
        </table>
      </div>
    </div>
  </div>
</template>

<script setup>

const { meal } = defineProps({
  meal: {
    required: true,
    type: Object
  }
})
</script>