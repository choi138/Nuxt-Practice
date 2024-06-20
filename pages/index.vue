<script setup lang="ts">
const goToAbout = () => {
  navigateTo('/about')
}
</script>

<template>
  <div>
    This is index page
    <NuxtLink to="/about">
      Go to About
    </NuxtLink>

    <button @click="goToAbout">
      Go to About
    </button>
  </div>
</template>
