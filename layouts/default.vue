<template>
  <div>
    <nav class="bg-purple-700 text-white text-lg flex shadow-lg p-3 justify-between">
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
    </nav>
    <!-- Here nuxt will replace page content -->
    <slot />
  </div>
</template>
