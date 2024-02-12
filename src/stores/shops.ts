import { defineStore } from "pinia";

import { iceCreamShopData } from "@/data/IceCreamShopData";
import type { IceCreamShop } from "@/models/IceCreamShop";

/**
 * store to share the clicked ice-cream store id
 */
export const useShopsStore = defineStore("store-id", {
  state: () => ({
    shops: [...iceCreamShopData],
    selectedId: null as number | null,
  }),
  getters: {
    selectedShop(): IceCreamShop | null {
      return this.shops.find((shop) => shop.id === this.selectedId) ?? null;
    },
  },
  actions: {
    setSelected(id: number) {
      if (!this.shops.find((shop) => shop.id === id)) {
        return;
      }

      this.selectedId = id;
    },
  },
});
