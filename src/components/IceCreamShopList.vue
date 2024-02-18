<script setup lang="ts">
import IceCreamShopItem from "@/components/IceCreamShopItem.vue";
import { useShopsStore } from "@/stores/shops";

const shopsStore = useShopsStore();
</script>

<template>
  <div>
    <IceCreamShopItem
      v-for="shop in shopsStore.shops"
      @click="shopsStore.setSelected(shop.id)"
      :shop="shop"
      :key="shop.id"
    />
  </div>
</template>
