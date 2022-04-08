<template>
  <!-- this component is made to show the hamburger button on small screens to get menu -->
  <a
    @click.prevent.stop="toggle"
    href="javascript:void(0);"
    class="ham-toggle sticky-top"
  >
    <!-- using v-if to change hamburger menu and cross on toggle -->
    <transition name="cross-fade"
      ><i v-if="cond" class="fa-solid fa-xmark position-absolute"></i
    ></transition>
    <transition name="line-fade"
      ><i v-if="!cond" class="fa fa-bars position-absolute"></i
    ></transition>
  </a>

  <!-- this is the hamburger list -->
  <div id="hamburger" class="fixed-top">
    <transition name="hamburger-fade">
      <div v-if="cond" class="hamburger-list">
        <router-link class="ham-list" @click="moveUp" to="/">Home</router-link>
        <dropdown class="mx-3" id="navs" title="Services" :items="services" />
        <router-link class="ham-list" @click="moveUp" to="/about"
          >About</router-link
        >
        <router-link class="ham-list" @click="moveUp" to="/contact"
          >Contact</router-link
        >x
        <div class="contInfo">
          <span
            ><a href="mailto:info@encantotek.com" target="_blank"
              ><i class="fa fa-envelope"></i>&nbsp;info@encantotek.com</a
            ></span
          >
          <span
            ><a href="tel:+91-7224896741" target="_blank"
              ><i class="fa fa-phone"></i>+91 7224896741</a
            ></span
          >
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import dropdown from "./dropdown.vue";

export default {
  components: { dropdown },
  data() {
    return {
      cond: false,
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
  methods: {
    toggle() {
      this.cond = !this.cond;
    },
    moveUp() {
      window.scrollTo(0, 0);
    },
  },
};
</script>

<style scoped>
.hamburger-list {
  display: flex;
  flex-direction: column;
  background-color: rgba(0, 0, 0, 0.95);
  height: 120vh;
  z-index: 1000;
  width: 100vw;
  position: absolute;
  left: 0;
  top: 0%;
  padding-top: 10px;
  overflow-y: scroll;
}
.ham-list {
  margin-left: 8vw !important;
  margin-top: 5px !important;
}

.ham-toggle {
  transition: all 0.3s ease;
  padding: 5px;
  height: 25px;
  width: 25px;
  border-radius: 3px;
  display: none !important;
  position: fixed;
  right: 10vw;
  top: 18px;
  color: #ffffff;
  transform: scale(1.5);
  cursor: pointer;
  z-index: 10000;
}
.ham-toggle:hover {
  background-color: rgba(0, 0, 0, 0.3);
}
@media (max-width: 768px) {
  .ham-toggle {
    display: block !important;
  }
}
@media (min-width: 768px) {
  .hamburger-list {
    display: none;
  }
}
#hamburger .hamburger-list .ham-list {
  color: #a3a3a3;
  font-size: 20px;
  transition: 0.5s;
  text-decoration: none;
  position: relative;
}
#hamburger .ham-list::after {
  content: "\00bb";
  font-size: 27px;
  margin: -15px 5px -15px 5px;
  opacity: 0;
  transition: 0.5s;
}

#hamburger .ham-list:hover,
#hamburger .ham-list.router-link-exact-active {
  color: #ffffff;
}
.hamburger-list span a {
  color: gray;
  margin: -20px 10px 0 4vh;
  font-size: 14px;
  transition: all 0.4s ease;
  text-decoration: none;
}
.contInfo span a {
  margin-left: 8vw !important;
  display: block;
  margin-top: 20px;
}
.contInfo span a:hover {
  color: white;
}
#navs {
  position: relative;
  transition: all 0.5s ease;
  margin-top: -5px;
  margin-bottom: -14px;
}
#navs1 {
  position: fixed;
  transition: all 0.5s ease;
  margin-top: 20px;
}

#navs a {
  font-family: monospace, arial;
  color: #a3a3a3;
  font-size: 20px;
  transition: all 0.5s ease;
  text-decoration: none;
  position: relative;
}

#navs .sub-menu {
  position: relative;
  background-color: rgba(0, 0, 0, 0.8);
  top: 5px;
  width: max-content;
  height: 40vh;
  padding: 10px 30px 10px 30px;
  border-radius: 0 0 10px 10px;
}

@media (max-width: 992px) {
  #navs .sub-menu {
    top: 62px;
  }
}
@media (max-width: 768px) {
  #navs {
    position: relative;
  }
}
@media (max-width: 576px) {
  .ham-toggle {
    top: 13px;
  }
}
@media (max-width: 499px) {
  .ham-toggle {
    background-color: rgba(0, 0, 0, 0.3);
  }
}

/* all the transition are written here */
.hamburger-fade-enter-active,
.hamburger-fade-leave-active {
  transition: all 0.3s ease-in-out;
}
.hamburger-fade-enter-from,
.hamburger-fade-leave-to {
  opacity: 0;
  transform: translateX(100px);
}

.cross-fade-enter-active,
.cross-fade-leave-active {
  transition: all 0.3s ease-in-out;
}
.cross-fade-enter-from,
.cross-fade-leave-to {
  opacity: 0;
  transform: rotate(45deg) translateX(5px) scale(0);
}

.line-fade-enter-active,
.line-fade-leave-active {
  transition: all 0.3s ease-in-out;
}
.line-fade-enter-from,
.line-fade-leave-to {
  opacity: 0;
  transform: rotate(-45deg) translateX(5px) scale(0);
}
</style>
