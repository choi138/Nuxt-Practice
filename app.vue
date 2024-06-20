<script setup lang="ts">
const page = ref('home')
const view = (name: string) => {
  page.value = name
}
</script>

<template>
  <div>
    <!-- <a href="#" @click="view('home')">Home</a>
    <a href="#" @click="view('counter')">Counter</a>
    <LazyHomeWelcome v-if="page === 'home'" />
    <LazyCounter v-if="page === 'counter'" /> -->

    <NuxtPage />
  </div>
</template>
