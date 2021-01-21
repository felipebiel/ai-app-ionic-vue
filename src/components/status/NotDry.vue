<template>
  <ion-card>
    <ion-card-header
      class="ion-padding"
      :class="[
        contraSecoNoMomento == 1
          ? 'ion-text-center card-success'
          : 'ion-text-center card-alert',
      ]"
    >
      <ion-card-title>
        <span v-if="contraSecoNoMomento == 1"> Tem água</span>
        <span v-if="contraSecoNoMomento == 0"> Sem água</span>
      </ion-card-title>
    </ion-card-header>
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