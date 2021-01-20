<template>
  <ion-tabs>
    <ion-tab-bar slot="bottom">
      <ion-tab-button tab="schedule" href="/events">
        <ion-icon :icon="informationCircle"></ion-icon>
        <ion-label>Status</ion-label>
      </ion-tab-button>

      <ion-tab-button tab="speakers" href="/tabs/speakers">
        <ion-icon :icon="calendar"></ion-icon>
        <ion-label>Eventos</ion-label>
      </ion-tab-button>

      <ion-tab-button tab="speakers" href="/tabs/speakers">
        <ion-icon :icon="analytics"></ion-icon>
        <ion-label>Consumo</ion-label>
      </ion-tab-button>
    </ion-tab-bar>
  </ion-tabs>
</template>

<script>
import {
  IonTabs,
  IonTabBar,
  IonTabButton,
  IonIcon,
  IonLabel,
} from "@ionic/vue";

import { calendar, informationCircle, analytics } from "ionicons/icons";
export default {
  components: {
    IonTabs,
    IonTabBar,
    IonTabButton,
    IonIcon,
    IonLabel,
  },
  data() {
    return {
      informationCircle,
      calendar,
      analytics,
    };
  },
};
</script>

<style lang="css" scoped>
ion-tab-button {
  --color-selected: var(--ion-color-primary);
}

@media (prefers-color-scheme: dark) {
  ion-tab-button {
    --color-selected: var(--ion-color-secondary);
  }
}
</style>