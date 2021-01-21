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

      <div class="ion-text-center">
        <h3>Contra Seco</h3>
      </div>

      <!-- not Dry -->
      <not-dry :contraSecoNoMomento="contraSecoNoMomento"></not-dry>

      <!-- Pump control -->
      <pump-control
        :bombaNoMomento="bombaNoMomento"
        :contraSecoNoMomento="contraSecoNoMomento"
        :nivelNoMomento="nivelNoMomento"
      ></pump-control>
    </div>
    <div class="ion-padding fadeIn" v-else>
      <div class="ion-text-center ion-margin">Carregando</div>
      <ion-progress-bar type="indeterminate"></ion-progress-bar>
    </div>
  </base-layout>
</template>

<script>
import BaseLayout from "@/components/base/BaseLayout.vue";
import PumpInfo from "@/components/status/PumpInfo.vue";
import LevelTank from "@/components/status/LevelTank.vue";
import NotDry from "@/components/status/NotDry.vue";
import PumpControl from "@/components/status/PumpControl.vue";
import { IonProgressBar } from "@ionic/vue";

export default {
  name: "Home",
  components: {
    BaseLayout,
    IonProgressBar,
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