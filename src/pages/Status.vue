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
  </base-layout>
</template>

<script>
import BaseLayout from "@/components/base/BaseLayout.vue";
import LoadingPage from "@/components/base/LoadingPage.vue";
import PumpInfo from "@/components/status/PumpInfo.vue";
import LevelTank from "@/components/status/LevelTank.vue";
import NotDry from "@/components/status/NotDry.vue";
import PumpControl from "@/components/status/PumpControl.vue";

export default {
  name: "Home",
  components: {
    BaseLayout,
    LoadingPage,
    PumpInfo,
    LevelTank,
    NotDry,
    PumpControl,
  },
  data() {
    return {
      bombaNoMomento: 0,
      nivelNoMomento: 3,
      porcentagemReservatorio: 30,
      litrosReservatorio: 775,
      contraSecoNoMomento: 0,
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