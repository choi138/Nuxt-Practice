<script setup lang="ts">
const card = useCart()
</script>

<template>
  <nav class="bg-purple-900 text-white text-lg flex shadow-lg p-3 justify-between">
    <NuxtLink to="/">
      Home
    </NuxtLink>
    <NuxtLink to="/about">
      About
    </NuxtLink>
    <NuxtLink to="/iphone">
      Iphones
    </NuxtLink>
    <NuxtLink to="/profile">
      Profile
    </NuxtLink>
    <NuxtLink to="/login">
      Login
    </NuxtLink>
    <p>Cart ({{ card.length }})</p>
  </nav>
</template>
