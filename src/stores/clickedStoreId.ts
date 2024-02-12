import { defineStore } from 'pinia'

/**
 * store to share the clicked ice-cream store id
 */
const clickedStoreId = defineStore('store-id', {
  state: () => ({ id: null }),
  actions: {
    changeId(id: number) {
      this.id = id
    },
  },
})

export default clickedStoreId;