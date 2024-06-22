<script setup lang="ts">
const goToAbout = () => {
  navigateTo('/about');
};
</script>

<template>
  <div>
    This is home page
    <button @click="goToAbout">Go to About</button>
  </div>
</template>
