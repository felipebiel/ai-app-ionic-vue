<template>
  <base-layout pageTitle="Status">
    <div class="ion-text-center">
      <h3>Bomba</h3>
    </div>

    <ion-card>
      <ion-card-header
        class="ion-padding"
        :class="[
          bombaNoMomento == 1
            ? 'ion-text-center card-success'
            : 'ion-text-center card-alert',
        ]"
      >
        <ion-card-title>
          <span v-if="bombaNoMomento == 1"> Ligada</span>
          <span v-if="bombaNoMomento == 0"> Desligada</span>
        </ion-card-title>
      </ion-card-header>
    </ion-card>
  </base-layout>
</template>

<script>
import BaseLayout from "@/components/base/BaseLayout.vue";
import { IonCard, IonCardHeader, IonCardTitle } from "@ionic/vue";

export default {
  name: "Home",
  components: {
    BaseLayout,
    IonCard,
    IonCardHeader,
    IonCardTitle,
  },
  data() {
    return {
      bombaNoMomento: 1,
    };
  },
};
</script>

<style scoped>
/* Especifc */
/*LABEL DE CONSUMO */

.card-success {
  border-left: 5px solid #c3e6cb;
  background-color: #c3e6cb;
}

.card-success ion-card-title {
  color: #155724;
}

.card-alert {
  border-left: 5px solid #ffeeba;
  background-color: #ffeeba;
}

.card-alert ion-card-title {
  color: #856404;
}
</style>