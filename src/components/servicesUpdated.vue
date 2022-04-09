<template>
  <div data-aos="fade" class="service-container">
    <h3 class="text-center" data-aos="fade-up" data-aos-delay="300" data-aos-duration="1000">
      WHAT WE DO
    </h3>
    <div class="towrap d-flex align-items-center justify-content-center">
      <div
        class="
          row
          d-flex
          align-items-center
          justify-content-center
          align-items-center
        "
      >
        <div
          class="looping d-flex flex-row justify-content-center mx-3"
          v-for="(item, i) in services"
          :key="i"
        >
          <router-link @click="moveUp()" :to="item.link">
            <div
              data-aos="fade-up"
              data-aos-delay="300"
              data-aos-duration="1000"
              class="
                service-card
                d-flex
                justify-content-center
                align-items-center
              "
            >
              <div class="overlay"></div>
              <img :src="item.img" alt="img" cover />
              <h2>{{ item.title }}</h2>
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AOS from "aos";
import "aos/dist/aos.css";
export default {
  methods: {
    // moveup method is used to move to the top on the page we are going to
    moveUp() {
      window.scrollTo(0, 0);
    },
  },
  created() {
    AOS.init();
  },
  // here i tried implementing that scroll effect but failed

  // mounted: function () {
  //   document
  //     .getElementById("infiniteScroll")
  //     .addEventListener("scroll", this.infiniteScroll);
  //   console.log("start");
  // },
  // unmounted: function () {
  //   document
  //     .getElementById("infiniteScroll")
  //     .removeEventListener("scroll", this.infiniteScroll);
  //   console.log("end");
  // },
  data() {
    return {
      hasScrolled: false,
      services: [
        {
          title: "Website Development",
          link: "/web-development",
          img: "homepage-services-image/web-dev.png",
          active: false,
          description:
            "Our leading web development team helps us to deliver high quality software at affordable cost. ",
        },
        {
          title: "Application Development",
          link: "/app-development",
          img: "homepage-services-image/app-dev.png",
          active: false,
          description:
            "Our professional mobile development team helps us to deliver finest mobile application.",
        },
        {
          title: "Desktop Application",
          link: "/desktop-application-development",
          img: "homepage-services-image/desktop-dev.png",
          active: false,
          description:
            "Desktop based application is a development of stand alone applications for laptop and desktops.",
        },
        {
          title: "Cloud Based Development",
          link: "/desktop-application-development",
          img: "homepage-services-image/cloud-dev.png",
          active: false,
          description: "cloud",
        },
        {
          title: "DevOps and CI/CD",
          link: "/desktop-application-development",
          img: "homepage-services-image/devops-dev.png",
          active: false,
          description: "devops",
        },
      ],
    };
  },
  // methods: {
  // infiniteScroll() {
  //   this.hasScrolled = true;
  //   console.log("haaa");
  // },
  // },
  setup() {
    // document
    //   .getElementById("infiniteScroll")
    //   .addEventListener("scroll", function infiniteScroll() {
    //     this.hasScrolled = true;
    //     console.log("aaahaaa");
    //   });
    //     scroll_left() {
    //   let content = document.querySelector(".wrapper-box");
    //   content.scrollLeft -= 50;
    // },
    // scroll_right() {
    //   let content = document.querySelector(".wrapper-box");
    //   content.scrollLeft += 40;
    // }
  },
};
</script>

<style scoped>
.service-container .row .service-card h2 {
  text-transform: uppercase;
  position: absolute;
  transition: all 0.2s ease-in-out;
  text-align: center;
  z-index: -10;
  width: 210px;
  font-size: 1.5rem;
  font-weight: bold;
  color: rgba(255, 255, 255, 0) !important;
}
.service-container h3 {
  font-weight: bold;
  font-size: 2.5rem;
  color: #00000099;
}

.service-container {
  width: 100%;
}
.overlay {
  height: 210px;
  width: 210px;
  z-index: 10;
  transition: all 0.2s ease-in-out;
  position: absolute;
  background-color: rgba(245, 57, 57, 0);
  border-radius: 30px;
}
img {
  height: 80%;
  transition: all 0.2s ease-in-out;
  filter: contrast(80%);
}
.row {
  width: 100vw;
  margin: 50px 0;
}
.looping {
  height: 210px;
  max-width: 210px;
  margin: 20px 0;
}
.service-card {
  height: 210px;
  width: 210px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  overflow: hidden;
  border-radius: 30px;
  border: 2px solid rgba(31, 30, 27, 0.4);
}

/* on hover */
.service-container .row .service-card:hover .overlay {
  background-color: rgba(31, 30, 27, 0.7);
}
.service-container .row .service-card:hover h2 {
  z-index: 1000;
  color: rgba(255, 255, 255, 1) !important;
}
.service-container .row .service-card:hover img {
  transform: scale(0.9);
  filter: blur(2px);
}

@media (max-width: 991px) {
  .service-container h3 {
    font-size: 2.2rem;
  }
}
@media (max-width: 767px) {
  .service-container h3 {
    font-size: 2rem;
  }
}
@media (max-width: 575px) {
  .service-container h3 {
    font-size: 1.8rem;
  }
}
@media (max-width: 499px) {
  .service-container h3 {
    font-size: 1.6rem;
  }

  /* here I m manipulating the look acc to mobile screens */
  .service-container .row .service-card h2 {
    color: rgb(59, 59, 59) !important;
    z-index: 1000;
    transform: scale(0.6) translateY(140%);
  }
  .service-container .row .service-card .overlay {
    background-color: rgba(54, 53, 52, 0) !important;
  }
  .service-container .row .service-card img {
    transform: scale(0.7) translateY(-20%);
    z-index: 1000;
  }

  on hover
  .service-container .row .service-card:hover .overlay {
    background-color: rgba(54, 53, 52, 0);
  }
  .service-container .row .service-card:hover h2 {
    z-index: 1000;
    color: rgb(59, 59, 59) !important;
    transform: scale(0.6) translateY(140%);
  }
  .service-container .row .service-card:hover img {
    transform: scale(0.7) translateY(-20%);
    filter: blur(0px);
    z-index: 1000;
  }
}
</style>
