<template>
  <navbar />
  <contactSidebar />
  <socialIcons />
  <hamburger />
  <particles />

  <div
    data-aos="fade"
    class="
      container-fluidd
      d-flex
      justify-content-center
      d-flex
      justify-content-center
      align-items-center
    "
  >
    <div data-aos="fade" class="about d-flex align-items-center flex-column">
      <div
        class="about-banner--content d-flex align-items-center flex-column mt-5"
      >
        <h3
          class=""
          style="font-weight: bold"
          data-aos="zoom-in"
          data-aos-delay="300"
          data-aos-duration="1000"
        >
          About Us
        </h3>
        <h4
          class=""
          style="font-weight: bold; font-size: 2rem"
          data-aos="zoom-in"
          data-aos-delay="300"
          data-aos-duration="1000"
        >
          We, at Encanto Technologies, apply neuromarketing <br />
          and behavioral science to design, digitize<br />
          and grow your business.
        </h4>

        <div
          data-aos="fade"
          class="images d-flex justify-content-between align-items-end"
        >
          <img
            data-aos="fade-right"
            data-aos-delay="300"
            data-aos-duration="1000"
            style="
              height: 260px !important ;
              margin-left: 80px;
              opacity: 1;
              margin-top: -100px;
            "
            src="../assets/about-page/about-us-02.png"
            alt=""
          />
          <img
            data-aos="fade-left"
            data-aos-delay="300"
            data-aos-duration="1000"
            style="
              height: 280px !important ;
              margin-right: 80px;
              opacity: 1;
              margin-top: -100px;
            "
            src="../assets/about-page/about-us-01.png"
            alt=""
          />
        </div>
      </div>

      <div
        data-aos="fade-right"
        data-aos-delay="300"
        data-aos-duration="1000"
        class="text-cont"
      >
        <h3 style="text-align: left; margin-bottom: 30px; font-size: 2.2rem">
          About Us
        </h3>
        <p>
          We do magic with codes! Encanto Technologies is one of the most
          vibrant and versatile companies making wonders for global clients.
          Encanto technologies maintain the reputation of executing most complex
          projects at ease. We take immense pride to serve all the IT, web
          development, and software development requirements under one roof. Our
          core team includes the world’s best brains that magically deliver the
          desired products to meet all your custom requirements. Our developed
          smart solutions and products are highly acknowledged around the globe.
          Client satisfaction remains the cornerstone of Encanto Technologies
          that motivates us to serve our prestigious clients. Our clientele
          includes globally renowned players from various industries such as
          healthcare, automobile, ICT, consumer electronics, food and beverages,
          chemical, among other domains. <br /><br />
          We take great pride in our team and the kind of process we must
          deliver the desired products and services. We have the best brains
          that are nurtured under a cohesive work environment. Our work culture
          remains very sacred that helps us to remain professional and
          competitive. We value our employees and reward them to bring
          innovation, develop smart solutions and optimize businesses. We are
          fortunate to have the most talented folks that deliver quality
          projects, foster innovation, and inculcate values in our company.
          Encanto technologies have mastered the art of executing the desired
          products with comprehensive after-sales services. It really helped us
          to gain the trust of our valuable clientele that keep on coming or
          referring us to others.<br /><br />
          Encanto technologies have a significant presence in the US, Canada,
          Germany, UK, Korea, Japan, Thailand, India, and other GCC economies.
          Our journey is a roller coaster ride, from a group of individuals to a
          team of 100+ developers we have gracefully handled our success. We
          managed to scale up to serve the global clientele with more energy and
          zest. The sanctity of our organization and the quality work culture
          are the result of years of discipline, perseverance, and patience. We
          endeavor to continue serving our clients with utmost sincerity and
          professionalism.
        </p>
      </div>

      <!-- the old design is commented out -->
      <!-- <div class="values-etc d-flex flex-row justify-content-center">
        <div
          data-aos="flip-left"
          data-aos-delay="300"
          data-aos-duration="1000"
          class="value-box vision mx-3"
        >
          <h3 style="color: #ff5d7d">VISION</h3>
          <p>
            To be the world's best and most trusted human experience design
            company
          </p>
        </div>
        <div
          data-aos="flip-left"
          data-aos-delay="500"
          data-aos-duration="1000"
          class="value-box mission mx-3"
        >
          <h3 style="color: #5857f9">MISSION</h3>
          <p>To enhance and elevate human interaction</p>
        </div>
        <div
          data-aos="flip-left"
          data-aos-delay="700"
          data-aos-duration="1000"
          class="value-box values mx-3"
        >
          <h3 style="color: #9f26f3">VALUES</h3>
          <p>To pursue excellence through dedicated teamwork</p>
        </div>
      </div> -->

      <!-- Mission, vision and values container -->
      <div class="mission-containerr">
        <div
          v-if="missionVisible == true"
          class="
            blank
            d-flex
            justify-content-center
            align-items-center
            flex-column
            d-xxl-block d-xl-block d-lg-block d-md-block d-sm-block d-none
          "
        ></div>
        <div class="parent1">
          <!-- here i m implementing the mouseover vue event to make the blur backdrop visible 
            when we hover on the content div -->
          <div
            @mouseover="missionVisible = true"
            @mouseleave="missionVisible = false"
            class="content"
          >
            <h2>Our Vision</h2>
            Our vision is to disrupt the coding industry with revolutionary
            products and services. Encanto Technologies is a group of maverick
            coders that nurtures every coder like a soldier. Our dedicated
            experts in R&D, endeavor to explore products in healthcare,
            automotive, banking, and finance, among other domains to stay
            competitive. We at Encanto infuse discipline, perseverance,
            dedication in our team that helps them to boost their aplomb and
            optimize their productivity. Our Mantra in bid to achieve our
            vision-<br />
            - Be patient, stubborn, and always have a never give up approach.<br />
            - Explore new opportunities that help to optimize the business
            value, ensure growth and sustainability using our core
            competencies.<br />
            - Delight customers, employees, and partners.<br />
            - Global footprints to expand, scale and grow.<br />
            - Break the shackles and orthodox corporate culture. We have the
            most vibrant, transparent, and lucrative ecosystem compared to our
            peers.
          </div>
          <!-- i had to give outer border the same text to make it behave same as the content div -->
          <div class="outerborder1">
            <h2>Our Vision</h2>
            Our vision is to disrupt the coding industry with revolutionary
            products and services. Encanto Technologies is a group of maverick
            coders that nurtures every coder like a soldier. Our dedicated
            experts in R&D, endeavor to explore products in healthcare,
            automotive, banking, and finance, among other domains to stay
            competitive. We at Encanto infuse discipline, perseverance,
            dedication in our team that helps them to boost their aplomb and
            optimize their productivity. Our Mantra in bid to achieve our
            vision-<br />
            - Be patient, stubborn, and always have a never give up approach.<br />
            - Explore new opportunities that help to optimize the business
            value, ensure growth and sustainability using our core
            competencies.<br />
            - Delight customers, employees, and partners.<br />
            - Global footprints to expand, scale and grow.<br />
            - Break the shackles and orthodox corporate culture. We have the
            most vibrant, transparent, and lucrative ecosystem compared to our
            peers.
          </div>
        </div>

        <!-- giving 100% width to the second parent to align it to the right -->
        <div
          class="w-xxl-100 w-xl-100 w-lg-100 w-md-40 d-flex justify-content-end"
        >
          <div class="parent2">
            <!-- here i m implementing the mouseover vue event to make the blur backdrop visible 
            when we hover on the content div -->
            <div
              @mouseover="missionVisible = true"
              @mouseleave="missionVisible = false"
              class="content"
            >
              <h2>Our Mission</h2>
              At Encanto Technologies our mission resonates with our endeavor to
              convert the most complex problems of our clients into simpler
              solutions. Our team of experts invests their precious time in
              understanding the requirement of the clients. Identify the scope,
              brainstorm, chose the best solution, implementation is the ideal
              procedure we follow to provide the best possible solutions to a
              global clientele.
            </div>
            <div class="outerborder2">
              <h2>Our Mission</h2>
              At Encanto Technologies our mission resonates with our endeavor to
              convert the most complex problems of our clients into simpler
              solutions. Our team of experts invests their precious time in
              understanding the requirement of the clients. Identify the scope,
              brainstorm, chose the best solution, implementation is the ideal
              procedure we follow to provide the best possible solutions to a
              global clientele.
            </div>
          </div>
        </div>

        <div class="parent3">
          <!-- here i m implementing the mouseover vue event to make the blur backdrop visible 
            when we hover on the content div -->
          <div
            @mouseover="missionVisible = true"
            @mouseleave="missionVisible = false"
            class="content"
          >
            <h2>Our Values</h2>
            Encanto Technologies have a firm belief in equality, client
            satisfaction, and merit. We value our clients and our team members,
            and it reflects in our culture and deliverables. Client satisfaction
            which is one of the cornerstones of our foundation motivates us to
            push ourselves and make the clients delightful. At Encanto, we also
            nurture our resources to bring their best out of them. We reward and
            respect the young talents that deserve monetary and non-monetary
            benefits. We don’t hesitate to offer exponential growth to deserving
            candidates. Our values-led us to strengthen our roots within the
            organization and around the globe.
          </div>

          <div class="outerborder3">
            <h2>Our Values</h2>
            Encanto Technologies have a firm belief in equality, client
            satisfaction, and merit. We value our clients and our team members,
            and it reflects in our culture and deliverables. Client satisfaction
            which is one of the cornerstones of our foundation motivates us to
            push ourselves and make the clients delightful. At Encanto, we also
            nurture our resources to bring their best out of them. We reward and
            respect the young talents that deserve monetary and non-monetary
            benefits. We don’t hesitate to offer exponential growth to deserving
            candidates. Our values-led us to strengthen our roots within the
            organization and around the globe.
          </div>
        </div>
      </div>
    </div>
  </div>
  <footer1 />
  <footerMarquee />
</template>

<script>
import contactSidebar from "@/components/contactSidebar.vue";
import socialIcons from "@/components/socialIcons.vue";
import navbar from "@/components/navbar.vue";
import particles from "@/components/particles.vue";
import hamburger from "@/components/hamburger.vue";
import footerMarquee from "@/components/footerMarquee.vue";
import footer1 from "@/components/footer1.vue";
import AOS from "aos";
import "aos/dist/aos.css";

export default {
  created() {
    AOS.init();
  },
  name: "About",
  data() {
    return {
      missionVisible: false,
    };
  },
  components: {
    socialIcons,
    hamburger,
    footerMarquee,
    footer1,
    particles,
    navbar,
    contactSidebar,
  },
};
</script>

<style scoped>
.blank {
  height: 180vh;
  width: 100vw;
  position: absolute;
  z-index: 99999;
  background: #00000000;
  top: 100vh;
  /* this will give the blue effect to the blank backdrop */
  -webkit-filter: blur(1px);
  -moz-filter: blur(1px);
  -o-filter: blur(1px);
  -ms-filter: blur(1px);
  backdrop-filter: blur(1px);
}

.mission-containerr {
  margin: 100px 0;
  width: 100vw;
}
.parent1 {
  width: 50vw;
  height: 490px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 50px;
  margin-bottom: -110px;
  margin-left: 75px;
}
.parent2 {
  width: 50vw;
  height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 75px;
}
.parent3 {
  width: 50vw;
  height: 370px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 50px;
  margin-top: -110px;
  margin-left: 75px;
}
.content {
  background: #f5f0e1;
  z-index: 120;
  position: absolute;
  width: 40vw;
  padding: 40px;
  text-align: left;
  box-shadow: 0px 0px 15px 1px black;
  transition-duration: 0.2s;
  transition-property: transform;
  cursor: grab;
}

.parent1 .content:hover {
  transform: scale(1.05);
  z-index: 99999;
}
.parent2 .content:hover {
  transform: scale(1.05);
  z-index: 99999;
}
.parent3 .content:hover {
  transform: scale(1.05);
  z-index: 100000;
}

.content h2 {
  color: #0947a3c5;
}
.outerborder1 {
  width: 40vw;
  border: 5px solid rgba(0, 0, 0, 0.4);
  position: relative;
  right: 30px;
  bottom: 30px;
  padding: 40px;
  text-align: left;
  z-index: -10;
}
.outerborder2 {
  width: 40vw;
  border: 5px solid rgba(0, 0, 0, 0.4);
  position: relative;
  top: 30px;
  left: 30px;
  padding: 40px;
  text-align: left;
  z-index: -10;
}
.outerborder3 {
  width: 40vw;
  border: 5px solid rgba(0, 0, 0, 0.4);
  position: relative;
  top: 30px;
  left: -30px;
  padding: 40px;
  text-align: left;
  z-index: -10;
}
.outerborder1,
.outerborder2,
.outerborder3 {
  color: transparent;
}

.about {
  width: 100%;
}

.about-banner--content h3 {
  margin-top: 65px;
  margin-bottom: 20px;
  color: #0947a3c5;
  width: 70vw;
}
.about-banner--content h4 {
  font-size: 35px;
  font-weight: bold;
  margin-bottom: 0px;
  color: #00000099;
  width: 75%;
  z-index: 10;
}
.about-banner--content {
  height: 550px !important;
  width: 100%;
  text-align: center;
}
.images {
  width: 100%;
}
body {
  margin: 100px;
}
span {
  font-size: 2.5rem;
  font-weight: bold;
}

h3 {
  text-align: center;
  font-weight: 800;
  margin-top: -40px;
  color: #00000099;
}
.text-cont p {
  font-size: 1.2rem;
  text-align: left;
  color: #3a3a3a;
  font-weight: 500;
}
.text-cont {
  width: 80vw;
}
/* .container-fluidd name is used to avoid the default behavior of bootstrap class */
.container-fluidd {
  text-align: center;
  width: 100%;
  padding: 20px 20px 40px 20px;
  margin-top: 40px;
  margin-bottom: 80px;
  border-radius: 50px;
}

/* old design css */
/* .value-box {
  width: 25vw;
  margin-top: 40px;
  padding: 80px 25px 20px 25px;
  background: rgba(0, 0, 0, 0.8);
  border-radius: 20px;
  min-width: 340px;
  min-height: 240px;
}
.values-etc {
  margin-top: 60px;
  display: flex;
  flex-wrap: wrap;
}
.values-etc h3 {
  text-align: left;
  font-weight: bold;
}
.values-etc p {
  color: rgb(255, 255, 255);
  font-size: 1.5rem;
  text-align: left;
  font-weight: 500;
} */

@media (max-width: 1300px) {
  .parent1,
  .parent2,
  .parent3 {
    transform: scale(0.95);
  }
}
@media (max-width: 1150px) {
  .parent1,
  .parent2,
  .parent3 {
    transform: scale(0.9);
  }
}
@media (max-width: 992px) {
  .content {
    width: 65vw;
  }
  .outerborder1,
  .outerborder2,
  .outerborder3 {
    display: none;
  }
}
@media (max-width: 768px) {
  .mission-containerr {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  .parent1 {
    padding-left: 0px;
    margin-left: 0px !important;
    margin-bottom: -32px;
  }
  .parent2 {
    padding-right: 0px;
    margin-right: 0px !important;
  }
  .parent3 {
    padding-left: 0px;
    margin-left: 0px !important;
    margin-top: -36px;
  }
  .content {
    width: 75vw;
  }
  .parent1,
  .parent2 {
    margin-top: 0px !important;
  }
  .parent3 {
    margin-bottom: 0px !important;
  }
  .outerborder1,
  .outerborder2,
  .outerborder3 {
    display: none;
  }
  .images img {
    opacity: 1 !important;
    width: 300px !important;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) !important;
  }
  .about-banner--content {
    display: flex;
    height: 650px !important ;
    align-items: center;
  }
  .about-banner--content h3 {
    margin-top: -20px;
  }
  .about-banner--content h4 {
    width: 80%;
    font-size: 30px !important;
  }
  .images img:nth-child(1) {
    width: 100%;
    margin-left: 0px !important;
    margin-top: 40px !important;
  }
  .images img:nth-child(2) {
    display: none;
  }
  .text-cont h3 {
    padding: 10px;
  }
}

@media (max-width: 618px) {
  .parent2 {
    height: 450px;
  }
}

@media (max-width: 576px) {
  .parent2 {
    margin-bottom: -20px;
  }
  .content {
    width: 84vw;
  }
  .about-banner--content {
    height: 550px !important ;
  }
  .about-banner--content h4 {
    width: 90%;
    font-size: 20px !important;
  }
  .container-fluid {
    padding: 20px 0px 40px 25px;
    width: 95%;
  }
  p {
    color: rgb(0, 0, 0);
    margin: 20px 10px 50px 0px;
    font-size: 1rem;
  }
  .text-cont p {
    font-size: 1.3rem;
  }
  .value-box {
    margin-left: 0px !important;
    margin-right: 0px !important;
  }
}
@media (max-width: 499px) {
  .content {
    width: 100vw;
    padding-right: 25px;
    padding-left: 25px;
  }
  .parent1 {
    padding-left: 0px;
    margin-left: 0px !important;
    margin-bottom: 102px;
  }
  .parent2 {
    padding-right: 0px;
    margin-right: 0px !important;
  }
  .parent3 {
    padding-left: 0px;
    margin-left: 0px !important;
    margin-top: 76px;
  }
  .text-cont p {
    font-size: 1rem;
    width: 100%;
    margin-bottom: 80px;
  }
}
</style>
