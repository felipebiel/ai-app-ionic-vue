<template>
  <div v-for="evento in events" :key="evento.id">
    <events-item :evento="evento"></events-item>
  </div>

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

export default {
  props: ["events"],
  components: {
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