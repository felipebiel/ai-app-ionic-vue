<template>
  <ion-card-header class="card-info">
    <ion-card-title>
      <ion-icon :icon="alertCircleOutline"></ion-icon> Informativo
    </ion-card-title>
    <p>
      <b> <ion-icon name="list-box"></ion-icon> Nível: </b>
      <span :class="['text-nivel' + evento.currentLevel]">{{
        $utils.tratarNivel(evento.currentLevel)
      }}</span>
    </p>
    <p>
      <b>
        <ion-icon name="speedometer"></ion-icon>
        Bomba:
      </b>
      <span
        :class="[evento.bombaOnOff == 1 ? 'text-success' : 'text-danger']"
        >{{ evento.bombaOnOff == 1 ? "Ligada" : "Desligada" }}</span
      >
    </p>
    <p>
      <b> <ion-icon name="water"></ion-icon> Contra-Seco: </b>
      <span
        :class="[evento.contraSecoOnOff == 1 ? 'text-success' : 'text-danger']"
        >{{ evento.contraSecoOnOff == 1 ? "Tem água" : "Não tem água" }}</span
      >
    </p>
    <ion-card-subtitle end>
      <small
        ><ion-icon :icon="timeOutline"></ion-icon>
        {{ $utils.dateAgo(evento.dateHourLevelCurrent) }}</small
      >
    </ion-card-subtitle>
  </ion-card-header>
</template>

<script>
import {
  IonCardHeader,
  IonCardTitle,
  IonIcon,
  IonCardSubtitle,
} from "@ionic/vue";

import { alertCircleOutline, timeOutline } from "ionicons/icons";

export default {
  name: "EventsItem",
  props: ["evento"],
  components: {
    IonCardHeader,
    IonCardTitle,
    IonIcon,
    IonCardSubtitle,
  },
  data() {
    return {
      alertCircleOutline,
      timeOutline,
    };
  },
};
</script>

<style scoped>
/* Custom Skeleton Line Height and Margin */
.custom-skeleton ion-skeleton-text {
  line-height: 13px;
}

.custom-skeleton ion-skeleton-text:last-child {
  margin-bottom: 5px;
}

.text-nivel0 {
  color: #871111;
}
.text-nivel1 {
  color: #b88814;
}
.text-nivel2 {
  color: #829e23;
}
.text-nivel3 {
  color: #14950e;
}
</style>