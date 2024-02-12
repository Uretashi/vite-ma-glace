<script setup lang="ts">
import IceCreamShopList from "@/components/IceCreamShopList.vue";
import IceCreamMap from "@/components/IceCreamMap.vue";
import IceCreamShopData from "@/data/IceCreamShopData";
</script>

<template>
  <main class="main-container">
    <IceCreamShopList :stores="IceCreamShopData" class="ice-cream-store-list" />
    <IceCreamMap :stores="IceCreamShopData" class="ice-cream-map" />
  </main>
</template>