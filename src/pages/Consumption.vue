<template>
  <base-layout pageTitle="Consumo">
    <div class="fadeIn" v-show="!progresso">
      <consumption-week></consumption-week>
      <consumption-month></consumption-month>
      <consumption-year></consumption-year>
    </div>
    <loading-page
      class="ion-padding fadeIn"
      v-show="progresso"
      loadingMessage="Carregando"
    ></loading-page>

    <cicles-on-screen></cicles-on-screen>
  </base-layout>
</template>

<script>
import BaseLayout from "@/components/base/BaseLayout.vue";
import LoadingPage from "@/components/base/LoadingPage.vue";
import CiclesOnScreen from "@/components/base/CiclesOnScreen";
import ConsumptionMonth from "@/components/consumption/ConsumptionMonth";
import ConsumptionWeek from "@/components/consumption/ConsumptionWeek";
import ConsumptionYear from "@/components/consumption/ConsumptionYear";

export default {
  name: "Consumption",
  components: {
    BaseLayout,
    LoadingPage,
    CiclesOnScreen,
    ConsumptionMonth,
    ConsumptionWeek,
    ConsumptionYear,
  },
  data() {
    return {
      progresso: true,
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