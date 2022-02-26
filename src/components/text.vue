<template>{{text}}</template>

<script setup>
const props = defineProps({
   styleObj: {
      type: Object,
      default: () => {
         return {}
      }
   },
   text: {
      type: String,
      default: () => {
         return 'This is a inline content'
      }
   }
})
</script>

<style scoped>
</style>