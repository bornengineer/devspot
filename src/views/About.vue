<template>
  <navbar />
  <contactSidebar />
  <socialIcons />
  <hamburger />
  <particles />
  <h1>Available Prototypes</h1>
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
  <newcards :content="content" />
  
</div>
<footer1 />
<footerMarquee />
</template>

<script>
  import newcards from "@/components/services-comps/newcards.vue";
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
  components: {
    newcards,
    socialIcons,
    hamburger,
    footerMarquee,
    footer1,
    particles,
    navbar,
    contactSidebar,
  },
  data() {
    return {
      missionVisible: false,
      content: [
        {
          heading: "Sample Prototype 1",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
          icon: "services-specific-icons/ios-spec.png",
        },
        {
          heading: "Sample Prototype 2",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
          icon: "services-specific-icons/android-spec.png",
        },
        {
          heading: "Sample Prototype 3",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
          icon: "services-specific-icons/flutter-spec.png",
        },
        {
          heading: "Sample Prototype 4",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
          icon: "services-specific-icons/automation-spec.png",
        },
        {
          heading: "Sample Prototype 5",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
          icon: "services-specific-icons/maintainence-spec.png",
        },
      ],
    };
  },
};
</script>

<style scoped>
h1 {
  margin-top: 50px;
  margin-bottom: -150px;
  color: white;
  font-size: 2.5rem;
  font-weight: bold;
}

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
