<template>
  <transition name="fade-modal">
    <!-- this mask fades the bg to highlight the form -->
    <div v-show="openModal" class="mask fixed-top">
      <div
        class="form d-flex justify-content-start align-items-center flex-column"
      >
        <div
          class="
            modal-head
            d-flex
            align-items-center
            justify-content-end
            flex-column
          "
        >
          <h2 style="margin-top: 100px; margin-bottom: 20px">
            Response Recorded
          </h2>
          <img
            style="height: 50px; margin-bottom: 90px"
            src="https://cliply.co/wp-content/uploads/2021/03/372103860_CHECK_MARK_400px.gif"
            alt="tick"
          />
          <!-- this is the modal closing button -->
          <button
            @click="openModal = !openModal"
            style="
              height: 30px;
              width: 30px;
              font-size: 30px;
              font-weight: 700;
              position: absolute;
              right: 25px;
              top: 15px;
              padding: 0;
              margin: 0;
              border: none;
              background: transparent;
            "
          >
            &times;
          </button>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "sendDataBtn",
  // props are received to customize the modal acc to requirement
  props: { bool: Boolean },
  data() {
    return {
      // bool: OpenModal,
      openModal: false,
    };
  },
};
// import axios from "axios";

// export default {
//   methods: {
//     sendData() {
//       axios
//         .post("https://api.omrdigital.com/contact", this.formData)
//         .then((response) => console.log(response))
//         .catch((error) => console.log(error));
//     },
//   },
// };
</script>

<style scoped>
.form {
  width: 55vw;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: rgba(255, 255, 255, 0.75);
  border-radius: 20px;
}

.mask {
  height: 100vh;
  width: 100vw;
  background: rgba(0, 0, 0, 0.55);
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.fade-modal-enter-active,
.fade-modal-leave-active {
  transition: all 0.3s ease-in-out;
}
.fade-modal-enter-from,
.fade-modal-leave-to {
  opacity: 0;
}
</style>