<template>
  <base-layout pageTitle="Status">
    <div class="fadeIn" v-if="!progresso">
      <!-- PUMP STATUS -->
      <pump-info :bombaNoMomento="bombaNoMomento"></pump-info>

      <!-- Level Tank -->
      <level-tank
        :nivelNoMomento="nivelNoMomento"
        :porcentagemReservatorio="porcentagemReservatorio"
        :litrosReservatorio="litrosReservatorio"
        :bombaNoMomento="bombaNoMomento"
      ></level-tank>

      <!-- not Dry -->
      <not-dry :contraSecoNoMomento="contraSecoNoMomento"></not-dry>

      <!-- Pump control -->
      <pump-control
        :bombaNoMomento="bombaNoMomento"
        :contraSecoNoMomento="contraSecoNoMomento"
        :nivelNoMomento="nivelNoMomento"
      ></pump-control>
    </div>

    <loading-page
      class="ion-padding fadeIn"
      v-else
      loadingMessage="Carregando"
    ></loading-page>
    <cicles-on-screen></cicles-on-screen>
  </base-layout>
</template>

<script>
import BaseLayout from "@/components/base/BaseLayout.vue";
import LoadingPage from "@/components/base/LoadingPage.vue";
import PumpInfo from "@/components/status/PumpInfo.vue";
import LevelTank from "@/components/status/LevelTank.vue";
import NotDry from "@/components/status/NotDry.vue";
import PumpControl from "@/components/status/PumpControl.vue";
import CiclesOnScreen from "@/components/base/CiclesOnScreen";

export default {
  name: "Status",
  components: {
    BaseLayout,
    LoadingPage,
    PumpInfo,
    LevelTank,
    NotDry,
    PumpControl,
    CiclesOnScreen,
  },
  data() {
    return {
      bombaNoMomento: 1,
      nivelNoMomento: 2,
      porcentagemReservatorio: 70,
      litrosReservatorio: 775,
      contraSecoNoMomento: 1,
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