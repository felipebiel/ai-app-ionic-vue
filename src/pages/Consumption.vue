<template>
  <base-layout pageTitle="Consumo">
    <div class="fadeIn" v-show="!progresso" style="height: 82vh">
      <ion-list class="welcome-card">
        <ion-card-header>
          <ion-card-title>Consumo nos ultimos 30 dias</ion-card-title>
        </ion-card-header>
      </ion-list>
      <canvas ref="myChart" height="300" class="ion-padding"></canvas>
    </div>
    <loading-page
      class="ion-padding fadeIn"
      v-show="progresso"
      loadingMessage="Carregando"
    ></loading-page>

    <cicles-on-screen></cicles-on-screen>
  </base-layout>
</template>

<script>
import BaseLayout from "@/components/base/BaseLayout.vue";
import LoadingPage from "@/components/base/LoadingPage.vue";
import CiclesOnScreen from "@/components/base/CiclesOnScreen";
import Chart from "chart.js";

import { IonList, IonCardHeader, IonCardTitle } from "@ionic/vue";

export default {
  name: "Consumption",
  components: {
    BaseLayout,
    LoadingPage,
    IonList,
    IonCardHeader,
    IonCardTitle,
    CiclesOnScreen,
  },
  data() {
    return {
      progresso: true,
      days: [1, 2, 3, 4, 5, 6],
      litrosDays: [150, 400, 500, 450, 45, 650],
    };
  },
  created() {
    //simulando carregamento
    setTimeout(() => {
      this.generateChart(this.days, this.litrosDays);
      this.progresso = false;
    }, 3000);
  },
  methods: {
    generateChart(labelsData, datasetsData) {
      const ctx = this.$refs.myChart;
      new Chart(ctx, {
        type: "line",
        data: {
          labels: labelsData,
          datasets: [
            {
              label: "Litros por dia",
              data: datasetsData,
              backgroundColor: "rgba(23, 69, 128, 0.6)",
              borderColor: "rgb(23, 69, 128)",
              borderWidth: 1,
            },
          ],
        },
        options: {
          responsive: true,
          scales: {
            yAxes: [
              {
                ticks: {
                  beginAtZero: true,
                },
              },
            ],
          },
        },
      });
    },
  },
};
</script>

<style scoped>
</style>