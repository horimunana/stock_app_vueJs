import { defineStore } from "pinia";

const useToogle = defineStore("toggle", {
  state: () => ({
    isOpen: false,
  }),
  actions: {
    close() {
      this.$state.isOpen = false;
      // this.isOpen = false;
    },
    open() {
      this.$state.isOpen = true;
    },
  },
});

export default useToogle;
