<template>
  <div class="cicle__top"></div>

  <div class="cicle__middle"></div>

  <div class="cicle__bottom"></div>
</template>

<script>
export default {
  name: "CicleOnScreen",
};
</script>

<style lang="css" scoped>
.cicle__top {
  height: 120px;
  position: fixed;
  top: -50px;
  right: -20px;
  width: 120px;
  border-radius: 100%;
  background: linear-gradient(
    228deg,
    rgba(2, 0, 36, 0.31556372549019607) 0%,
    rgba(9, 9, 121, 0.365983893557423) 35%,
    rgba(0, 212, 255, 0.44441526610644255) 100%
  );
  z-index: -2;
}

.cicle__middle {
  height: 300px;
  position: fixed;
  top: 100px;
  left: -170px;
  width: 300px;
  border-radius: 100%;
  background: linear-gradient(
    228deg,
    rgba(2, 0, 36, 0.31556372549019607) 0%,
    rgba(9, 9, 121, 0.365983893557423) 35%,
    rgba(0, 212, 255, 0.44441526610644255) 100%
  );
  z-index: -2;
}

.cicle__bottom {
  height: 300px;
  position: fixed;
  bottom: -150px;
  right: -170px;
  width: 300px;
  border-radius: 100%;
  background: linear-gradient(
    228deg,
    rgba(2, 0, 36, 0.31556372549019607) 0%,
    rgba(9, 9, 121, 0.365983893557423) 35%,
    rgba(0, 212, 255, 0.44441526610644255) 100%
  );
  z-index: -2;
}
</style>