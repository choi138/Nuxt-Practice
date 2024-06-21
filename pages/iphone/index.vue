<script setup lang="ts">
useHead({
  title: 'Nuxt3 - Iphones',
})
</script>

<template>
  <div class="grid grid-cols-4 gap-4 mt-10">
    <nuxt-link to="/iphone/iphone-15" class="border rounded-lg shadow-lg text-center">
      <h1>Iphone 15</h1>
      <div class="flex justify-center">
        <img width="200" src="/images/iphon15.webp" alt="iphone 15">
      </div>
    </nuxt-link>
    <nuxt-link to="/iphone/iphone-15-pro" class="border rounded-lg shadow-lg text-center">
      <h1>Iphone 15 Pro</h1>
      <div class="flex justify-center">
        <img width="200" src="/images/iphon15-pro.webp" alt="iphone 15 pro">
      </div>
    </nuxt-link>
  </div>
</template>
