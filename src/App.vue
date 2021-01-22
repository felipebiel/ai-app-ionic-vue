<template>
  <ion-app>
    <side-menu />
    <ion-router-outlet id="main-content" />
  </ion-app>
</template>

<script>
import { IonApp, IonRouterOutlet } from "@ionic/vue";
import { defineComponent } from "vue";
import SideMenu from "@/components/base/SideMenu";

export default defineComponent({
  name: "App",
  components: {
    IonApp,
    IonRouterOutlet,
    SideMenu,
  },
});
</script>