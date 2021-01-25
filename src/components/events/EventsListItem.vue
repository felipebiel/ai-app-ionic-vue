<template>
  <ion-card v-for="evento in events" :key="evento.id">
    <events-item :evento="evento"></events-item>
  </ion-card>
</template>

<script>
import EventsItem from "./EventsItem";
import { IonCard } from "@ionic/vue";
export default {
  props: ["events"],
  components: {
    IonCard,
    EventsItem,
  },
};
</script>

<style lang="scss" scoped>
</style>