<script setup lang="ts">
const card = useCart();
const auth = useAuth();
const pageVisitCount = ref(0);

onMounted(() => {
  pageVisitCount.value = usePageVisitCount().value;
});

const logout = () => {
  auth.value.isAuthenticated = false;
};
</script>

<template>
  <nav class="bg-purple-900 text-white text-lg flex shadow-lg p-3 justify-between">
    <div class="flex gap-x-4">
      <NuxtLink to="/"> Home </NuxtLink>
      <NuxtLink to="/iphone"> Iphones </NuxtLink>
      <p>Cart ({{ card.length }})</p>
      <p>Total Page Route Change: {{ pageVisitCount }}</p>
    </div>
    <div v-if="auth.isAuthenticated">
      <NuxtLink to="/profile"> Profile </NuxtLink>
      <button class="ml-4" @click="logout">Logout</button>
    </div>
    <NuxtLink v-else to="/login"> Login </NuxtLink>
  </nav>
</template>
