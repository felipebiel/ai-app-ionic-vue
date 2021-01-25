<template>
  <ion-card v-for="evento in events" :key="evento.id">
    <events-item :evento="evento"></events-item>
  </ion-card>
  <ion-infinite-scroll
    @ionInfinite="loadData()"
    threshold="100px"
    id="infinite-scroll"
    :disabled="isDisabled"
  >
    <ion-infinite-scroll-content
      loading-spinner="circular"
      loading-text="Carregando mais eventos..."
    >
    </ion-infinite-scroll-content>
  </ion-infinite-scroll>
</template>

<script>
import EventsItem from "./EventsItem";
import {
  IonCard,
  IonInfiniteScroll,
  IonInfiniteScrollContent,
} from "@ionic/vue";
export default {
  props: ["events"],
  components: {
    IonCard,
    EventsItem,
    IonInfiniteScroll,
    IonInfiniteScrollContent,
  },
  data() {
    return {
      isDisabled: false,
    };
  },
  methods: {
    loadData() {
      console.log("HERE");
      this.$store.dispatch("loadMoreEvens").then(() => {
        this.isDisabled = !this.isDisabled;
        setTimeout(() => {
          this.isDisabled = !this.isDisabled;
        }, 1000);
      });
    },
  },
};
</script>

<style lang="scss" scoped>
</style>