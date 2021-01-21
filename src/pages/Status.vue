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
      <div class="ion-text-center">
        <h3>Controle da bomba d'agua</h3>
      </div>

      <ion-list v-if="nivelNoMomento == 3" class="ion-padding">
        <ion-card-header class="ion-text-center card-alert">
          <ion-card-title>
            <p>O reservatório está cheio, nenhuma ação é permitida</p>
          </ion-card-title>
        </ion-card-header>
      </ion-list>

      <ion-list v-if="contraSecoNoMomento == 0" class="ion-padding">
        <ion-card-header class="ion-text-center card-alert">
          <ion-card-title>
            <p>Não tem água, nenhuma ação é permitida</p>
          </ion-card-title>
        </ion-card-header>
      </ion-list>

      <ion-list
        v-if="bombaNoMomento == 1 && contraSecoNoMomento == 1"
        class="ion-padding"
      >
        <ion-button color="warning" expand="block">Desligar</ion-button>
      </ion-list>

      <ion-list
        v-if="
          bombaNoMomento == 0 && nivelNoMomento < 3 && contraSecoNoMomento == 1
        "
        class="ion-padding"
      >
        <ion-button color="warning" expand="block">Ligar</ion-button>
      </ion-list>
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
import {
  IonCardHeader,
  IonCardTitle,
  IonList,
  IonButton,
  IonProgressBar,
} from "@ionic/vue";

export default {
  name: "Home",
  components: {
    BaseLayout,
    IonCardHeader,
    IonCardTitle,
    IonList,
    IonButton,
    IonProgressBar,
    PumpInfo,
    LevelTank,
    NotDry,
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