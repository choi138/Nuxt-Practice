<script setup lang="ts">
const route = useRoute()

const name = computed(() => route.params.name.replaceAll('-', ' '))
</script>

<template>
  <div>
    <Head>
      <Title>Nuxt 3 - Iphone {{ name }}</Title>
    </Head>
    I iphone {{ name }}
  </div>
</template>
