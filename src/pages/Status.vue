<template>
  <base-layout pageTitle="Status">
    <!-- PUMP STATUS -->
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

    <!-- Level Tank -->

    <div class="ion-text-center">
      <h3>Nível</h3>
    </div>
    <div class="ion-text-center ion-margin">
      <img :src="getTankUrl(nivelNoMomento)" width="250" />
    </div>

    <div class="ion-text-center">
      <h2 class="porcentagem_reservatorio">{{ porcentagemReservatorio }}%</h2>
      <h4>Aproximadamente {{ litrosReservatorio }} Litros</h4>
    </div>

    <div class="ion-text-center">
      <h3>Contra Seco</h3>
    </div>

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
      nivelNoMomento: 0,
      porcentagemReservatorio: 30,
      litrosReservatorio: 775,
      contraSecoNoMomento: 1,
    };
  },
  methods: {
    getTankUrl(level) {
      const images = require.context(
        "../../assets/images/status/",
        false,
        /\.png$/
      );
      return images("./status_" + level + ".png");
    },
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

.porcentagem_reservatorio {
  font-size: 30pt;
  font-weight: bold;
}
</style>