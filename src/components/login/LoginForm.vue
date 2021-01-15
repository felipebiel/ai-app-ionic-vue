<template>
  <ion-col size="12" class="">
    <ion-item class="ion-margin-top">
      <ion-icon :icon="person" class="position-absolute"></ion-icon>
      <ion-input placeholder="Usuário" class="ion-text-center"></ion-input>
    </ion-item>
    <ion-text color="danger" v-if="true">
      <p class="ion-no-margin ion-margin-top ion-text-center">
        Esse campo é obrigatório
      </p>
    </ion-text>
  </ion-col>
  <ion-col size="12">
    <ion-item class="ion-margin-top">
      <ion-icon :icon="lockClosed" class="position-absolute"></ion-icon>
      <ion-input placeholder="Senha" class="ion-text-center"></ion-input>
    </ion-item>
    <ion-text color="danger" v-if="true">
      <p class="ion-no-margin ion-margin-top ion-text-center">
        Esse campo é obrigatório
      </p>
    </ion-text>
  </ion-col>
  <ion-col size="12" class="ion-text-center">
    <ion-button expand="block" color="secondary" class="ion-margin-top"
      >Login</ion-button
    >
  </ion-col>
</template>

<script>
import {
  IonCol,
  IonInput,
  IonButton,
  IonItem,
  IonIcon,
  IonText,
} from "@ionic/vue";
import { person, lockClosed } from "ionicons/icons";
export default {
  components: {
    IonCol,
    IonInput,
    IonButton,
    IonItem,
    IonIcon,
    IonText,
  },
  data() {
    return {
      person,
      lockClosed,
    };
  },
};
</script>

<style lang="css" scoped>
ion-input {
  --color: var(--ion-color-primary-contrast);
}
ion-icon {
  color: var(--ion-color-primary-contrast);
}
ion-item {
  --border-color: var(--ion-color-primary-contrast);
  --highlight-color-valid: var(--ion-color-primary-contrast);
  --highlight-color-invalid: var(--ion-color-danger);
  --highlight-color-focused: var(--ion-color-primary-contrast);
  --background: transparent;
}
</style>