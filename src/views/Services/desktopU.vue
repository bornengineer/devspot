<template>
  <navbar />
  <socialIcons />
  <contactSidebar />
  <hamburger />
  <mainhead
    image="services-main-image/desktop-gif-final.webp"
    headingtext="Desktop Development"
    quote="In a highly competitive world, your perfect desktop application can make a significant difference. Get your customized desktop application and stay ahead of the race."
  />
  <whatisthis
    technology="Desktop Development"
    techdetail="Desktop-based application refers to the development of stand-alone applications for laptops and desktops. We develop rich, effective, and user-friendly desktop-based applications for optimum business growth. You Grow We Grow, remains the philosophy that pushes us to develop superior desktop-based applications that are fast, reliable, and secure. We are committed to fulfilling your dream to take your business to a new high. At Encanto Technologies, we firmly believe in making clients delightful with our tailored desktop-based application technologies."
  />
  <newcards :content="content" />
  <howWeDoIt />
  <footer1 />
  <footerMarquee />
  <particles />
</template>

<script>
// @ is an alias to /src
import newcards from "@/components/services-comps/newcards.vue";
import hamburger from "@/components/hamburger.vue";
import footerMarquee from "@/components/footerMarquee.vue";
import footer1 from "@/components/footer1.vue";
import mainhead from "@/components/services-comps/mainhead.vue";
import whatisthis from "@/components/services-comps/whatisthis.vue";
import howWeDoIt from "@/components/services-comps/howWeDoIt.vue";
import particles from "@/components/particles.vue";
import navbar from "@/components/navbar.vue";
import socialIcons from "@/components/socialIcons.vue";
import contactSidebar from "@/components/contactSidebar.vue";

export default {
  components: {
    contactSidebar,
    hamburger,
    footerMarquee,
    footer1,
    mainhead,
    whatisthis,
    howWeDoIt,
    particles,
    newcards,
    navbar,
    socialIcons,
  },
  data() {
    return {
      content: [
        {
          heading: "Desktop Application Development",
          description:
            "Desktop-based application refers to the development of stand-alone applications for laptops and desktops. We develop rich, effective, and user-friendly desktop-based applications for optimum business growth. You Grow We Grow, remains the philosophy that pushes us to develop superior desktop-based applications that are fast, reliable, and secure. We are committed to fulfilling your dream to take your business to a new high. At Encanto Technologies, we firmly believe in making clients delightful with our tailored desktop-based application technologies.",
          icon: "services-specific-icons/desktop-spec.png",
        },
        {
          heading: "Desktop Software Modernization",
          description:
            "The efficient team of desktop software modernization at Encanto Technologies have been assisting businesses in enabling a work-from-anywhere workforce and reacting swiftly to change while maintaining the highest levels of security. It has also removed the need for additional hardware. The methodology and phases such as envision, discover, PoC & deployment, and operational readiness, that we utilize to link customer’s business requirements with technical capacity are the key to our transformation success.",
          icon: "services-specific-icons/desktop-modernization-spec.png",
        },
        {
          heading: "Desktop Software Integration",
          description:
            "Encanto Technologies’ desktop software integration services support businesses to get more out of their software assets. The rapid advancement of technology has opened new possibilities. However, having so many options has resulted in many inefficiencies, as software is not used efficiently due to a lack of vision and strategy. We can assist you whether your present apps are not interrelated, or you have outdated technology that required to be updated according to modern solutions.",
          icon: "services-specific-icons/software-integration-spec.png",
        },
      ],
    };
  },
};
</script>

<style scoped>
</style>