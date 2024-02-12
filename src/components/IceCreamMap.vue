<script setup lang="ts">
import "leaflet/dist/leaflet.css"
import { LIcon, LMap, LMarker, LTileLayer } from "@vue-leaflet/vue-leaflet"
import type IceCreamShop from "@/models/IceCreamShop";
import clickedStoreId from "@/stores/clickedStoreId";
// need to import the marker as "@/assets/..." not working in icon-url=""
import iceCreamMarker from "@/assets/ice-cream-marker.png"

const defaultCenter = [46.453, 2.219]
const defaultZoom = 6
const clickedStoreIdStore = clickedStoreId()

defineProps<{ stores: IceCreamShop[] }>()
</script>

<template>
  <div>
    <l-map ref="map" v-model:zoom="defaultZoom" v-model:center="defaultCenter" :useGlobalLeaflet="false">
      <l-tile-layer url="https://tile.openstreetmap.org/{z}/{x}/{y}.png" layer-type="base" name="Ice cream map" />
      <l-marker v-for="store in stores" :key="store.id" :lat-lng="store.coordinates" >
        <l-icon :icon-url="iceCreamMarker" :icon-size="clickedStoreIdStore.id == store.id ? [50, 50] : [30, 30]"></l-icon>
      </l-marker>
    </l-map>
  </div>
</template>

<style scoped>

</style>