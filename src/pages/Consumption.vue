<template>
  <base-layout pageTitle="Consumo">
    <div class="fadeIn" v-show="!progresso">
      <consuption-month></consuption-month>

      <consuption-week></consuption-week>

      <consuption-year></consuption-year>
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
import ConsuptionMonth from "@/components/consuption/ConsuptionMonth";
import ConsuptionWeek from "@/components/consuption/ConsuptionWeek";
import ConsuptionYear from "@/components/consuption/ConsuptionYear";

export default {
  name: "Consumption",
  components: {
    BaseLayout,
    LoadingPage,
    CiclesOnScreen,
    ConsuptionMonth,
    ConsuptionWeek,
    ConsuptionYear,
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