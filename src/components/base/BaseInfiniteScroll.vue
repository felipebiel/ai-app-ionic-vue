<template>
  <ion-infinite-scroll
    @ionInfinite="loadData($event)"
    threshold="100px"
    id="infinite-scroll"
    :disabled="disabled"
  >
    <ion-infinite-scroll-content
      :loading-spinner="spinner"
      :loading-text="text"
    >
    </ion-infinite-scroll-content>
  </ion-infinite-scroll>
</template>

<script>
import { IonInfiniteScroll, IonInfiniteScrollContent } from "@ionic/vue";
export default {
  emits: ["loadData"],
  props: ["spinner", "text", "disabled"],
  components: {
    IonInfiniteScroll,
    IonInfiniteScrollContent,
  },
  methods: {
    loadData(e) {
      this.$emit("loadData", e);
    },
  },
};
</script>

<style scoped>
</style>