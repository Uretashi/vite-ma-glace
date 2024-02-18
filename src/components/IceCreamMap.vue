<script setup lang="ts">
import { ref, watch } from "vue";
import "leaflet/dist/leaflet.css";
import { LIcon, LMap, LMarker, LTileLayer } from "@vue-leaflet/vue-leaflet";
import { useShopsStore } from "@/stores/shops";
// need to import the marker as "@/assets/..." not working in icon-url=""
import iceCreamMarker from "@/assets/ice-cream-marker.png";

const defaultCenter = ref([46.453, 2.219]);
const defaultZoom = ref(6);
const shopsStore = useShopsStore();

watch(
  () => shopsStore.selectedShop,
  () => {
    if (!shopsStore.selectedShop) return;
    defaultCenter.value = shopsStore.selectedShop.coordinates;
  }
);
</script>

<template>
  <div class="ice-cream-map">
    <l-map
      ref="map"
      v-model:zoom="defaultZoom"
      :min-zoom="6"
      :max-zoom="16"
      v-model:center="defaultCenter"
      :useGlobalLeaflet="false"
      :max-bounds="[
        [50.241308, -6.141318],
        [41.191433, 10.343899],
      ]"
    >
      <l-tile-layer
        url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
        layer-type="base"
        name="Ice cream map"
      />
      <l-marker
        v-for="shop in shopsStore.shops"
        :key="shop.id"
        :lat-lng="shop.coordinates"
      >
        <l-icon
          :icon-url="iceCreamMarker"
          :icon-size="shopsStore.selectedId === shop.id ? [50, 50] : [30, 30]"
        ></l-icon>
      </l-marker>
    </l-map>
  </div>
</template>
