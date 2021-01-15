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
    <div class="ion-margin-top" v-if="true">
      <div margin class="white ion-text-center">Carregando</div>
      <ion-progress-bar
        class="ion-margin-top"
        type="indeterminate"
        color="secondary"
      ></ion-progress-bar>
    </div>
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
  IonProgressBar,
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
    IonProgressBar,
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
.white {
  color: var(--ion-color-primary-contrast);
}

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