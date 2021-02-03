<template>
  <ion-card
    class="ion-text-center elevation-2x custom-border-radius-card margin-top-2x"
    :class="[
      contraSecoNoMomento == 1
        ? 'ion-text-center card-success'
        : 'ion-text-center card-alert',
    ]"
  >
    <ion-card-header class="ion-text-center">
      <h3>Contra Seco</h3>
    </ion-card-header>

    <ion-card-title class="ion-padding-bottom">
      <span v-if="contraSecoNoMomento == 1"> Tem água</span>
      <span v-if="contraSecoNoMomento == 0"> Sem água</span>
    </ion-card-title>
  </ion-card>
</template>

<script>
import { IonCard, IonCardHeader, IonCardTitle } from "@ionic/vue";

export default {
  props: ["contraSecoNoMomento"],
  components: {
    IonCard,
    IonCardHeader,
    IonCardTitle,
  },
};
</script>

<style lang="css" scoped>
</style>