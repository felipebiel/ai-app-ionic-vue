<template>
  <ion-card
    class="ion-text-center elevation-2x custom-border-radius-card"
    :class="[
      bombaNoMomento == 1
        ? 'ion-text-center card-success'
        : 'ion-text-center card-alert',
    ]"
  >
    <ion-card-header class="ion-text-center">
      <h3>Bomba</h3>
    </ion-card-header>

    <ion-card-title class="ion-padding-bottom">
      <span v-if="bombaNoMomento == 1"> Ligada</span>
      <span v-if="bombaNoMomento == 0"> Desligada</span>
    </ion-card-title>
  </ion-card>
</template>

<script>
import { IonCard, IonCardTitle, IonCardHeader } from "@ionic/vue";
export default {
  props: ["bombaNoMomento"],
  components: {
    IonCard,
    IonCardTitle,
    IonCardHeader,
  },
};
</script>

<style lang="css" scoped>
</style>