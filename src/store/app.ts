// Utilities
import { defineStore } from "pinia";
import { itemInfo } from "@/TypesAndData/Data";

export const useAppStore = defineStore("app", {
  state: () => ({
    cartItem: null as itemInfo | null,
  }),
  getters: {
    getCartItem(state) {
      return state.cartItem;
    },
  },
  actions: {
    setCartItem(Item: itemInfo) {
      this.cartItem = Item;
    },
  },
});
