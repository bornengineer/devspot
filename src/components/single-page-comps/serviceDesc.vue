<template>
  <div
    class="
      containerr
      d-flex
      justify-content-center
      align-items-center
      flex-column
    "
  >
    <div
      v-for="(service, i) in services"
      :key="i"
      class="
        service-loop
        d-flex
        justify-content-center
        align-items-center
        flex-row
      "
    >
      <div
        v-if="!service.reverse"
        class="
          row-forward
          d-flex
          flex-xxl-row
          flex-xl-row
          flex-lg-row
          flex-md-row
          flex-sm-column-reverse
          flex-column-reverse
          align-items-center
        "
      >
        <div
          class="
            text
            d-flex
            flex-column
            justify-content-center
            align-items-start
          "
        >
          <h1>{{ service.title }}</h1>
          <p>{{ service.description }}</p>
          <formModal btntext="Get Quote" btncolor="#2c2c2c" color="white" />
        </div>
        <div class="image">
          <img :src="service.image" alt="service image" />
        </div>
      </div>
      <div
        v-if="service.reverse"
        class="
          d-flex
          flex-column-reverse
          flex-xxl-row-reverse
          flex-xl-row-reverse
          flex-lg-row-reverse
          flex-md-row-reverse
          flex-sm-column-reverse
          flex-column
          align-items-center
        "
      >
        <div
          class="
            text
            d-flex
            flex-column
            justify-content-center
            align-items-start
          "
        >
          <h1>{{ service.title }}</h1>
          <p>{{ service.description }}</p>
          <formModal btntext="Get Quote" btncolor="#2c2c2c" color="white" />
        </div>
        <div class="image">
          <img :src="service.image" alt="service image" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import formModal from "@/components/single-page-comps/formModal.vue";

export default {
  components: { formModal },
  data() {
    return {
      services: [
        {
          title: "Mobile App Development",
          image: "https://info.assleit.com/images/mobile-app-development.png",
          description:
            "A blink is all you require to realise how every nook and corner of your digital life is build upon the development of mobile applications. A mobile application , commonly referred to as an app, gets your users an experience like that on a PC. With our industry rich experience in mobile app development we build your required application with the right methodology and professionalism so that the mobile application stands out in the competition. We are a renowned mobile app development company that strive on to provide a smooth run for its users. From the diversified branches of app development we make sure that our products remain unbiased and cater to every little requirement of our clients. Join us in developing mobile applications for you to tap the modern day calls of the industry.",
        },
        {
          title: "Website Development",
          image: "https://info.assleit.com/images/it.jpg",
          description:
            "Website Design and Development From the very beginning when the websites were created it came associated with the idea of web designing and development. AssleIT Technology, being one of the reputed web development companies takes pride in successful creations of several websites under the umbrella term of Web Designing and Development. We emphasize our services under the diversified branches of Web development that deals with the functioning of the website whereas Web designing deals with the outlook of a website. Our solutions pass through several quality checks and run only after the final approval of our clients. Any updation in the features for web development or designing is adapted to make your website user-friendly highlight the best performing activities of our clients.",
          reverse: true,
        },
      ],
    };
  },
};
</script>

<style scoped>
.containerr {
  width: 100vw;
  background: rgb(223, 223, 223);
}
button {
  border: none;
  background: #2c2c2c;
  padding: 5px 10px;
  border-radius: 10px;
  width: 200px;
  color: rgb(204, 204, 204);
  transition: all 0.3s ease;
}
button:hover {
  color: rgb(255, 255, 255);
  background: rgb(53, 53, 53);
}
.service-loop {
  width: 100vw;
  padding: 40px 100px;
}
.text p {
  font-size: 1rem;
  line-height: 26px;
}
image {
  padding: 30px;
  width: 20vw;
}
img {
  width: 250px;
  margin: 40px 80px 40px 80px;
}

@media (max-width: 992px) {
  img {
    height: 220px;
    margin: 20px 40px 20px 40px;
  }
  .service-loop {
    width: 100vw;
    padding: 40px 50px;
  }
}
@media (max-width: 576px) {
  img {
    height: 180px;
    margin: 10px 20px 10px 20px;
  }
    .service-loop {
    padding: 40px 20px;
  }
}
</style>