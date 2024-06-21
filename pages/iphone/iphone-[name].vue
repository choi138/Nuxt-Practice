<script setup lang="ts">
const route = useRoute()
const name = computed(() => route.params.name.replaceAll('-', ' '))
</script>

<template>
  <div>
    I iphone {{ name }}
  </div>
</template>
