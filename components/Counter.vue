<script setup lang="ts">
const count = ref(0)

const increment = () => {
  count.value++
}

const decrement = () => {
  count.value--
}
</script>

<template>
  <button @click="increment">
    Increment
  </button>
  <p>{{ count }}</p>
  <button @click="decrement">
    Decrement
  </button>
</template>
