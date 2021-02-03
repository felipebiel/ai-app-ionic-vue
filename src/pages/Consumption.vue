<template>
  <base-layout pageTitle="Consumo">
    <div class="fadeIn" v-show="!progresso" style="height: 82vh">
      <consuption-month></consuption-month>
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

export default {
  name: "Consumption",
  components: {
    BaseLayout,
    LoadingPage,
    CiclesOnScreen,
    ConsuptionMonth,
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