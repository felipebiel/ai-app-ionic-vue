<template>
  <ion-menu side="end" contentId="main-content">
    <ion-header>
      <ion-toolbar translucent>
        <ion-title>Menu</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <ion-list>
        <ion-item>
          <ion-icon :icon="informationCircle" slot="start"></ion-icon>
          <ion-label>Status</ion-label>
        </ion-item>
        <ion-item>
          <ion-icon :icon="calendar" slot="start"></ion-icon>
          <ion-label>Eventos</ion-label>
        </ion-item>
        <ion-item>
          <ion-icon :icon="analytics" slot="start"></ion-icon>
          <ion-label>Consumo</ion-label>
        </ion-item>
        <ion-item>
          <ion-icon :icon="settings" slot="start"></ion-icon>
          <ion-label>Configurações</ion-label>
        </ion-item>
        <ion-item>
          <ion-icon :icon="person" slot="start"></ion-icon>
          <ion-label>Meus Dados</ion-label>
        </ion-item>
        <ion-item>
          <ion-icon :icon="chatbubble" slot="start"></ion-icon>
          <ion-label>Sobre</ion-label>
        </ion-item>
        <ion-item>
          <ion-icon :icon="logOut" slot="start"></ion-icon>
          <ion-label>Sair</ion-label>
        </ion-item>
      </ion-list>
    </ion-content>
  </ion-menu>
</template>

<script>
import {
  IonMenu,
  IonList,
  IonItem,
  IonIcon,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonLabel,
  IonContent,
} from "@ionic/vue";
import {
  informationCircle,
  calendar,
  analytics,
  person,
  chatbubble,
  logOut,
  settings,
} from "ionicons/icons";
export default {
  components: {
    IonMenu,
    IonList,
    IonItem,
    IonIcon,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonLabel,
    IonContent,
  },
  data() {
    return {
      informationCircle,
      calendar,
      analytics,
      person,
      chatbubble,
      logOut,
      settings,
    };
  },
};
</script>

<style lang="scss" scoped>
</style>