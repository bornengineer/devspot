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
        WHO WE ARE
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
          src="../assets/final-who-we-comp.webp"
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
        "We are a client-centric organization, committed to relentlessly working for the betterment of our clientele from around the globe. Our expertise in Web development, Mobile Application development, among other services attracted client’s from around the globe. Client satisfaction remains our top priority and a cornerstone of our company values. We are among the top companies with the highest retention rates that distinguish us from other competitors. We strongly believe in the philosophy of making our customers happy. It rewarded us big time and encouraged us to serve our clientele more profoundly. Team Encanto Technologies has managed to bloom against all odds owing to the persistent efforts and dedication of our core team endeavoring the best deliverables to global clients.",
      whoWeAreContent2:
        "Encanto Technologies serves clients with the best Web Development, Mobile Application Development, among other services. We not only do magic with codes but also serve the best post-sale customer services. We don’t leave our clients in the lurch as our team gets rid of even the most complex issues at lightning speed. We have a dedicated team of experienced developers for resolving bugs, post-sale custom requirements, quick fixes, and pushing new changes, among other services. Timely resolving client queries helped a lot in gaining clients’ trust and new references. We believe in creating a lasting impression with a firm belief in the “you grow, we grow” philosophy. We Code, We Value Clients, We Do Wonder; as simple as that.",
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
  margin-bottom: -50px;
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
