<template>
  <ion-page>
    <vertical-align class="fadeIn">
      <ion-row class="ion-padding">
        <ion-col size="12" class="ion-text-center">
          <img src="../../assets/images/login/logo_nova.png" width="250" />
        </ion-col>
        <login-form
          @sendFormLogin="submitForm"
          :loading="loading"
          :resetForm="resetForm"
          :loginError="loginError"
        ></login-form>
      </ion-row>
    </vertical-align>
  </ion-page>
</template>

<script>
import { IonRow, IonCol, IonPage } from "@ionic/vue";

import VerticalAlign from "@/components/base/VerticalAlign";
import LoginForm from "@/components/login/LoginForm";

export default {
  components: {
    IonRow,
    IonCol,
    VerticalAlign,
    LoginForm,
    IonPage,
  },
  data() {
    return {
      loading: false,
      resetForm: false,
      loginError: "",
    };
  },
  created() {
    this.checkLogin();
  },
  methods: {
    submitForm(form) {
      this.loading = true;
      this.loginError = "";
      this.$store
        .dispatch("loginUser", form)
        .then(() => {
          this.$router.replace("/tabs");
        })
        .catch(() => {
          this.loading = false;
          this.resetForm = !this.resetForm;
          this.loginError = "Credenciais inválidas.";
        });
    },
    checkLogin() {
      //redireciona para home se tem token
      this.$store
        .dispatch("checkAuth")
        .then(() => {
          this.$router.replace("/tabs");
        })
        .catch(() => {});
    },
  },
};
</script>

<style lang="css" scoped>
ion-content {
  --background: var(--ion-color-primary);
}
</style>