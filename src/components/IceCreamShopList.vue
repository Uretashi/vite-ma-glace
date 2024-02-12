<script setup lang="ts">
import IceCreamShopItem from "@/components/IceCreamShopItem.vue";
import type IceCreamShop from "@/models/IceCreamShop";
import clickedStoreId from "@/stores/clickedStoreId";

const useIceCreamStoreId = clickedStoreId()
defineProps<{ stores: IceCreamShop[] }>()
</script>

<template>
  <div>
    <IceCreamShopItem v-for="store in stores" @click="useIceCreamStoreId.changeId(store.id)" :store="store" :key="store.name" />
  </div>
</template>