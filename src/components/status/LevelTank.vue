<template>
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
</template>

<script>
export default {
  props: ["nivelNoMomento", "porcentagemReservatorio", "litrosReservatorio"],
  methods: {
    getTankUrl(level) {
      const images = require.context(
        "../../../assets/images/status/",
        false,
        /\.png$/
      );
      return images("./status_" + level + ".png");
    },
  },
};
</script>

<style lang="css" scoped>
/* Especifc */

.porcentagem_reservatorio {
  font-size: 30pt;
  font-weight: bold;
}
</style>