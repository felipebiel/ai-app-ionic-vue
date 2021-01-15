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
    submitForm(form) {
      this.loading = true;
      this.$store
        .dispatch("loginUser", form)
        .then((response) => {
          console.log(response);
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
};
</script>

<style lang="css" scoped>
ion-content {
  --background: var(--ion-color-primary);
}
</style>