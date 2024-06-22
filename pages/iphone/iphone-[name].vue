<script setup lang="ts">
const cart = useCart();
const route = useRoute();

const paramName = route.params.name;

const name = computed(() => {
  if (typeof paramName === 'string') {
    return paramName.replaceAll('-', ' ');
  }
  if (Array.isArray(paramName)) {
    return paramName.map((name) => name.replaceAll('-', ' '));
  }
  return '';
});

const fullName = computed(() => {
  return `Iphone-${paramName}`;
});

const isInCart = computed(() => {
  // === = find
  // !== = every
  return !!cart.value.find((item) => item.name === fullName.value);
});

const addToCart = () => {
  if (!isInCart.value) {
    cart.value.push({
      name: fullName.value,
    });
  } else {
    cart.value = cart.value.filter((item) => item.name !== fullName.value);
  }
};
</script>

<template>
  <div>
    <Head>
      <Title>Nuxt 3 - Iphone {{ name }}</Title>
    </Head>
    <div class="flex justify-center w-full mt-20">
      <div class="grid grid-cols-2">
        <div>
          <img :src="`/images/iphone-${paramName}.webp`" alt="" />
        </div>
        <div class="text-center">
          <h1 class="text-3xl">Iphone {{ name }}</h1>
          <button class="p-3 bg-indigo-900 text-white rounded-md mt-5 w-48" @click="addToCart">
            <span v-if="isInCart"> remove from cart </span>
            <span v-else> Buy Now </span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
