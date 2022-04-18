<template>
  <transition name="fade-modal">
    <!-- this mask fades the bg to highlight the form -->
    <div v-show="bool" class="mask fixed-top">
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
    class="
      containerr
      d-flex
      justify-content-center
      align-items-center
      flex-xxl-row
      flex-xl-row
      flex-lg-row
      flex-md-column-reverse
      flex-sm-column-reverse
      flex-column-reverse
    "
  >
    <div class="side-form">
      <div
        style="
          box-shadow: -1px 2px 10px 2px black;
          background: #f7f7f7;
          border-radius: 30px 0px 0px 30px;
          width: 45vw;
          margin: 10px 0px 10px 5vw;
        "
        class="form d-flex justify-content-start align-items-center flex-column"
      >
        <h2 style="margin: 25px 0px; text-align: center">
          Let’s Scale Your Brand, Together
        </h2>
        <form
          class="
            d-flex
            justify-content-end
            flex-column
            col-xxl-10 col-xl-10 col-lg-10 col-md-12 col-sm-12 col-12
          "
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
            <label for="message" class="form-label">Message:&nbsp;</label>
            <textarea
              placeholder="Your message"
              class="form-control"
              id="message"
              rows="2"
              v-model="formData.message"
            ></textarea>
          </div>
          <div
          style="height:150px;"
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
                  'background-color': isActive1 ? 'transparent' : '#00000020',
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
                  'background-color': isActive2 ? 'transparent' : '#00000020',
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
                  'background-color': isActive3 ? 'transparent' : '#00000020',
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
                  'background-color': isActive4 ? 'transparent' : '#00000020',
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
                  'background-color': isActive5 ? 'transparent' : '#00000020',
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
                  'background-color': isActive6 ? 'transparent' : '#00000020',
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

    <div
      style="background: #000000c7; color: white; height: 650px"
      class="text-section d-flex align-items-center justify-content-center"
    >
      <div class="section-theme talent-block-left">
        <div class="section-title-wrap d-flex flex-column align-items-center">
          <h2
            style="
              font-size: 3rem;
              font-weight: bold;
              margin-top: -40px;
              margin-bottom: 40px;
              text-align: center;
            "
            class="section-title text-left"
          >
            Your Technology Partner
          </h2>
          <div
            style="
              border-bottom: 3px solid #ffffff;
              margin-top: -20px;
              margin-bottom: 40px;
              width: 100px;
            "
            class="line"
          ></div>
        </div>
        <h4 class="talent-gap-typographic d-flex flex-row align-items-center">
          <span class="digits">50%</span>
          <span class="text">
            of companies have lack of technical skills aftereffect clients get
            many problems to reach their dreams.
          </span>
        </h4>
        <p class="section-description talent-gap__section-description mb-2">
          Encanto technologies always assure you that our technology experts
          will always give you the
          <strong>best products</strong>. That will help you to reach at the top
          in the list as well as us.
          <br />
          <br />
          We will always be your trusted adviser and partner in terms of
          technology.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import AOS from "aos";
import "aos/dist/aos.css";
import axios from "axios";

export default {
  created() {
    AOS.init();
  },
  name: "yourtechpartner",
  props: {},
  data() {
    return {
      bool: false,

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

    // sending form data by axios
    sendData() {
      setTimeout(() => {
        this.bool = true;
      }, 2000);

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
/* disabling the selection on toggle checkboxs to make the UX good */
.disable-select {
  user-select: none; /* supported by Chrome and Opera */
  -webkit-user-select: none; /* Safari */
  -khtml-user-select: none; /* Konqueror HTML */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
}

.containerr {
  width: 100vw;
  background: white;
  overflow: hidden;
  padding: 0px 0px 70px 0px !important;
}
.side-form {
  /* width: 50vw; */
  overflow: hidden;
}
.side-form img {
  width: 720px;
}
.talent-block-left {
  padding-top: 120px;
  padding-bottom: 120px;
}
.text-section {
  width: 50vw;
}
.talent-block-left .section-title-wrap,
.talent-block-left .talent-gap-typographic,
.talent-block-left .section-description {
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}
.talent-gap-typographic .digits {
  font-size: 100px;
  font-weight: 700;
  margin-right: 16px;
}

.talent-gap-typographic .text {
  font-size: 19px;
  font-weight: 300;
  line-height: 1.3;
}

.talent-gap__section-description {
  font-size: 1.2rem;
  text-align: initial;
  max-width: 940px;
  margin: auto;
}
.section-theme {
  width: 40vw;
}

/* form */
.form {
  width: 50vw;
}
input,
textarea,
button {
  -webkit-appearance: none;
  box-shadow: none !important;
}
:-webkit-autofill {
  color: #fff !important;
}
.toggles {
  padding-right: 1.5rem;
  /* border: 2px solid rgba(0, 0, 0, 0.5); */
  flex-wrap: wrap;
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
  margin-top: 50px;
  margin-bottom: 50px;
  color: white;
  font-size: 2.5rem;
  font-weight: bold;
}

::placeholder {
  color: rgba(0, 0, 0, 0.3);
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
  color: #3f3f3f;
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
  transform: scale(0.9);
}
label {
  letter-spacing: 2px;
  font-weight: bold;
  font-size: 1.1em;
  margin: 0;
}

button {
  transition: all 0.5s ease;
  background-color: rgba(0, 0, 0, 0.2);
  border: 2px solid rgba(0, 0, 0, 0.5);
  font-weight: 600;
  color: rgba(0, 0, 0, 0.8);
}
button:hover {
  background-color: rgba(0, 0, 0, 0.4);
  border: 2px solid rgba(0, 0, 0, 0.5);
  color: rgba(0, 0, 0, 1);
}
.small {
  transform: scale(0.5);
}

@media (max-width: 1160px) {
  .toggles {
    height: 240px !important;
  }
  .text-section {
    height: 700px !important;
  }
}
@media (max-width: 992px) {
  .text-section {
    width: 70vw;
  }
  .toggles {
    height: 160px !important;
  }
  .section-theme {
    width: 65vw;
  }
  .form {
    width: 65vw !important;
    border-radius: 0px 0px 30px 30px !important;
    margin: 0px 20px 20px 20px !important;
  }
}
@media (max-width: 768px) {
  .text-section {
    width: 75vw;
  }
  .toggles {
    height: 160px !important;
    padding-left: 0rem !important;
  }
  .form-check {
    padding-left: 0.5rem !important;
  }
  .section-theme {
    width: 65vw;
  }
  .form {
    width: 70vw !important;
  }
}
@media (max-width: 576px) {
  .text-section {
    width: 85vw;
  }
  .toggles {
    height: 160px !important;
    padding-left: 0rem !important;
  }
  .form-check {
    padding-left: 0.5rem !important;
  }
  .section-theme {
    width: 75vw;
  }
  .form {
    width: 80vw !important;
  }
}
@media (max-width: 500px) {
  .text-section {
    width: 100vw;
  }
  .toggles {
    height: 260px !important;
    padding-left: 0rem !important;
  }
  .form-check {
    padding-left: 0.5rem !important;
  }
  .section-theme {
    width: 90vw;
  }
  .form {
    width: 96vw !important;
    margin: 0px 10px 20px 10px !important;
  }
  .talent-gap-typographic .digits {
    font-size: 60px;
    font-weight: 700;
    margin-right: 16px;
  }
}

/* modal */
.formm {
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