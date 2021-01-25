<template>
  <base-layout pageTitle="Status">
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
      events: [
        {
          id: 1,
          bombaOnOff: 0,
          currentLevel: 3,
          contraSecoOnOff: 1,
          dateHourLevelCurrent: Date.now(),
        },
        {
          id: 2,
          bombaOnOff: 1,
          currentLevel: 3,
          contraSecoOnOff: 1,
          dateHourLevelCurrent: Date.now() - 5000,
        },
        {
          id: 3,
          bombaOnOff: 1,
          currentLevel: 2,
          contraSecoOnOff: 1,
          dateHourLevelCurrent: Date.now() - 6000,
        },
        {
          id: 4,
          bombaOnOff: 1,
          currentLevel: 1,
          contraSecoOnOff: 1,
          dateHourLevelCurrent: Date.now() - 7000,
        },
        {
          id: 5,
          bombaOnOff: 1,
          currentLevel: 0,
          contraSecoOnOff: 1,
          dateHourLevelCurrent: Date.now() - 150000,
        },
      ],
    };
  },
  created() {
    //simulando carregamento
    setTimeout(() => {
      this.progresso = false;
    }, 3000);
  },
};
</script>

<style scoped>
</style>