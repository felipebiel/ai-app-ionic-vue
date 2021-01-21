<template>
  <base-layout pageTitle="Status">
    <div class="fadeIn" v-if="!progresso">
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

      <!-- not Dry -->
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
import {
  IonCard,
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
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonList,
    IonButton,
    IonProgressBar,
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