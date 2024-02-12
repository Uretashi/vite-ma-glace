<script setup lang="ts">
import type IceCreamShop from "@/models/IceCreamShop";

defineProps<{store: IceCreamShop;}>();
</script>

<template>
  <div class="ice-cream-store-div">
    <img alt="ice cream store" src="@/assets/ice-cream-shop.png">
    <div>
      <p>Nom du glacier : {{ store.name }}</p>
      <p>Adresse : {{ store.address }}</p>
      <p>Click here to see the magic...</p>
    </div>
  </div>
</template>

<style scoped>

</style>