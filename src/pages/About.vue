<template>
  <base-layout pageTitle="Sobre" pageDefaultBackLink="/tabs">
    <div class="fadeIn ion-padding">
      <p>
        O Abastecimento Inteligente, foi projetado, idealizado e desenvolvido
        por Anderson Ferreira Canel e Felipe Biel de Souza Silva, estudantes do
        curso da Ciência da Computação do Centro Universitário Augusto Motta
        (UNISUAM).
      </p>
      <p>
        O sistema foi projetado para solucionar o problema da automação do
        acionamento dos equipamentos de bombeamento de água, o fornecimento de
        estimativas de consumo, a possibilidade de alarmar problemas, e educação
        quanto ao consumo, com foco no baixo custo de aquisição.
      </p>

      <p><b>Informações do Aplicativo: </b></p>
      <p><b>Versão:</b> beta 2.5.0</p>
    </div>
  </base-layout>
</template>

<script>
import BaseLayout from "@/components/base/BaseLayout.vue";

export default {
  name: "Events",
  components: {
    BaseLayout,
  },
};
</script>

<style scoped>
</style>