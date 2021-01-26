<template>
  <base-layout pageTitle="Configuração" pageDefaultBackLink="/tabs">
    <div class="fadeIn ion-padding">
      <ion-item>
        <ion-label>Nível de acionamento</ion-label>
        <ion-select
          @ionChange="mudarNivel($event)"
          interface="action-sheet"
          :value="nivel"
        >
          <ion-select-option value="0">Vazio</ion-select-option>
          <ion-select-option value="1">Baixo</ion-select-option>
          <ion-select-option value="2">Médio</ion-select-option>
        </ion-select>
      </ion-item>

      <ion-item>
        <ion-label position="stacked"
          >Quantidade do reservatório (litros):</ion-label
        >
        <ion-input v-model="reservoirCapacity" type="number"></ion-input>
      </ion-item>

      <ion-item>
        <ion-label>Modo</ion-label>
        <ion-select
          @ionChange="mudarModo($event)"
          interface="action-sheet"
          :value="modo"
        >
          <ion-select-option value="1">Automatico</ion-select-option>
          <ion-select-option value="0">Manual</ion-select-option>
        </ion-select>
      </ion-item>

      <ion-text v-if="automatico">
        <p>
          <b>Modo automático:</b> A rotina do dispositivo é ativada a qualquer
          hora do dia, respeitando sempre o nível de acionamento.
        </p>
      </ion-text>

      <ion-text v-if="!automatico">
        <p>
          <b>Modo manual:</b> A rotina do dispositivo é ativada em um range de
          horário especifico, respeitando sempre o nível de acionamento.
        </p>
      </ion-text>

      <ion-item v-if="!automatico">
        <ion-label>Hora de inicio</ion-label>
        <ion-datetime displayFormat="HH:mm"></ion-datetime>
      </ion-item>

      <ion-item v-if="!automatico">
        <ion-label>Hora de termino</ion-label>
        <ion-datetime displayFormat="HH:mm"></ion-datetime>
      </ion-item>

      <ion-button expand="block" class="ion-margin-top" @click="updateDevice()"
        >Salvar</ion-button
      >
    </div>
  </base-layout>
</template>

<script>
import {
  IonItem,
  IonLabel,
  IonDatetime,
  IonInput,
  IonText,
  IonButton,
  IonSelect,
  IonSelectOption,
  toastController,
} from "@ionic/vue";

import BaseLayout from "@/components/base/BaseLayout.vue";

export default {
  name: "Settings",
  components: {
    BaseLayout,
    IonItem,
    IonLabel,
    IonDatetime,
    IonInput,
    IonText,
    IonButton,
    IonSelect,
    IonSelectOption,
  },
  data() {
    return {
      automatico: true,
      nivel: "1",
      reservoirCapacity: 1000,
      modo: "1",
    };
  },
  methods: {
    mudarNivel(e) {
      this.nivel = e.target.value;
    },
    mudarModo(e) {
      this.modo = e.target.value;
      if (this.modo === "1") {
        this.automatico = true;
      } else {
        this.automatico = false;
      }
    },
    updateDevice() {
      setTimeout(() => {
        this.openToast();
      }, 1000);
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