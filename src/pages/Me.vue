<template>
  <base-layout pageTitle="Meus Dados" pageDefaultBackLink="/tabs">
    <div class="fadeIn ion-padding">
      <ion-item>
        <ion-label position="stacked">Usuário</ion-label>
        <ion-input v-model="form.username" disabled></ion-input>
      </ion-item>

      <ion-item>
        <ion-label position="stacked">E-mail</ion-label>
        <ion-input v-model="form.email" disabled></ion-input>
      </ion-item>

      <ion-item>
        <ion-label position="stacked">Primeiro Nome</ion-label>
        <ion-input v-model="form.firstname"></ion-input>
      </ion-item>

      <ion-text color="danger" v-if="firstname_request">
        <p text-center class="ion-no-margin">{{ firstname_message }}</p>
      </ion-text>

      <ion-item>
        <ion-label position="stacked">Sobrenome</ion-label>
        <ion-input v-model="form.lastname"></ion-input>
      </ion-item>

      <ion-text color="danger" v-if="lastname_request">
        <p text-center class="ion-no-margin">{{ lastname_message }}</p>
      </ion-text>

      <ion-item>
        <ion-label position="stacked">CPF</ion-label>
        <ion-input v-model="form.cpf" disabled></ion-input>
      </ion-item>

      <ion-list>
        <ion-button margin-top expand="block" @click="alterarUser()"
          >Alterar</ion-button
        >
      </ion-list>

      <ion-list>
        <ion-button margin-top expand="block" @click="confirmRedefinirSenha()"
          >Alterar a Senha</ion-button
        >
      </ion-list>
    </div>
    <cicles-on-screen></cicles-on-screen>
  </base-layout>
</template>

<script>
import {
  IonItem,
  IonButton,
  IonLabel,
  IonInput,
  IonText,
  IonList,
  toastController,
} from "@ionic/vue";
import BaseLayout from "@/components/base/BaseLayout.vue";
import CiclesOnScreen from "@/components/base/CiclesOnScreen";

export default {
  name: "Me",
  components: {
    BaseLayout,
    IonItem,
    IonButton,
    IonLabel,
    IonInput,
    IonText,
    IonList,
    CiclesOnScreen,
  },
  data() {
    return {
      form: {
        username: "FelipeBiel",
        email: "felipe@email.com",
        firstname: "Felipe",
        lastname: "Biel",
        cpf: "000000000000",
      },
      firstname_request: false,
      lastname_request: false,
      firstname_message: "",
      lastname_message: "",
    };
  },
  methods: {
    alterarUser() {
      this.openToast();
    },
    confirmRedefinirSenha() {
      this.openToast();
    },
    async openToast() {
      const toast = await toastController.create({
        message: "Salvo com sucesso.",
        duration: 2000,
        color: "success",
      });
      return toast.present();
    },
  },
};
</script>

<style scoped>
</style>