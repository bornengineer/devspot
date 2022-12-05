<template>
  <transition name="fade-modal">
    <!-- this mask fades the bg to highlight the form -->
    <div style="z-index:1000000 !important;" v-show="bool" class="mask fixed-top">
      <div
        class="
          formm
          d-flex
          justify-content-start
          align-items-center
          flex-column
        "
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
            @click="bool = false"
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

  <div
    @click="openForm()"
    class="container-i fixed-top disable-select"
    :style="{ display: formActive ? 'none' : 'block' }"
  >
    <div class="sicons">
      <p>SUBMIT PROJECT</p>
    </div>
  </div>
  <transition name="formOpen">
    <div
      v-if="formActive"
      class="form-popup w-100 d-flex justify-content-end align-items-center"
    >
      <div @click="formActive = false" class="blank"></div>
      <div
        class="
          container-fluidd
          d-flex
          justify-content-center
          align-items-center
          flex-column
        "
      >
        <h1>Contact us</h1>
        <!-- that arrow image -->
        <button
          @click="formActive = false"
          style="
            height: 40px;
            width: 40px;
            font-size: 40px;
            font-weight: 700;
            position: absolute;
            right: 15px;
            top: 5px;
            padding-bottom: 20px;
            margin: 0;
            border: none;
            background: transparent;
          "
        >
          &times;
        </button>
        <form
          class="d-flex justify-content-end flex-column col-10"
          method="post"
        >
          <div class="mb-4 d-flex align-items-center">
            <label for="name" class="form-label"
              >Name:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label
            >
            <input
              type="text"
              class="form-control"
              id="name"
              placeholder="John Doe"
              required
              autocomplete="off"
              v-model="formData.name"
            />
          </div>
          <div class="mb-4 d-flex align-items-center">
            <label for="email" class="form-label"
              >Email:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label
            >
            <input
              type="email"
              class="form-control"
              id="email"
              placeholder="name@example.com"
              autocomplete="off"
              v-model="formData.email"
            />
          </div>
          <div class="mb-4 d-flex align-items-center">
            <label for="phone" class="form-label"
              >Phone:&nbsp;&nbsp;&nbsp;&nbsp;</label
            >
            <input
              type="text"
              class="form-control"
              id="phone"
              placeholder="1234-567-890"
              required
              autocomplete="off"
              v-model="formData.phone"
            />
          </div>
          <div class="mb-4 d-flex">
            <label for="message" class="form-label">Description:&nbsp;</label>
            <textarea
              placeholder="Your description"
              class="form-control"
              id="message"
              rows="2"
              v-model="formData.message"
            ></textarea>
          </div>

          <!-- using user-select: none; to disable text selection on certain pages -->
          <div
        class="
          mb-4
          toggles
          disable-select
          d-flex
          align-items-center
          justify-content-center
          flex-row
        "
      >
        <div class="form-check">
          <input
            class="form-check-input"
            type="checkbox"
            value=""
            id="technologies"
            v-model="formData.service.web"
          />
          <label
            v-bind:style="{
              'background-color': isActive1 ? 'transparent' : '#00000060',
              color: isActive1 ? '#ffffff90' : '#494848',
            }"
            @click="toggleClass1()"
            class="form-check-label"
            for="technologies"
          >
            Website Development
          </label>
        </div>
        <div class="form-check">
          <input
            class="form-check-input"
            type="checkbox"
            value=""
            id="mobile"
            v-model="formData.service.app"
          />
          <label
            v-bind:style="{
              'background-color': isActive2 ? 'transparent' : '#00000060',
              color: isActive2 ? '#ffffff90' : '#494848',
            }"
            @click="toggleClass2()"
            class="form-check-label"
            for="mobile"
          >
            Mobile Application
          </label>
        </div>
        <div class="form-check">
          <input
            class="form-check-input"
            type="checkbox"
            value=""
            id="desktop"
            v-model="formData.service.desktop"
          />
          <label
            v-bind:style="{
              'background-color': isActive3 ? 'transparent' : '#00000060',
              color: isActive3 ? '#ffffff90' : '#494848',
            }"
            @click="toggleClass3()"
            class="form-check-label"
            for="desktop"
          >
            Desktop Application
          </label>
        </div>
        <div class="form-check">
          <input
            class="form-check-input"
            type="checkbox"
            value=""
            id="cloud"
            v-model="formData.service.cloud"
          />
          <label
            v-bind:style="{
              'background-color': isActive4 ? 'transparent' : '#00000060',
              color: isActive4 ? '#ffffff90' : '#494848',
            }"
            @click="toggleClass4()"
            class="form-check-label"
            for="cloud"
          >
            Cloud Development
          </label>
        </div>
        <div class="form-check">
          <input
            class="form-check-input"
            type="checkbox"
            value=""
            id="devops"
            v-model="formData.service.devops"
          />
          <label
            v-bind:style="{
              'background-color': isActive5 ? 'transparent' : '#00000060',
              color: isActive5 ? '#ffffff90' : '#494848',
            }"
            @click="toggleClass5()"
            class="form-check-label"
            for="devops"
          >
            Devops, CI/CD
          </label>
        </div>
        <div class="form-check">
          <input
            class="form-check-input"
            type="checkbox"
            value=""
            id="bigdata"
            v-model="formData.service.bigdata"
          />
          <label
            v-bind:style="{
              'background-color': isActive6 ? 'transparent' : '#00000060',
              color: isActive6 ? '#ffffff90' : '#494848',
            }"
            @click="toggleClass6()"
            class="form-check-label"
            for="bigdata"
          >
            Big Data Development
          </label>
        </div>
      </div>
          <button
            @click.prevent="sendData()"
            type="submit"
            class="btn btn-warning d-flex justify-content-center"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  </transition>
</template>

<script>
import axios from "axios";
export default {
  name: "contactSidebar",
  data() {
    return {
      formActive: false,
      bool : false,

      isActive1: true,
      isActive2: true,
      isActive3: true,
      isActive4: true,
      isActive5: true,
      isActive6: true,

// ignore this data
      web: false,
      app: false,
      desktop: false,
      cloud: false,
      devops: false,
      bigdata: false,

      formData: {
        name: "",
        email: "",
        phone: "",
        message: "",
        service: {
          web: "",
          app: "",
          desktop: "",
          cloud: "",
          devops: "",
          bigdata: "",
        },
      },
    };
  },

  methods: {
    // these methods fire each time we click & unclick a service checkbox
    toggleClass1: function () {
      this.isActive1 = !this.isActive1;
      this.web = !this.web;
      // console.log(`Web:${this.web}`);
    },
    toggleClass2: function () {
      this.isActive2 = !this.isActive2;
      this.app = !this.app;
      // console.log(`App:${this.app}`);
    },
    toggleClass3: function () {
      this.isActive3 = !this.isActive3;
      this.desktop = !this.desktop;
      // console.log(`Desktop:${this.desktop}`);
    },
    toggleClass4: function () {
      this.isActive4 = !this.isActive4;
      this.cloud = !this.cloud;
      // console.log(`Desktop:${this.desktop}`);
    },
    toggleClass5: function () {
      this.isActive5 = !this.isActive5;
      this.devops = !this.devops;
      // console.log(`Desktop:${this.desktop}`);
    },
    toggleClass6: function () {
      this.isActive6 = !this.isActive6;
      this.bigdata = !this.bigdata;
      // console.log(`Desktop:${this.desktop}`);
    },

    openForm() {
      this.formActive = !this.formActive;
    },

    // sending form data by axios
    sendData() {
      setTimeout(() => {this.bool = true;}, 2000)
      
      console.log(this.formData);
      axios
        .post("https://api.omrdigital.com/contact", this.formData)
        .then((response) => console.warn(response.data))
        .catch((error) =>
          console.warn(
            "Error Is",
            error,
            error?.response?.data,
            error?.response
          )
        );

      // window.alert("Your response has been recorded!");
    },
  },
};
</script>

<style scoped>
.form-popup {
  position: fixed;
  background: transparent;
  z-index: 100;
}
.container-fluidd {
  width: 30vw;
  height: 600px;
  margin-bottom: 0px;
  padding-bottom: -60px !important;
  border-radius: 30px 0px 0px 30px;
  background: rgba(255, 255, 255, 0.68);
  border: 2px solid rgba(0, 0, 0, 0.28);
  border-right: none;
  position: absolute;
  top: 60px;
}
.blank {
  position: absolute;
  height: 100vh;
  width: 100vw;
  /* border: 2px solid red; */
  top: 0px;
}
/* disabling the selection on toggle checkboxs to make the UX good */
.disable-select {
  user-select: none; /* supported by Chrome and Opera */
  -webkit-user-select: none; /* Safari */
  -khtml-user-select: none; /* Konqueror HTML */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
}

input,
textarea,
button {
  /* this is used to control native appearance of UI controls, that are based on operating system's theme */
  -webkit-appearance: none;
  box-shadow: none !important;
}

/* to disable the autofill and suggestions */
:-webkit-autofill {
  color: #fff !important;
}
.toggles {
  padding-right: 1.5rem;
  flex-wrap: wrap;
  line-height: 0.9rem;
}
.form-check-label {
  display: flex;
  justify-content: center;
  align-items: center;
}
.form-check label {
  background-color: transparent;
  border-radius: 20px;
  border: 1px solid rgba(0, 0, 0, 0.6);
  color: rgba(0, 0, 0, 0.6) !important;
  cursor: pointer;
  font-size: 0.8em;
  text-align: center;
}
.form-check label {
  padding: 0 10px;
  min-height: 30px;
  margin: 5px;
}
.form-check input {
  display: none;
}
h1 {
  padding:10px;
  margin-bottom: 50px;
  color: rgb(0, 0, 0);
  font-size: 1.5rem;
  font-weight: bold;
}

::placeholder {
  color: rgba(255, 255, 255, 0.3);
  font-weight: 500;
}
textarea:focus {
  background: rgba(141, 141, 141, 0);
  outline: none !important;
  border-bottom: 1px solid rgba(0, 0, 0, 1);
}
input:focus {
  background: rgba(141, 141, 141, 0);
  outline: none !important;
  border-bottom: 1px solid rgba(0, 0, 0, 1);
}
button:focus {
  outline: none !important;
  border: 2px solid rgba(0, 0, 0, 0.5);
  background-color: rgba(0, 0, 0, 0.2);
}
textarea,
input {
  border: none;
  background: rgba(255, 255, 255, 0);
  border-bottom: 1px solid rgba(0, 0, 0, 0.6);
  color: #000000;
  font-weight: bold;
  border-radius: 0px;
  outline: none !important;
  overflow: auto;
}
input {
  border: none;
  border-bottom: 1px solid rgba(0, 0, 0, 0.6);
  background: rgba(255, 255, 255, 0);
  font-weight: bold;
  border-radius: 0px;
  outline: none !important;
}
form {
  color: rgba(0, 0, 0, 0.6);
  margin-bottom: 0px;
  height: 60vh !important;
}
label {
  letter-spacing: 2px;
  font-weight: bold;
  font-size: 1.1em;
  margin: 0;
}

form button {
  transition: all 0.5s ease;
  background-color: rgba(0, 0, 0, 0.2);
  border: 2px solid rgba(0, 0, 0, 0.25);
  font-weight: 600;
  color: rgba(29, 29, 29, 0.8);
}
form button:hover {
  background-color: rgba(0, 0, 0, 0.4);
  border: 2px solid rgba(0, 0, 0, 0.45);
  color: rgba(255, 255, 255, 0.8);
}
.small {
  transform: scale(0.5);
}

/* style other than form */

.sicons {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: fixed;
  width: 36px;
  top: 40%;
  right: 0px !important;
  background-color: rgba(0, 0, 0, 0.8);
  background-size: 2em;
  padding: 6px;
  border-radius: 15px 0 0 15px;
  transition: all 0.3s ease;
  cursor: pointer;
}
.-moz-sicons p {
  font-size: 12px;
}
.sicons p {
  writing-mode: vertical-rl;
  text-orientation: upright;
  color: white;
  margin: 6px 4px;
  font-size: 10px;
}
.sicons:hover {
  box-shadow: 0px 0px 8px 1px rgba(233, 233, 233, 0.698);
  width: 42px;
}

.formOpen-enter-active,
.formOpen-leave-active {
  transition: all 0.4s linear;
}
.formOpen-enter-from,
.formOpen-leave-to {
  opacity: 0;
  transform: translateX(30%);
}
.form-check label {
  padding: 3px 10px;
  width: 120px;
}

@media (max-width: 1350px) {
  .container-fluidd {
    width: 35vw;
  }
}
@media (max-width: 1160px) {
  .container-fluidd {
    width: 41vw;
  }
}
@media (max-width: 992px) {
  .container-fluidd {
    width: 50vw;
    background: rgba(255, 255, 255, 0.98);
  }
  .form-check label {
    padding: 3px 10px;
    width: 120px;
  }
}
@media (max-width: 800px) {
  .container-fluidd {
    width: 53vw;
  }
}
@media (max-width: 768px) {
  .container-fluidd {
    width: 100vw;
    height: 100vh;
    top: 0px;
  }
  .form-popup {
    z-index: 100000;
  }
  .container-fluidd button {
    right: 30px !important;
    top: 40px;
  }
}
@media (max-width: 575px) {
  label {
    font-size: 14px;
  }
  .form-check label {
    padding: 3px 10px;
    width: 110px;
  }
  .form-check,
  textarea,
  input {
    font-size: 12px;
  }
  h1 {
    font-size: 25px;
  }
  .sicons p {
    writing-mode: vertical-rl;
    text-orientation: upright;
    color: white;
    margin: 0px 4px !important;
    font-size: 9px;
  }
}
@media (max-width: 499px) {
  .form-check label {
    width: 100px;
  }
  h1 {
    margin-top: -50px;
  }
  .sicons {
    top: 76%;
  }
  .sicons {
    width: 34px;
    padding: 8px 0px;
  }
}

/* modal */
.formm {
  width: 55vw;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: rgba(255, 255, 255, 0.95);
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
