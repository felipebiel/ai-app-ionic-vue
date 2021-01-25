<template>
  <ion-page>
    <ion-tabs>
      <ion-tab-bar slot="bottom">
        <ion-tab-button tab="status" href="/tabs/status">
          <ion-icon :icon="informationCircle"></ion-icon>
          <ion-label>Status</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="events" href="/tabs/events">
          <ion-icon :icon="calendar"></ion-icon>
          <ion-label>Eventos</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="speakers" href="/tabs/speakers">
          <ion-icon :icon="analytics"></ion-icon>
          <ion-label>Consumo</ion-label>
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>

<script>
import {
  IonTabs,
  IonTabBar,
  IonTabButton,
  IonIcon,
  IonLabel,
  IonPage,
} from "@ionic/vue";

import { calendar, informationCircle, analytics } from "ionicons/icons";
export default {
  components: {
    IonTabs,
    IonTabBar,
    IonTabButton,
    IonIcon,
    IonLabel,
    IonPage,
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