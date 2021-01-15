<template>
  <vertical-align>
    <ion-row class="ion-padding">
      <ion-col size="12" class="ion-text-center">
        <img src="../../assets/images/login/logo_nova.png" width="250" />
      </ion-col>
      <login-form @sendFormLogin="submitForm" :loading="loading"></login-form>
    </ion-row>
  </vertical-align>
</template>

<script>
import { IonRow, IonCol } from "@ionic/vue";

import VerticalAlign from "@/components/base/VerticalAlign";
import LoginForm from "@/components/login/LoginForm";

export default {
  components: {
    IonRow,
    IonCol,
    VerticalAlign,
    LoginForm,
  },
  data() {
    return {
      loading: false,
    };
  },
  methods: {
    submitForm() {
      this.loading = true;
      setTimeout(() => {
        this.loading = false;
      }, 2000);
    },
  },
};
</script>

<style lang="css" scoped>
ion-content {
  --background: var(--ion-color-primary);
}
</style>