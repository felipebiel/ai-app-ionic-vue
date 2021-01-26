<template>
  <base-layout pageTitle="Eventos">
    <div class="fadeIn" v-if="!progresso">
      <events-list-item :events="events"></events-list-item>
    </div>
    <loading-page
      class="ion-padding fadeIn"
      v-else
      loadingMessage="Carregando"
    ></loading-page>
  </base-layout>
</template>

<script>
import BaseLayout from "@/components/base/BaseLayout.vue";
import LoadingPage from "@/components/base/LoadingPage.vue";
import EventsListItem from "@/components/events/EventsListItem.vue";

export default {
  name: "Events",
  components: {
    BaseLayout,
    LoadingPage,
    EventsListItem,
  },
  data() {
    return {
      progresso: true,
    };
  },
  created() {
    //simulando carregamento
    setTimeout(() => {
      this.$store.dispatch("loadEvents").then(() => {
        this.progresso = false;
      });
    }, 3000);
  },
  computed: {
    events() {
      return this.$store.state.event.events;
    },
  },
};
</script>

<style scoped>
</style>