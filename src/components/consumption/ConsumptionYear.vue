<template>
  <ion-card class="elevation-2x margin-top-2x custom-border-radius-card">
    <ion-card-header>
      <ion-card-title>Consumo Anual</ion-card-title>
    </ion-card-header>
    <ion-card-content>
      <canvas ref="myChartMonth" height="300" class="ion-padding"></canvas>
    </ion-card-content>
  </ion-card>
</template>

<script>
import {
  IonCard,
  IonCardTitle,
  IonCardContent,
  IonCardHeader,
} from "@ionic/vue";
import Chart from "chart.js";

export default {
  name: "ConsumptionYear",
  components: {
    IonCardTitle,
    IonCardHeader,
    IonCardContent,
    IonCard,
  },
  data() {
    return {
      days: [
        "Jan",
        "Fev",
        "Mar",
        "Abr",
        "Mai",
        "Jun",
        "Jul",
        "Ago",
        "Set",
        "Out",
        "Nov",
        "Dec",
      ],
      litrosDays: [150, 400, 500, 450, 450, 650, 800, 650, 150, 400, 500, 450],
    };
  },
  created() {
    //simulando carregamento
    setTimeout(() => {
      this.generateChart(this.days, this.litrosDays);
    }, 3000);
  },
  methods: {
    generateChart(labelsData, datasetsData) {
      const ctx = this.$refs.myChartMonth;
      new Chart(ctx, {
        type: "line",
        data: {
          labels: labelsData,
          datasets: [
            {
              label: "Litros por mês",
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