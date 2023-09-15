// Utilities
import { defineStore } from "pinia";
import { itemInfo } from "@/TypesAndData/Data";

export const useAppStore = defineStore("app", {
  state: () => ({
    cartItem: null as itemInfo | null,
    quantity: 0,
  }),
  getters: {
    getCartItem(state) {
      return state.cartItem;
    },
    getQuatity(state) {
      return state.quantity;
    },
  },
  actions: {
    setCartItem(Item: itemInfo) {
      this.cartItem = Item;
    },
    setQuatity(quan: number) {
      this.quantity = quan;
    },
    resetCartItem() {
      this.cartItem = <itemInfo>{
        itemName: null,
        itemQuantity: null,
        itemPrice: null,
        img: null,
      };
    },
  },
});
