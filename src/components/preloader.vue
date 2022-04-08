<template>
<!-- this component is used to show the preloader to the webpage -->
  <div
    v-if="showLoader"
    class="
      preloader-bg
      d-flex
      justify-content-center
      align-items-center
      flex-column
    "
  >
    <img
      style="height: 50px !important"
      src="../../public/spiral.png"
      alt="spiral"
    />
    <div class="dots d-flex justify-content-between">
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
    </div>
  </div>
</template>

<style scoped>
.preloader-bg {
  height: 100vh;
  width: 100vw;
  position: fixed;
  z-index: 9999;
  background: #000000c8;
}

img {
  height: 128px;
  animation: img-revolve 3s infinite;
}

/* image rotation animation css */
@keyframes img-revolve {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(720deg);
  }
}

.dots {
  margin-bottom: 20px;
}

.dot {
  height: 7px;
  width: 7px;
  background: white;
  border-radius: 50%;
  animation: dots-ani 1s infinite;
  margin: 30px 10px;
}

/* giving delay to get the load effect */
.dot:nth-child(1) {
  animation-delay: 0s !important;
}
.dot:nth-child(2) {
  animation-delay: 0.2s !important;
}
.dot:nth-child(3) {
  animation-delay: 0.4s !important;
}

/* dots opacity animation css */
@keyframes dots-ani {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>

<script>
export default {
  data() {
    return {
      showLoader: true,
    };
  },
  created() {
    this.showToggle();
  },
  methods: {
    showToggle() {
      setTimeout(() => {
        this.showLoader = false;
      }, 1000);
    },
  },
};
</script>