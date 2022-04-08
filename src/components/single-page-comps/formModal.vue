  <template>
  <!-- making this component to use it several times in
   several components ie serviceDesc and callToAction -->
  <button
    :style="{ background: btncolor, color: color }"
    @click="openModal = !openModal"
  >
    <!-- btntext will be variable here to customize it according to our needs -->
    {{ btntext }}
  </button>

  <!-- transition is given to have a fade effect when form modal appear -->
  <transition name="fade-modal">
    <!-- this mask fades the bg to highlight the form -->
    <div v-show="openModal" class="mask fixed-top">
      <div
        class="form d-flex justify-content-start align-items-center flex-column"
      >
        <div class="modal-head d-flex align-items-center justify-content-end">
          <h2 style="margin-top: 30px; margin-bottom: 50px">
            Let’s Scale Your Brand, Together
          </h2>
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
        <!-- form starts here -->
        <form
          class="
            d-flex
            justify-content-end
            flex-column
            col-xxl-8 col-xl-8 col-lg-10 col-md-10 col-sm-10 col-10
            align-items-center
          "
          method="post"
        >
          <div class="mb-4 d-flex align-items-center col-12">
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
          <div class="mb-4 d-flex align-items-center col-12">
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
          <div class="mb-4 d-flex align-items-center col-12">
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
          <div class="mb-4 d-flex col-12">
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
            class="
              mb-4
              toggles
              disable-select
              d-flex
              align-items-center
              justify-content-center
              flex-xxl-row
              flex-xl-row
              flex-lg-row
              flex-md-row
              flex-sm-row
              flex-column
            "
          >
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="technologies"
                v-model="formData.technologies[0]"
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
                v-model="formData.technologies[1]"
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
                v-model="formData.technologies[2]"
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
                id="desktop"
                v-model="formData.technologies[3]"
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
                id="desktop"
                v-model="formData.technologies[4]"
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
                id="desktop"
                v-model="formData.technologies[5]"
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
            class="
              btn btn-warning
              d-flex
              justify-content-center
              align-items-center
            "
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
  name: "formModal",
  // props are received to customize the modal acc to requirement
  props: { btntext: String, btncolor: String, color: String },
  data() {
    return {
      openModal: false,

      isActive1: true,
      isActive2: true,
      isActive3: true,
      isActive4: true,
      isActive5: true,
      isActive6: true,
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
        technologies: {},
      },
    };
  },
  methods: {
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
    sendData() {
      axios
        .post("https://api.omrdigital.com/contact-us", this.formData)
        .then((response) => console.log(response.data))
        .catch((error) => console.log(error));
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
  background: rgb(223, 223, 223);
  height: 600px;
}
.form {
  width: 55vw;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: white;
  border-radius: 20px;
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

form button {
  transition: all 0.3s ease;
  background-color: rgba(0, 0, 0, 0.2) !important;
  border: 2px solid rgba(0, 0, 0, 0.5) !important;
  font-weight: 600;
  width: 450px;
  color: rgba(0, 0, 0, 0.8);
}
form button:hover {
  background-color: rgba(0, 0, 0, 0.4) !important;
  border: 2px solid rgba(0, 0, 0, 0.5) !important;
  color: rgba(0, 0, 0, 1);
}
.small {
  transform: scale(0.5);
}

/* other styles */
.containerr {
  width: 100vw;
  background: black;
  height: 300px;
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
p {
  font-size: 1.5rem;
  color: white;
}
.containerr button {
  margin-top: 20px;
  border: none;
  background: white;
  border-radius: 10px;
  padding: 4px 10px;
  width: 150px;
  height: 30px;
  text-align: center;
}

.fade-modal-enter-active,
.fade-modal-leave-active {
  transition: all 0.3s ease-in-out;
}
.fade-modal-enter-from,
.fade-modal-leave-to {
  opacity: 0;
}
@media (max-width: 992px) {
  .form {
    width: 65vw;
  }
}
@media (max-width: 768px) {
  .form {
    width: 80vw;
  }
}
@media (max-width: 576px) {
  .form {
    width: 86vw;
  }
  .modal-head h2 {
    margin: 20px !important;
    font-size: 20px;
  }
}
@media (max-width: 500px) {
  .form {
    width: 94vw;
    height: 680px;
  }
  .modal-head h2 {
    margin: 25px 10px 10px 10px !important;
    width: 280px !important;
  }
}
</style>