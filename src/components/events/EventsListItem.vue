<template>
  <ion-card v-for="evento in events" :key="evento.id">
    <events-item :evento="evento"></events-item>
  </ion-card>

  <base-infinite-scroll
    spinner="circular"
    text="Carregando eventos ..."
    :disabled="isDisabled"
    @loadData="loadData"
  ></base-infinite-scroll>
</template>

<script>
import EventsItem from "./EventsItem";
import BaseInfiniteScroll from "../base/BaseInfiniteScroll";

import { IonCard } from "@ionic/vue";

export default {
  props: ["events"],
  components: {
    IonCard,
    EventsItem,
    BaseInfiniteScroll,
  },
  data() {
    return {
      isDisabled: false,
    };
  },
  methods: {
    loadData() {
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