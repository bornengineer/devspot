<template>
  <!-- all the things on home page are displayed here -->
  <!-- <preloader /> -->
  <navbar />
  <socialIcons />
  <contactSidebar />
  <hamburger />
  <mainCompUpdated />
  <whoWeAre />
  <servicesUpdated></servicesUpdated>
  <domains padding="100px"/>
  <whatClientsSay />
  <footer1 />
  <footerMarquee />
  <particles />
</template>

<script>
// @ is an alias to /src
import servicesUpdated from "@/components/servicesUpdated.vue";
import footerMarquee from "@/components/footerMarquee.vue";
import mainCompUpdated from "@/components/mainCompUpdated.vue";
import hamburger from "@/components/hamburger.vue";
import particles from "@/components/particles.vue";
import whatClientsSay from "@/components/whatClientsSay.vue";
import footer1 from "@/components/footer1.vue";
import whoWeAre from "@/components/whoWeAre.vue";
import domains from "@/components/domains.vue";
import navbar from "@/components/navbar.vue";
import socialIcons from "@/components/socialIcons.vue";
import contactSidebar from "@/components/contactSidebar.vue";
// import preloader from "@/components/preloader.vue";

export default {
  name: "Home",
  components: {
    footerMarquee,
    hamburger,
    particles,
    servicesUpdated,
    footer1,
    mainCompUpdated,
    whoWeAre,
    domains,
    whatClientsSay,
    navbar,
    socialIcons,
    contactSidebar,
    // preloader,
  },
};
</script>

<style>
/* these styles will be applied to every single component
 and element present in the project cause it isn't scoped */
*,
:after,
:before {
  box-sizing: border-box;
}

body {
  margin: 0;
  background: linear-gradient(180deg, #ffdb5a, #ffdb5a) fixed;
  box-sizing: border-box;
  overflow-x: hidden !important;
  font-family: Regular !important;
}
h1 {
  display: flex;
  justify-content: center;
  color: rgba(0, 0, 0, 0.6) !important;
}

/* it will affect the color of any selected text on the website */
::selection {
  color: none;
  background: rgba(54, 37, 9, 0.3);
}
</style>
