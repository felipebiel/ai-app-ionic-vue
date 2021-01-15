<template>
  <vertical-align>
    <ion-row class="ion-padding">
      <ion-col size="12" class="ion-text-center">
        <img src="../../assets/images/login/logo_nova.png" width="250" />
      </ion-col>
      <ion-col size="12" class="">
        <ion-item class="ion-margin-top">
          <ion-icon :icon="person" class="position-absolute"></ion-icon>
          <ion-input placeholder="Usuário" class="ion-text-center"></ion-input>
        </ion-item>
      </ion-col>
      <ion-col size="12">
        <ion-item class="ion-margin-top">
          <ion-icon :icon="lockClosed" class="position-absolute"></ion-icon>
          <ion-input placeholder="Senha" class="ion-text-center"></ion-input>
        </ion-item>
      </ion-col>
      <ion-col size="12" class="ion-text-center">
        <ion-button expand="block" color="secondary" class="ion-margin-top"
          >Login</ion-button
        >
      </ion-col>
    </ion-row>
  </vertical-align>
</template>

<script>
import {
  IonRow,
  IonCol,
  IonInput,
  IonButton,
  IonItem,
  IonIcon,
} from "@ionic/vue";

import VerticalAlign from "@/components/base/VerticalAlign";
import { person, lockClosed } from "ionicons/icons";

export default {
  components: {
    IonRow,
    IonCol,
    IonInput,
    IonButton,
    IonItem,
    IonIcon,
    VerticalAlign,
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
ion-content {
  --background: var(--ion-color-primary);
}

ion-input {
  --color: white;
}

ion-icon {
  color: white;
}

ion-item {
  --border-color: white;
  --highlight-color-valid: white;
  --highlight-color-invalid: red;
  --highlight-color-focused: white;
  --background: transparent;
}

/* COLOCAR NO CSS GERAL */

.position-absolute {
  position: absolute;
}
</style>