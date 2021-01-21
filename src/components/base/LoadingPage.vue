<template>
  <div>
    <div class="ion-text-center ion-margin">{{ loadingMessage }}</div>
    <ion-progress-bar type="indeterminate"></ion-progress-bar>
  </div>
</template>

<script>
import { IonProgressBar } from "@ionic/vue";
export default {
  props: ["loadingMessage"],
  components: {
    IonProgressBar,
  },
};
</script>

<style lang="css" scoped>
</style>