<template>
  <!-- again mentioning that "containerr" name is given to avoid bootstrap's class effect -->
  <div class="containerr">
    <div
      class="
        roww
        d-flex
        flex-xxl-row
        flex-xl-row
        flex-lg-row
        flex-md-row
        flex-sm-column
        flex-column
        justify-content-center
        align-items-center
      "
    >
      <div
        class="
          gif-cont
          d-flex
          flex-xxl-row
          flex-xl-row
          flex-lg-row
          flex-md-row
          flex-sm-column
          flex-column
          justify-content-center
          align-items-center
        "
      >
        <!-- this is written to give the tilt effect to image -->
        <!-- v-tilt="{ speed: 300, perspective: 500, scale: 1.15, reverse: true }" -->
        <div class="gif d-flex justify-content-end align-items-center">
          <!-- binding src to use it in loop -->
          <img
            data-aos="zoom-in"
            data-aos-delay="100"
            data-aos-duration="1000"
            :src="image"
            alt="technology image"
          />
        </div>
      </div>
      <div
        class="
          heading
          d-flex
          justify-content-center
          align-items-center
          flex-column
          text-center
        "
      >
        <h1 data-aos="fade-right" data-aos-delay="100" data-aos-duration="1000">
          {{ headingtext }}
        </h1>
        <!-- double moustache syntax is used to use the variables defined in data() -->
        <p data-aos="fade-right" data-aos-delay="100" data-aos-duration="1000">
          "{{ quote }}"
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // here as it is a child component i am using props to get the data from parent component i.e (webU, appU etc)
  props: {
    image: String,
    headingtext: String,
    technology: String,
    quote: String,
  },
};
</script>

<style scoped>
.containerr {
  margin-top: 2vh;
}
.roww {
  margin-top: 70px;
  height: 60vh;
  width: 100vw;
}
.heading h1 {
  width: 40vw;
  line-height: 1.3;
  color: rgb(58, 58, 58);
  font-weight: bold;
}
.heading p {
  font-size: 1.4rem;
  color: rgba(68, 68, 68, 0.7);
}
.heading {
  width: 40vw;
  height: 50vh;
  margin-top: 30px;
}
.gif-cont {
  width: 50vw;
  height: 100%;
  margin-right: -60px;
  margin-left: -60px;
  display: flex;
  justify-content: end;
  align-items: center;
}

.gif {
  width: 400px;
  height: 52%;
  margin-right: 20px;
}
.gif img {
  width: 100%;
  border-radius: 20px;
}
@media (max-width: 992px) {
  .gif {
    width: 320px;
  }
  .gif-cont {
    margin-right: -20px;
    margin-left: 20px;
  }
}
@media (max-width: 768px) {
  .gif {
    justify-content: center !important;
    width: 320px;
    margin: 0 auto 50px auto;
  }
  .gif-cont {
    width: 100vw;
    margin-right: 0px;
    margin-left: 0px;
  }
  .heading h1 {
    margin: 30px;
    width: 72vw;
  }
  .heading {
    width: 100vw;
    height: 50vh;
    justify-content: center !important;
  }
  .heading p {
    font-size: 1.2rem;
    color: rgba(68, 68, 68, 0.7);
  }
}
@media (max-width: 576px) {
  .gif img {
    height: 30vh;
    width: 40vh;
  }
  .heading h1 {
    margin: 30px;
    width: 80vw;
  }
  .heading {
    width: 80vw;
    height: 80vh;
  }
  .heading p {
    font-size: 1.1rem;
    color: rgba(68, 68, 68, 0.7);
  }
}
@media (max-width: 499px) {
  .gif img {
    height: 53vw;
    width: 69vw;
  }
  .heading h1 {
    margin: 30px;
    width: 80vw;
    margin-left: 50px;
  }
  .heading {
    width: 80vw;
    height: 50vh;
  }
}
</style>
