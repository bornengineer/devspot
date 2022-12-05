<template>
  <div
  :style="{'background':backgroundclr,'padding':padding,}"
    data-aos="fade"
    class="
      containerr
      d-flex
      flex-column
      justify-content-center
      align-items-center
    "
  >
    <h4
      data-aos="fade-up"
      data-aos-delay="200"
      data-aos-duration="600"
      class="text-center"
    >
      DOMAINS
    </h4>
    <div class="domains d-flex flex-wrap justify-content-center">
      <span
        v-for="(item, i) in items"
        :key="i"
        data-aos="fade-up"
        data-aos-delay="300"
        data-aos-duration="1000"
        class="gradient-text"
        ><div
          class="
            domain-container
            d-flex
            justify-content-center
            flex-xxl-column
            flex-xl-column
            flex-lg-column
            flex-md-column
            flex-sm-column
            flex-row
            align-items-center
            my-4
          "
        >
          <div
            class="
              forLargeScreens
              d-xxl-flex d-xl-flex d-lg-flex d-md-flex d-sm-flex
              justify-content-center
              flex-xxl-column
              flex-xl-column
              flex-lg-column
              flex-md-column
              flex-sm-column
              flex-row
              align-items-center
              d-none
            "
          >
            <img
              style="height: 40px; margin-top: 10px; margin-right: 5px"
              :src="item.image"
              :alt="item.domain.slice(0, 7)"
            />
            <h3>{{ item.domain }}</h3>
          </div>

          <div
            style="width: 160px; margin-left: 10px"
            class="
              toAlignImages
              d-xxl-none d-xl-none d-lg-none d-md-none d-sm-none d-flex
              justify-content-start
              align-items-center
              text-center
            "
          >
            <img
              style="height: 40px; margin-top: 10px; margin-right: 5px"
              :src="item.image"
              :alt="item.domain.slice(0, 10)"
            />
            <h3>{{ item.domain }}</h3>
          </div>
        </div></span
      >
    </div>
  </div>
</template>

<script>
import AOS from "aos";
import "aos/dist/aos.css";

export default {
  props:{backgroundclr:String,padding:String,},
  created() {
    AOS.init();
  },
  data() {
    return {
      items: [
        {
          domain: "Healthcare",
          image: "domain-icons/healthcare.png",
        },
        {
          domain: "Education",
          image: "domain-icons/education.png",
        },
        {
          domain: "Social Media",
          image: "domain-icons/socialmedia.png",
        },
        {
          domain: "Fintech",
          image: "domain-icons/fintech.png",
        },
        {
          domain: "Travel",
          image: "domain-icons/travel.png",
        },
        {
          domain: "Ecommerce",
          image: "domain-icons/ecommerce.png",
        },
        {
          domain: "Food & Beverages",
          image: "domain-icons/food.png",
        },
        {
          domain: "Consumer Products",
          image: "domain-icons/consumer.png",
        },
      ],
    };
  },
};
</script>

<style scoped>
.domain-container {
  width: 180px;
  height: 160px;
  border: 2px solid rgba(3, 3, 3, 0.4);
  border-radius: 30px;
  padding: 20px -20px !important;
  margin: 20px;
  transition: all 0.3s ease;
}
.domain-container:hover {
  background-color: rgba(3, 3, 3, 0.7);
  border: 2px solid rgba(255, 255, 255, 1);
}
.domain-container:hover img {
  filter: invert(1);
  z-index: 10;
}
.domain-container:hover h3 {
  background-color: #ffffff;
}
.containerr {
  min-height: 60vh;
  margin: 0px 0;
}
.containerr h4 {
  font-weight: bold;
  font-size: 2.5rem;
  color: #00000099;
  margin-bottom: 30px;
  width: 80%;
}

/* earlier i was giving the domains text a gradient,
 but layer i had to remove and I implemented the new one in old class */
.gradient-text h3 {
  background-color: red;

  /* Create the gradient. */
  background: rgba(0, 0, 0, 0.6);

  /* Set the background size and repeat properties. */
  background-size: 100%;
  background-repeat: repeat;

  /* Use the text as a mask for the background. */
  /* This will show the gradient as a text color rather than element bg. */
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-background-clip: text;
  -moz-text-fill-color: transparent;
}

span h3 {
  margin: 1rem 0.5rem;
  font-size: 1rem;
  font-weight: bold;
  background: rgba(0, 0, 0, 0.6);
  transition: all 0.3s ease;
  text-align: center;
  width: 160px;

}

.domains {
  width: 900px;
}
@media (max-width: 991px) {
  span {
    font-size: 3rem;
  }
  .domains {
    width: 600px;
  }
  .containerr h4 {
    font-size: 2.2rem;
  }
}
@media (max-width: 767px) {
  span h2 {
    font-size: 2.5rem;
  }
  .domains {
    width: 83vw;
  }
  .containerr h4 {
    font-size: 2rem;
  }
}
@media (max-width: 575px) {
  .domain-container {
    height:80px;
    width: 80vw;
    padding: 5px;
    border-radius:10px;
  }
  span h2 {
    font-size: 2.2rem;
  }
  .domains {
    width: 87vw;
  }
  .containerr h4 {
    font-size: 1.8rem;
  }
  img {
    margin-top: 0px !important;
  }
}
@media (max-width: 500px) {
  span h2 {
    font-size: 2rem;
  }
  .domains {
    width: 90vw;
  }
  .containerr h4 {
    font-size: 1.6rem;
    width: 80vw;
  }
}
</style>
