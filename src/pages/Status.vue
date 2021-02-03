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

    <div class="cicle__top"></div>

    <div class="cicle__middle"></div>

    <div class="cicle__bottom"></div>
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
  name: "Status",
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
.cicle__top {
  height: 120px;
  position: fixed;
  top: -50px;
  right: -20px;
  width: 120px;
  border-radius: 100%;
  background: linear-gradient(
    228deg,
    rgba(2, 0, 36, 0.31556372549019607) 0%,
    rgba(9, 9, 121, 0.365983893557423) 35%,
    rgba(0, 212, 255, 0.44441526610644255) 100%
  );
  z-index: -2;
}

.cicle__middle {
  height: 300px;
  position: fixed;
  top: 100px;
  left: -170px;
  width: 300px;
  border-radius: 100%;
  background: linear-gradient(
    228deg,
    rgba(2, 0, 36, 0.31556372549019607) 0%,
    rgba(9, 9, 121, 0.365983893557423) 35%,
    rgba(0, 212, 255, 0.44441526610644255) 100%
  );
  z-index: -2;
}

.cicle__bottom {
  height: 300px;
  position: fixed;
  bottom: -150px;
  right: -170px;
  width: 300px;
  border-radius: 100%;
  background: linear-gradient(
    228deg,
    rgba(2, 0, 36, 0.31556372549019607) 0%,
    rgba(9, 9, 121, 0.365983893557423) 35%,
    rgba(0, 212, 255, 0.44441526610644255) 100%
  );
  z-index: -2;
}
</style>