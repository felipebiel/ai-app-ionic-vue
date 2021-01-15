<template>
  <ion-content>
    <ion-grid>
      <ion-row
        style="height: 98vh"
        class="ion-align-items-center ion-justify-content-center"
      >
        <ion-col size="12">
          <slot></slot>
        </ion-col>
      </ion-row>
    </ion-grid>
  </ion-content>
</template>

<script>
import { IonContent, IonGrid, IonRow, IonCol } from "@ionic/vue";
export default {
  components: {
    IonContent,
    IonGrid,
    IonRow,
    IonCol,
  },
};
</script>

<style lang="css" scoped>
</style>