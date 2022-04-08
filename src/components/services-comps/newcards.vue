<template>
  <div class="containerr d-flex justify-content-center">
    <div
      style="width: 100vw !important"
      class="how-we-parent d-flex justify-content-center flex-wrap"
    >
      <div
        v-tilt="{ speed: 3000, perspective: 1200 }"
        data-aos="fade-up"
        data-aos-delay="300"
        data-aos-duration="1000"
        v-for="(item, i) in content"
        :key="i"
        class="howwedoit"
      >
        <div class="cardd d-flex flex-column flex-wrap">
          <div style="width: 100%" class="d-flex flex-column">
            <div class="d-flex flex-row mb-3 align-items-center">
              <img :src="item.icon" alt="icon" />
              <h3>{{ item.heading }}</h3>
            </div>
            <p>
              {{ item.description }}
              <br />
              {{ item.description2 }}
            </p>
            <!--was using this to implement the readmore button to toggle card's length
            <--<button
            id="showless"
              v-if="item.readmore == true"
              @click.prevent.stop="decreaseSize()"
              class=""
            >
              show less
            </button> -->
          </div>
        </div>
      </div>
    </div>
  </div>
  <br />
  <br />
</template>

<script>
import AOS from "aos";
import "aos/dist/aos.css";
export default {
  setup() {},
  props: { content: Object },
  data() {
    return {
      toIncrease: false,
    };
  },
  created() {
    AOS.init();
  },
  methods: {
    // increaseSize() {
    //   document.getElementById("toIncrease").style.height = "650px";
    //   document.getElementById("readmore").style.zIndex = "-1";
    // },
    // decreaseSize() {
    //   document.getElementById("toIncrease").style.height = "450px";
    //   document.getElementById("showless").style.zIndex = "-1";
    // let list = document.querySelectorAll("")
    // },
  },
  name: "newcards",
};
</script>

<style scoped>
.cardd button {
  background-color: rgba(0, 0, 0, 0.9);
  border: none;
  position: absolute;
  left: 66%;
  text-align: center;
  bottom: 2.7%;
  padding: -10px auto !important;
  color: rgba(255, 255, 255, 0.52);
  border-radius: 5px;
}

/* made the parent div to center the elements in div */
.how-we-parent {
  margin-top: 150px !important;
  width: 100vw;
}
/* main card container */
.howwedoit:hover {
  box-shadow: 5px 5px 5px 2px rgba(0, 0, 0, 0.5);
}
.howwedoit {
  width: 25vw;
  min-width: 22vw;
  margin: 30px 20px 0px 20px;
  border-radius: 20px;
  height: 480px;
  background-color: rgba(255, 255, 255, 0.4);
  margin-bottom: 20px;
}
.cardd {
  background-color: rgba(0, 0, 0, 0);
  padding: 20px 0 20px 20px;
  width: 100%;
  min-width: 23vw;
  margin: 20px 0 !important;
}
.cardd p {
  font-size: 18px;
  font-weight: 500;
  width: 98%;
  margin-bottom: 0 !important;
  /* color: #0947a3c5; */
  color: rgb(58, 58, 58);
  overflow-y: auto !important;
  height: 330px;
  padding-right: 20px;

  /* giving this css to make it work on mozilla also */
  scrollbar-color: rgba(37, 37, 37, 0.4) rgba(37, 37, 37, 0.2);
  scrollbar-width: thin;
  scroll-behavior: smooth;
}

/* this given to style the card's scrollbar in chrome and IE */
.cardd p::-webkit-scrollbar {
  width: 6px;
}
.cardd p::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 6px rgba(37, 37, 37, 0.3);
  border-radius: 10px;
  margin-left: 10px;
}
.cardd p::-webkit-scrollbar-thumb {
  border-radius: 10px;
  -webkit-box-shadow: inset 0 0 6px rgba(37, 37, 37, 0.5);
}

.cardd h3 {
  width: 220px;
  margin: 0px 0px 0px 20px !important;
  color: #0947a3c5;
  font-weight: bold;
  font-size: 1.5rem;
}
.cardd img {
  height: 40px;
  transition: all 0.3s ease;
  z-index: 10;
}
@media (max-width: 992px) {
  .howwedoit {
    width: 36vw;
  }
  .cardd {
    background-color: rgba(0, 0, 0, 0);
    width: 100%;
  }
}
@media (max-width: 768px) {
  .cardd p {
    width: 100%;
  }
  .cardd h3 {
    width: auto;
    margin: 0 0 0 10px !important;
  }
  .howwedoit {
    width: 40vw;
    margin-left: 10px;
    margin-right: 10px;
  }
  .cardd {
    background-color: rgba(0, 0, 0, 0);
    padding: 10px;
    width: 100%;
    margin: 40px 0 60px 0 !important;
  }
  .how-we-parent {
    margin-top: -50px !important;
    width: 100vw !important;
  }
}
@media (max-width: 575px) {
  .cardd p {
    width: 110%;
  }
  .cardd h3 {
    width: auto;
    margin: 0 0 0 15px !important;
  }
  .how-we-parent {
    margin-top: 60px !important;
  }
  .howwedoit {
    width: 80vw;
    margin-left: 20px;
  }
  .cardd {
    background-color: rgba(0, 0, 0, 0);
    padding: 0 20px;
    width: 95%;
  }
}
@media (max-width: 499px) {
  .howwedoit {
    box-shadow: 5px 5px 5px 2px rgba(0, 0, 0, 0.5);
  }
  .cardd {
    width: 100%;
    margin-left: -5px !important;
  }
  .cardd p {
    font-size: 14px;
  }
  .cardd h3 {
    font-size: 1.2rem;
  }
}
</style>
