<template>
  <a 
  class="px-2 py-2 rounded border-2 border-red-600 bg-red-600 me-2 hover:bg-white hover:text-red-600 transition-colors w-full text-center text-white"
    :href="href" target="_blank">
    <slot></slot>
  </a>
</template>

<script>
import { defineProps } from 'vue';
const propos = defineProps({
  href: String
})
</script>