<template>
  <ion-card
    class="ion-text-center elevation-2x custom-border-radius-card margin-top-2x"
  >
    <div class="ion-text-center">
      <h3>Controle da bomba d'agua</h3>
    </div>

    <ion-list v-if="nivelNoMomento == 3" class="ion-padding">
      <ion-card-header
        class="ion-text-center card-alert custom-border-radius-card"
      >
        <ion-card-title>
          <p>O reservatório está cheio, nenhuma ação é permitida</p>
        </ion-card-title>
      </ion-card-header>
    </ion-list>

    <ion-list v-if="contraSecoNoMomento == 0" class="ion-padding">
      <ion-card-header
        class="ion-text-center card-alert custom-border-radius-card"
      >
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
  </ion-card>
</template>

<script>
import {
  IonList,
  IonCardHeader,
  IonCardTitle,
  IonButton,
  IonCard,
} from "@ionic/vue";
export default {
  props: ["nivelNoMomento", "contraSecoNoMomento", "bombaNoMomento"],
  components: {
    IonList,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonButton,
  },
};
</script>

<style lang="scss" scoped>
</style>