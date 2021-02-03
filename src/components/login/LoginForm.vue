<template>
  <ion-col size="12" class="">
    <ion-item class="ion-margin-top">
      <ion-icon :icon="person" class="position__absolute"></ion-icon>
      <ion-input
        placeholder="Usuário"
        v-model="form.username"
        class="input__padding--left"
      ></ion-input>
    </ion-item>
    <ion-text color="danger" v-if="usernameErrors">
      <small class="ion-no-margin ion-margin-top ion-text-left">
        {{ usernameErrors }}
      </small>
    </ion-text>
  </ion-col>
  <ion-col size="12">
    <ion-item class="ion-margin-top">
      <ion-icon :icon="lockClosed" class="position__absolute"></ion-icon>
      <ion-input
        class="input__padding--left"
        placeholder="Senha"
        :type="typePassword"
        v-model="form.password"
        @keyup.enter="validatorLoginField"
      ></ion-input>
      <ion-icon
        :icon="typePassword == 'password' ? eyeOutline : eyeOffOutline"
        @click="viewPassword"
      ></ion-icon>
    </ion-item>
    <ion-text color="danger" v-if="passwordErros">
      <small class="ion-no-margin ion-margin-top ion-text-left">
        {{ passwordErros }}
      </small>
    </ion-text>

    <ion-text color="danger" v-if="loginError">
      <small class="ion-no-margin ion-margin-top ion-text-center">
        {{ loginError }}
      </small>
    </ion-text>
  </ion-col>
  <ion-col size="12" class="ion-margin-top">
    <ion-button
      expand="block"
      color="secondary"
      class="ion-margin-top"
      @click="validatorLoginField"
    >
      Entrar
      <ion-icon :icon="arrowForwardOutline" slot="end"></ion-icon>
    </ion-button>
    <div class="ion-margin-top" v-if="loading">
      <div margin class="text-white ion-text-center">Carregando</div>
      <ion-progress-bar
        class="ion-margin-top"
        type="indeterminate"
        color="secondary"
      ></ion-progress-bar>
    </div>
  </ion-col>
  <cicles-on-screen></cicles-on-screen>
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
import {
  person,
  lockClosed,
  arrowForwardOutline,
  eyeOutline,
  eyeOffOutline,
} from "ionicons/icons";
import CiclesOnScreen from "@/components/base/CiclesOnScreen";
export default {
  props: ["loading", "resetForm", "loginError"],
  emits: ["sendFormLogin"],
  components: {
    IonCol,
    IonInput,
    IonButton,
    IonItem,
    IonIcon,
    IonText,
    IonProgressBar,
    CiclesOnScreen,
  },
  data() {
    return {
      person,
      lockClosed,
      arrowForwardOutline,
      eyeOutline,
      eyeOffOutline,
      form: {
        username: "",
        password: "",
      },
      usernameErrors: "",
      passwordErros: "",
      typePassword: "password",
    };
  },
  methods: {
    validatorLoginField() {
      const username = this.form.username;
      const password = this.form.password;
      this.usernameErrors = "";
      this.passwordErros = "";
      let erros = false;
      if (username.trim() === "") {
        this.usernameErrors = "Este campo é obrigatório";
        erros = true;
      }
      if (password.length < 6) {
        if (password.trim() === "") {
          this.passwordErros = "Este campo é obrigatório";
          erros = true;
        } else {
          this.passwordErros = "Este campo deve ter no mínimo 6 caracteres";
          erros = true;
        }
      }
      if (!erros) {
        this.sendFormLogin();
      }
    },
    sendFormLogin() {
      this.$emit("sendFormLogin", this.form);
    },
    resetFormLogin() {
      this.form.username = "";
      this.form.password = "";
      this.usernameErrors = "";
      this.passwordErros = "";
    },
    viewPassword() {
      if (this.typePassword == "password") {
        this.typePassword = "text";
      } else {
        this.typePassword = "password";
      }
    },
  },
  watch: {
    resetForm() {
      this.resetFormLogin();
    },
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

ion-input.input__padding--left {
  --padding-start: 40px;
}
</style>