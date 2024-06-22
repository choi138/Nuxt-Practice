<script setup lang="ts">
const route = useRoute()

const name = computed(() => {
  const paramName = route.params.name
  if (typeof paramName === 'string') {
    return paramName.replaceAll('-', ' ')
  }
  if (Array.isArray(paramName)) {
    return paramName.map(name => name.replaceAll('-', ' '))
  }
  return ''
})
</script>

<template>
  <div>
    <Head>
      <Title>Nuxt 3 - Iphone {{ name }}</Title>
    </Head>
    I iphone {{ name }}
  </div>
</template>
