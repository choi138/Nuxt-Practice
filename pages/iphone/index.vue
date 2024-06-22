<script setup lang="ts">
import { IPHONES } from '@/constants'

useHead({
  title: 'Nuxt3 - Iphones',
})

// const { data } = useFetch('/iphones')
</script>

<template>
  <div class="grid grid-cols-4 gap-4 mt-10">
    <nuxt-link v-for="iphone in IPHONES" :key="iphone" :to="`/iphone/${iphone}`" class="border rounded-lg shadow-lg text-center">
      <h1>{{ iphone }}</h1>
      <div class="flex justify-center">
        <img width="200" :src="`/images/${iphone}.webp`">
      </div>
    </nuxt-link>
  </div>
</template>
