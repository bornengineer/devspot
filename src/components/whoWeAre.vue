<template>
  <div
    data-aos="fade"
    class="
      containerr
      d-flex
      flex-column
      justify-content-center
      text-center
      flex-column
      align-items-center
      px-5
    "
  >
    <div class="start d-flex flex-column align-items-center">
      <h3 data-aos="fade-right" data-aos-delay="300" data-aos-duration="1000">
        Why you need
      </h3>
      <br />
      <p data-aos="fade-right" data-aos-delay="300" data-aos-duration="1000">
        {{ whoWeAreContent1 }}
      </p>

      <p data-aos="fade-right" data-aos-delay="300" data-aos-duration="1000">
        {{ whoWeAreContent2 }}
      </p>
      <br />
      <div
        data-aos="fade-right"
        data-aos-delay="300"
        data-aos-duration="1000"
        class="gif"
      >
        <img
          style="
            width: 100% !important;
            height: 100% !important;
            margin-top: -80px;
          "
          src="../assets/final-who-we-comp.gif"
          alt="gif"
        />
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  </div>
</template>

<script>
import AOS from "aos";
import "aos/dist/aos.css";

export default {
  data() {
    return {
      whoWeAreContent1:
        "",
      whoWeAreContent2:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
    };
  },
  created() {
    AOS.init();
  },
};
</script>

<style scoped>
.containerr {
  width: 100vw;
  margin-bottom: -150px;
}
.gif {
  width: 50vw;
}
img {
  height: 50px;
}
.start {
  width: 70vw;
}
.start h3 {
  font-weight: bold;
  font-size: 2.5rem;
  color: #00000099;
}
p {
  /* color: #0947a3; */
  color: #3A3A3A;
  font-size: 1.2rem;
}
@media (max-width: 991px) {
  .start {
    width: 60vw;
  }
  p {
    font-size: 1.2rem;
  }
  .start h3 {
    font-size: 2.2rem;
  }
  img {
    margin-left: 10px !important;
  }
  .gif {
    width: 60vw;
  }
}

@media (max-width: 767px) {
  .start {
    width: 70vw;
  }
  p {
    font-size: 1.2rem;
  }
  .start h3 {
    font-size: 2rem;
  }
  .gif {
    width: 70vw;
  }
}
@media (max-width: 575px) {
  .gif img {
    max-width: 90vw !important;
    height: auto !important;
    margin-left: -10px !important;
  }
  .start {
    width: 80vw;
  }
  p {
    font-size: 1.2rem;
  }
  .start h3 {
    font-size: 1.8rem;
  }
  .gif {
    width: 80vw;
  }
}
@media (max-width: 500px) {
  .start {
    width: 80vw;
    /* margin-left: 1rem; */
  }
  p {
    font-size: 1rem;
  }
  .start h3 {
    font-size: 1.6rem;
  }
  .gif img {
    margin-top: -50px !important;
  }
  .gif {
    width: 85vw;
    margin-left: 30px !important;
  }
}
</style>
