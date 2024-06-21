<template>
  <div>
    <nav class="bg-purple-700 text-white border-blue-600">
      <NuxtLink to="/">
        Home
      </NuxtLink>
      <NuxtLink to="/about">
        About
      </NuxtLink>
      <NuxtLink to="/profile">
        Profile
      </NuxtLink>
    </nav>
    <!-- Here nuxt will replace page content -->
    <slot />
  </div>
</template>
