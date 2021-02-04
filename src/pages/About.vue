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
      <p><b>Versão:</b> beta 3.0.0</p>
    </div>

    <cicles-on-screen></cicles-on-screen>
  </base-layout>
</template>

<script>

import BaseLayout from "@/components/base/BaseLayout.vue";
import CiclesOnScreen from "@/components/base/CiclesOnScreen";

export default {
  name: "About",
  components: {
    BaseLayout,
    CiclesOnScreen,
  },
};
</script>

<style scoped>
</style>