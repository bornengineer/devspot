<template>
  <!-- this component is used for the navbar -->

  <div class="container sticky-top">
    <div id="logotext">
      <!-- logo for the navbar -->

      <!-- moveup method is used to move to the top on the page we are going to-->
      <router-link class="me-5" @click="moveUp" to="/">
        <img
          style="height: 45px !important"
          src="../../public/logo.png"
          alt="logo"
        />
      </router-link>

      <!-- text after the logo -->
      <h1>
        <router-link @click="moveUp" to="/"> DEVSPOT </router-link>
      </h1>
    </div>

    <!-- all pages menu -->
    <div id="navs" class="d-flex align-items-center">
      <router-link class="mx-3" @click="moveUp()" to="/">Home</router-link>
      <!-- <dropdown class="mx-3" title="Services" :items="services" /> -->
      <router-link class="mx-3" @click="moveUp()" to="/prototypes"
        >Prototypes</router-link
      >
      <router-link class="mx-3" @click="moveUp()" to="/submit-project"
        >Projects</router-link
      >
      <router-link class="mx-3" @click="moveUp()" to="/users"
        >Users</router-link
      >
      <div class="login">
        <login />
      </div>
    </div>

    <!-- <div class="contInfo">
      <span
        ><a href="mailto:abc@example.com" target="_blank"
          ><i class="fa fa-envelope"></i>&nbsp;abc@example.com</a
        ></span
      >
      <span
        ><a href="tel:+91-353453534" target="_blank"
          ><i class="fa fa-phone"></i>&nbsp;+91 XXXXXXXXXX</a
        ></span
      >
    </div> -->
  </div>
</template>

  <script>
import login from "@/components/login.vue";
// import dropdown from "@/components/dropdown.vue";
export default {
  methods: {
    // moveup method is used to move to the top on the page we are going to
    moveUp() {
      window.scrollTo(0, 0);
    },
  },
  name: "navbar",
  components: { login },
  data() {
    return {
      firstname: "",
      lastname: "",
      email: "",
      dob: "",
      city: "",
      country: "",
      postcode: "",
      gender: "",
      phone: "",
      image: "",

      // from here we will be sending the data to dropdown component
      services: [
        {
          title: "Website Development",
          link: "/web-development",
          img: "services-dropdown/web-dev.png",
          devtext: "We don't just sell websites; we design websites that SELL",
        },
        {
          title: "Application Development",
          link: "/app-development",
          img: "services-dropdown/app-dev.png",
          devtext:
            "Your mobile device has now become the coolest portal into your digital self",
        },
        {
          title: "Desktop Application",
          link: "/desktop-application-development",
          img: "services-dropdown/desktop-dev.png",
          devtext: "Sync your data on all platform including 'Desktop'",
        },
        {
          title: "Cloud Based Development",
          link: "/cloud-development",
          img: "services-dropdown/cloud-dev.png",
          devtext:
            "Cloud computing empowers companies to innovate, optimize and streamline",
        },
        {
          title: "DevOps and CI/CD",
          link: "/devops-development",
          img: "services-dropdown/devops-dev.png",
          devtext:
            "Automation is the need of the hour and the most powerful tool for the developers",
        },
        {
          title: "Big data Development",
          link: "/big-data-development",
          img: "services-dropdown/bigdata-dev.png",
          devtext:
            "Big data is at the foundation of all the megatrends around the globe",
        },
      ],
    };
  },
};
</script>

<style scoped>
.contInfo {
  position: absolute;
  right: 5%;
  width: 155px;
}

.contInfo span a {
  margin: 2px 10px;
  color: #adadad;
  text-decoration: none;
  font-size: 0.85em;
  width: 158px;
  display: block;
  transition: all 0.4s ease;
}

.contInfo span a:hover {
  color: white;
}

.container {
  height: 60px;
  max-width: 100%;
  margin: 0;
  background: linear-gradient(45deg, #ee2f45, #0947a3);
  background: rgba(54, 53, 53, 0.9);
  display: flex;
  flex-direction: row;
  align-items: center;
  /* for the bottom shadow effect */
  box-shadow: 0px 2px 8px 2px rgb(22, 22, 22);
}

#logotext {
  display: flex;
  align-items: center;
  transform: scale(1);
  margin-left: 5vw;
  height: 60px !important;
  justify-content: center;
  letter-spacing: 5px;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
}

#logotext h1 a {
  color: white !important;
  text-decoration: none !important;
  margin-left: -50px !important;
  transform: scale(0.6);
}

img {
  height: 70px !important;
  transition: 0.3s ease-in-out;
}

#navs {
  position: absolute;
  right: 20%;
  transition: all 0.5s ease;
}

.container #navs a {
  color: #dfdfdf;
  font-size: 18px;
  transition: 0.5s;
  text-decoration: none;
  position: relative;
}

.container #navs a:hover {
  color: #ffffff;
}

.container #navs a#logo:hover::after {
  opacity: 0;
  padding-right: 0px;
  margin-top: 20px;
}

.container #navs a.router-link-exact-active {
  color: #ffffff;
}

@media (max-width: 992px) {
  #logotext img {
    margin: 0 0 0 -20px;
  }
  #logotext h1 a {
    margin: 0 0 0 0px;
    font-size: 18px !important;
  }
  #navs {
    margin: 0px 0px 0 0;
    transform: scale(0.85);
  }
  .contInfo {
    right: 3%;
  }
  .contInfo span a {
    font-size: 13px;
  }
}
@media (max-width: 768px) {
  #logotext {
    transform: scale(0.8);
  }
  .contInfo {
    display: none;
  }
  .contInfo span a {
    font-size: 12px;
  }
  #navs {
    display: none !important;
  }
}
@media (max-width: 576px) {
  .container {
    height: 50px;
  }
  #logotext {
    margin-right: 20px;
  }
}
</style>