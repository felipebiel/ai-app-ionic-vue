<template>
  <div class="ion-text-center">
    <h3>Nível</h3>
  </div>
  <div class="ion-text-center ion-margin">
    <div class="box">
      <div class="box__levels">
        <div class="box__levels--title">
          <span class="box__levels--full">Cheio</span>
        </div>
        <div class="box__levels--title">
          <span class="box__levels--medium">Médio</span>
        </div>
        <div class="box__levels--title">
          <span class="box__levels--low">Baixo</span>
        </div>
        <div class="box__levels--title">
          <span class="box__levels--empty">Vazio</span>
        </div>
      </div>

      <div :class="['ocean ocean__' + nivelNoMomento]">
        <div class="wave" v-show="bombaNoMomento === 1"></div>
      </div>
    </div>
  </div>

  <div class="ion-text-center">
    <h2 class="porcentagem_reservatorio">{{ porcentagemReservatorio }}%</h2>
    <h4>Aproximadamente {{ litrosReservatorio }} Litros</h4>
  </div>
</template>

<script>
export default {
  props: [
    "nivelNoMomento",
    "porcentagemReservatorio",
    "litrosReservatorio",
    "bombaNoMomento",
  ],
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

.box {
  width: 100%;
  height: 400px;
  position: relative;
  overflow: hidden;
  border: 5px solid black;
  margin: 0 auto;
  display: flex;
  border-radius: 8px;
}

.box__levels {
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  z-index: 1;
}

.box__levels--title {
  font-size: 2rem;
  width: 100%;
  padding: 30px;
}

.box__levels--full {
  color: #14950e;
  font-weight: bold;
}

.box__levels--full::before {
  content: "";
  width: 30px;
  height: 30px;
  background-color: #14950e;
  position: absolute;
  left: 25px;
  border-radius: 100%;
}

.box__levels--medium {
  color: #b88814;
  font-weight: bold;
}

.box__levels--medium::before {
  content: "";
  width: 30px;
  height: 30px;
  background-color: #b88814;
  position: absolute;
  left: 25px;
  border-radius: 100%;
}

.box__levels--low {
  color: #829e23;
  font-weight: bold;
}

.box__levels--low::before {
  content: "";
  width: 30px;
  height: 30px;
  background-color: #829e23;
  position: absolute;
  left: 25px;
  border-radius: 100%;
}

.box__levels--empty {
  color: #871111;
  font-weight: bold;
}

.box__levels--empty::before {
  content: "";
  width: 30px;
  height: 30px;
  background-color: #871111;
  position: absolute;
  left: 25px;
  border-radius: 100%;
}

.ocean {
  position: absolute;
  bottom: 0;
  z-index: -1;
  width: 100%;
  background-color: #182f4a;
}

.ocean__0 {
  height: 20%;
}

.ocean__1 {
  height: 45%;
}

.ocean__2 {
  height: 70%;
}

.ocean__3 {
  height: 100%;
}

.wave {
  height: 30px;
  position: absolute;
  width: 100%;
  z-index: 12;
  left: 0;
  bottom: 100%;
}

.wave {
  -webkit-animation: wave-animation1 6.3s infinite linear;
  /* Safari 4+ */
  -moz-animation: wave-animation1 6.3s infinite linear;
  /* Fx 5+ */
  -o-animation: wave-animation1 6.3s infinite linear;
  /* Opera 12+ */
  animation: wave-animation1 6.3s infinite linear;
  /* IE 10+ */
}

@-webkit-keyframes wave-animation1 {
  0% {
    background-position: 0 0;
  }

  100% {
    background-position: 1601px 0;
  }
}

@-moz-keyframes wave-animation1 {
  0% {
    background-position: 0 0;
  }

  100% {
    background-position: 1601px 0;
  }
}

@-o-keyframes wave-animation1 {
  0% {
    background-position: 0 0;
  }

  100% {
    background-position: 1601px 0;
  }
}

@keyframes wave-animation1 {
  0% {
    background-position: 0 0;
  }

  100% {
    background-position: 1601px 0;
  }
}

.wave {
  background: url("http://www.templates-preview.com/bootstrap-templates/300111854/images/wave2.png")
    0 0 repeat-x;
}
</style>