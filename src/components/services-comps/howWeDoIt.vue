<template>
  <div class="containerr">
    <div
      class="
        row1
        flex-column
        text-center
        d-flex
        justify-content-center
        align-items-center
      "
    >
      <h3 data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000">
        How we do it?
      </h3>
    </div>

    <!-- this rrr containerrr is used to contain the steps content only -->
    <div class="containerrr d-flex justify-content-center align-items-center">
      <div
        data-aos="zoom-in"
        data-aos-delay="300"
        data-aos-duration="1500"
        class="stepstext"
      >
        STEPS
      </div>
      <div
        data-aos="fade"
        class="
          process
          flex-xxl-row
          flex-xl-row
          flex-lg-row
          flex-md-row
          flex-sm-column
          flex-column
          d-flex
        "
      >
        <div
          data-aos="fade-up"
          data-aos-delay="100"
          data-aos-duration="1500"
          class="
            step1
            number
            text-center
            flex-xxl-column
            flex-xl-column
            flex-lg-column
            flex-md-column
            flex-sm-row
            flex-row
            align-items-center
            d-flex
          "
        >
          01
          <div
            class="step d-flex justify-content-center align-items-center mx-3"
          >
            <img
              style="height: 40px; opacity: 0.7"
              src="../../assets/services-steps/info-gatheringS.png"
              alt=""
              class=""
            />
          </div>
          <p>Info Gathering</p>
        </div>

        <div
          data-aos="fade-down"
          data-aos-delay="100"
          data-aos-duration="1500"
          class="
            step2
            number
            text-center
            flex-xxl-column
            flex-xl-column
            flex-lg-column
            flex-md-column
            flex-sm-row
            flex-row
            align-items-center
            d-flex
          "
        >
          02
          <div
            class="step d-flex justify-content-center align-items-center mx-3"
          >
            <img
              style="height: 45px; margin-left: 10px"
              src="../../assets/services-steps/planningS.png"
              alt=""
              class=""
            />
          </div>
          <p>Planning</p>
        </div>
        <div
          data-aos="fade-up"
          data-aos-delay="100"
          data-aos-duration="1500"
          class="
            step3
            number
            text-center
            flex-xxl-column
            flex-xl-column
            flex-lg-column
            flex-md-column
            flex-sm-row
            flex-row
            align-items-center
            d-flex
          "
        >
          03
          <div
            class="step d-flex justify-content-center align-items-center mx-3"
          >
            <img
              style="height: 30px; opacity: 0.7"
              src="../../assets/services-steps/designS.png"
              alt=""
              class=""
            />
          </div>
          <p>Design</p>
        </div>
        <div
          data-aos="fade-down"
          data-aos-delay="100"
          data-aos-duration="1500"
          class="
            step4
            number
            text-center
            flex-xxl-column
            flex-xl-column
            flex-lg-column
            flex-md-column
            flex-sm-row
            flex-row
            align-items-center
            d-flex
          "
        >
          04
          <div
            class="step d-flex justify-content-center align-items-center mx-3"
          >
            <img
              style="height: 40px; opacity: 0.7"
              src="../../assets/services-steps/developmentS.png"
              alt=""
              class=""
            />
          </div>
          <p>Development</p>
        </div>
        <div
          data-aos="fade-down"
          data-aos-delay="100"
          data-aos-duration="1500"
          class="
            step5
            number
            text-center
            flex-xxl-column
            flex-xl-column
            flex-lg-column
            flex-md-column
            flex-sm-row
            flex-row
            align-items-center
            d-flex
          "
        >
          05
          <div
            class="step d-flex justify-content-center align-items-center mx-3"
          >
            <img
              style="height: 40px; opacity: 0.7"
              src="../../assets/services-steps/launchingS.png"
              alt=""
              class=""
            />
          </div>
          <p>Testing & Launch</p>
        </div>
      </div>
    </div>

    <!-- here starts the bottom section including "requirement analysis" -->
    <div
      style="width: 100vw !important"
      class="
        how-we-parent
        d-flex
        justify-content-center
        align-items-center
        flex-wrap
      "
    >
      <div
        data-aos="fade-up"
        data-aos-delay="300"
        data-aos-duration="1000"
        v-for="(card, i) in cards"
        :key="i"
        class="howwedoit"
      >
        <div
          class="
            cardd
            d-flex
            justify-content-between
            flex-row
            align-items-center
          "
        >
        <!-- this v-if is used to manipulate the for loop in a manner to show the content alternatively in forward and backward direction  -->
          <div
            v-if="card.dir == 'forward'"
            class="
              d-flex
              flex-xxl-row
              flex-xl-row
              flex-lg-row
              flex-md-row
              flex-sm-column
              flex-column
              align-items-start
              align-items-xxl-center
              align-items-xl-center
              align-items-lg-center
              align-items-md-center
              align-items-sm-start
            "
          >
            <img :src="card.image" alt="image" />
            <h3>{{ card.title }}</h3>
            <p>
              {{ card.description }}
            </p>
          </div>

          <div
            v-else
            class="
              d-flex
              flex-xxl-row-reverse
              flex-xl-row-reverse
              flex-lg-row-reverse
              flex-md-row-reverse
              flex-sm-column
              flex-column
              align-items-start
              align-items-xxl-center
              align-items-xl-center
              align-items-lg-center
              align-items-md-center
              align-items-sm-start
            "
          >
            <img :src="card.image" alt="image" />
            <h3>{{ card.title }}</h3>
            <p>
              {{ card.description }}
            </p>
          </div>
        </div>
        <!-- giving horizontal rule to the last element -->
        <hr v-if="card.last != true" />
      </div>
    </div>
    <br />
    <br />
  </div>
</template>

<script>
import AOS from "aos";
import "aos/dist/aos.css";
export default {
  data() {
    return {
      cards: [
        {
          image: "services-how-we-do-it/requirement-analysis.png",
          title: "Requirement Analysis",
          description:
            "Encanto Technologies takes great pride in the meticulous process of requirement analysis. Our experts are very thorough and professional in gathering the correct requirement, remove ambiguity, clarity, and documentation as the prerequisite to moving forward for any project. Good product delivery is the forte that distinguishes us from other companies. We have invested our time, effort, and money in making the requirement analysis process smooth and effective.",
          dir: "forward",
        },
        {
          image: "services-how-we-do-it/design-docu.png",
          title: "Design Document & Prototype",
          description:
            "Prototyping is termed as the process of developing a working imitation of a product or system that must be critically engineered. We have a smooth process of designing documents and prototyping. It provides a small-scale replica of the product or system which can be used for obtaining customer feedback/thoughts.",
          dir: "reverse",
        },
        {
          image: "services-how-we-do-it/development.png",
          title: "Development",
          description:
            "Development refers to the actual writing of the program. From a small project executed by a single engineer to a large and complex project written and worked by several teams, defines development. We use an Access Control or Source Code Management application for this type of phase. These systems enable developers to track changes to the code. It also ensures compatibility between different team projects and makes sure target goals are achieved.",
          dir: "forward",
        },
        {
          image: "services-how-we-do-it/identify-defective.png",
          title: "Identify Defects & Resolve Bugs",
          description:
            " We are very meticulous in identifying defects and quick resolution to bugs. Bugs and defects can cause massive losses to the companies, quick resolution, and quick turnaround can save millions of dollars. We have a detailed process while developing any product anticipating different types of defects or bugs. These defects are critically analyzed, identified, and resolved instantly throughout the development process.",
          dir: "reverse",
        },
        {
          image: "services-how-we-do-it/technical-support.png",
          title: "Production & Technical Support",
          description:
            "At Encanto Technologies, we strive to provide our clients with the best technical and production support on all our products and services. We have experts for various domains solving issues in almost every aspect related to the software development lifecycle, to ensure the quality and timely delivery of work. For the smooth operation of your business, we at Encanto have a 24*7 technical support team who are dedicated to providing quick service to clients.",
          dir: "forward",
          last: true,
        },
      ],
    };
  },
  created() {
    AOS.init();
  },
  name: "howWeDoIt",
  props: {},
};
</script>

<style scoped>
/* hr line */
hr {
  border: 1px solid rgba(0, 0, 0, 0.7);
  margin-right: 80px;
}

/* these step1... are used to individually place the steps circles acc to the curved line */
.step1 {
  margin-top: 1vw;
}
.step2 {
  margin-top: 6.5vw;
}
.step3 {
  margin-top: .5vw;
}
.step4 {
  margin-top: 7vw;
}
.step5 {
  margin-top: 5.5vw;
}

.process p {
  font-size: 16px;
  font-weight: 600;
  margin-top: 15px;
  color: rgb(56, 56, 56);
  text-align: left;
}
.number {
  font-size: 22px;
  font-family: Montserrat;
  font-weight: 600;
  color: rgba(92, 92, 92, 0.726);
}
/* process is the collection of all the steps circles */
.process {
  width: 80vw;
  margin-top: 110px;
  height: 40vh;
  background: transparent url(../../../public/steps-bg.png) center 20% / auto
    no-repeat scroll;
  justify-content: space-between;
  background-blend-mode: alpha;
  background-size: contain;
  margin-top: 8vw;
}
.containerrr {
  margin-top: 40px;
  width: 100vw;
  height: 50vh;
}
/* the bg text is styled by .stepstext */
.stepstext {
  font-size: 25vw;
  z-index: -10;
  position: absolute;
  font-weight: 900;
  color: #0947a31f;
  font-family: "Helvetica";
}

/* each step has this style */
.step {
  background: #f1f1f1d7;
  display: inline-block;
  width: 70px;
  height: 70px;
  border: 2px solid #ff595e;
  border-radius: 50% 50% 50% 50%;
}
.step img {
  transition: all 0.2s ease;
}
.step:hover img {
  transform: scale(1.2);
}
.containerr {
  margin: 8vh 0;
}

/* it is the heading of the steps section */
.row1 {
  height: 10vh;
  margin-bottom: -60px;
}
.row1 h1 {
  width: 60vw;
  color: rgb(58, 58, 58);
  text-align: left;
  font-weight: bold;
  text-align: center;
}
.row1 h3 {
  color: rgba(0, 0, 0, 0.6);
  margin: 10px 0;
}


.how-we-parent {
  margin-top: 150px !important;
}
.howwedoit {
  width: 80vw;
  margin-top: 30px;
  margin-left: 80px;
}
.cardd {
  background-color: rgba(0, 0, 0, 0);
  padding: 20px;
  width: 90%;
  margin: 50px 0 80px 0 !important;
}
.cardd p {
  font-size: 18px;
  font-weight: 500;
  width: 65%;
  margin-bottom: 0 !important;
  color: #0947a3c5;
}
.cardd h3 {
  width: 200px;
  margin: 0 40px !important;
  color: rgb(58, 58, 58);
  font-weight: bold;
}
.howwedoit .cardd img {
  height: 70px;
  width: 70px;
  opacity: 0.8;
}
@media (max-width: 992px) {
  .step1 {
    margin-top: 50px;
  }
  .howwedoit {
    width: 85vw;
    margin-left: 60px;
  }
  .cardd {
    background-color: rgba(0, 0, 0, 0);
    padding: 20px;
    width: 90%;
  }
}
@media (max-width: 892px) {
  .step1 {
    margin-top: 70px;
  }
}
@media (max-width: 768px) {
  .stepstext {
    font-size: 6rem;
    writing-mode: vertical-rl;
    text-orientation: upright;
  }
  .cardd p {
    width: 90%;
  }
  .cardd h3 {
    width: auto;
    margin: 20px 0 !important;
  }
  .howwedoit {
    width: 90vw;
    margin-left: 20px;
  }
  .cardd {
    background-color: rgba(0, 0, 0, 0);
    padding: 20px;
    width: 100%;
    margin: 40px 0 60px 0 !important;
  }
  .step {
    margin: 10px 30px 0 30px !important;
    display: inline-block;
    width: 50px;
    height: 50px;
    border: 2px solid #f35444;
    border-radius: 50% 50% 50% 50%;
  }
  .stepstitle {
    text-align: center !important;
    margin: -10px 0 30px 0;
    color: rgb(42, 42, 42) !important;
    font-weight: bold !important;
    font-size: 25px;
  }
  
  /* changing the steps background image to vertical */
  .process {
    width: 65vw;
    margin-top: 0px !important;
    height: 90vh;
    background: transparent url(../../../public/steps-bg-ver.png) 65% 45% / auto
      no-repeat scroll;
    background-size:125% 70%;
    justify-content: center;
  }
  .containerrr {
    margin-top: 80px;
    width: 100vw;
    height: 90vh;
    background: transparent;
  }
  .step {
    float: right;
  }
  .step2 {
    flex-direction: row-reverse !important;
  }
  .step4 {
    flex-direction: row-reverse !important;
  }
  .step,
  .step1,
  .step2,
  .step3,
  .step4,
  .step5 {
    margin-top: 0 !important;
    margin-bottom: 10px;
    padding: 20px;
  }
  .process p {
    font-size: 24px;
    margin-top: 20px;
  }
  .number {
    font-size: 30px;
    font-weight: 600;
    margin-bottom: 10px;
    height: 100px;
  }
  .row1 h1,
  .row1 h3 {
    width: 70vw;
    color: rgba(0, 0, 0, 0.6);
  }
  .how-we-parent {
    margin-top: -50px !important;
  }
}
@media (max-width: 575px) {
  .stepstext {
    font-size: 5.5rem;
  }
  .cardd p {
    width: 105%;
  }
  .cardd h3 {
    width: auto;
    margin: 20px 0 !important;
  }
  .how-we-parent {
    margin-top: 30px !important;
  }
  .howwedoit {
    width: 90vw;
    margin-left: 20px;
  }

  .cardd {
    background-color: rgba(0, 0, 0, 0);
    padding: 20px;
    width: 90%;
    margin: -10px 0 40px 0 !important;
  }

  .row1 h1,
  .row1 h3 {
    width: 80vw;
  }
  .containerrr {
    height: 80vh;
  }
  .process {
    width: 78vw;
    background: transparent url(../../../public/steps-bg-ver.png) 80% 45% / auto
      no-repeat scroll;
    background-size: 115% 70%;
  }
}
@media (max-width: 499px) {
  .process p {
    font-size: 20px;
  }
  .number {
    font-size: 25px;
  }
  .cardd p {
    font-size: 14px;
  }
  .cardd h3 {
    font-size: 1.2rem;
  }
  .process {
    width: 86vw;
    background: transparent url(../../../public/steps-bg-ver.png) 0% 45% / auto
      no-repeat scroll;
    background-size: 95% 76%;
  }
}
</style>
