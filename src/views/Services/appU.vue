<template>
  <navbar />
  <contactSidebar />
  <hamburger />
  <mainhead
    image="services-main-image/app-gif-final.webp"
    headingtext="App Development"
    quote="Get the best app for your business that you deserve. Encanto has a knack for developing customized apps that can boost your business and optimize your profits."
  />
  <whatisthis
    technology="App Development"
    techdetail=" We have a dedicated team of experts that provide the most prolific, attractive, and user-friendly mobile development services. We have a knack for transforming your vision into reality. We believe every app project is different and needs significant attention. In a bid to achieve the desired result, our experts spend significant time in planning and studies. At Encanto, we have this philosophy that ideas must be sketched in a creative way to make mobile applications unique, user-friendly, quick, and responsive. Our experts in iOS or Android make sure to execute the desired result at ease."
  />
  <newcards :content="content" />

  <howWeDoIt />
  <footer1 />
  <footerMarquee />
  <particles />
  <socialIcons />
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
  name: "appU",
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
          heading: "iOS Development",
          description:
            "Looking for a trusted vendor to develop an iOS app? Your search ends here! Encanto technologies take great pride in developing the desired iOS apps for global clients. We have a knack to develop iOS apps that add value to the client’s businesses. Encanto Technologies keeps things simple; we understand the client's requirements meticulously before developing an iOS app. After a detailed brainstorming session, we come up with the right programming language and draw from cloud-based resources to deliver the desired product.",
          icon: "services-specific-icons/ios-spec.png",
        },
        {
          heading: "Android Development",
          description:
            "Encanto Technologies empowers global companies with the advantage of quick, high-performing, and latest android app development services. Our expertise in Android development enables us to provide best-in-class mobile apps that are customized as per the requirement of the clients. We develop a wide range of mobile applications meticulously designed to provide the highest quality that is easy to upgrade and customize as per the client. Our developers are focused on providing innovative solutions using a futuristic approach supporting the entire range of android devices.",
          icon: "services-specific-icons/android-spec.png",
        },
        {
          heading: "Flutter Development",
          description:
            "We are prolific in delivering flutter products and services. Flutter development includes open-source web and mobile app SDK technology that support both the iOS and Android platforms. Encanto has unparalleled experience in flutter development creating magic with codes. Our elite group of flutter developers creates a wide range of web and mobile apps. We provide a wide range of services in flutter development. For instance, we creatively design dynamic feature-loaded apps for mobile, web, and desktop using a single codebase. Our expertise in designing next-gen app development services gives us an edge over other flutter development companies.",
          icon: "services-specific-icons/flutter-spec.png",
        },
        {
          heading: "Automation and Manual Testing",
          description:
            "Testing remains our top priority in our Software Development methodology. Our robust and efficient testing process helps to improve the quality of the deliverables and the hassle-free optimization. Software with bugs is a nightmare for any organization that leads to poor user experience, delayed project timelines, reduced brand value, and worst of all revenue losses. At Encanto Technologies we provide the top-class quality assurance engineer that helps you to show the best in class product to your customer.",
          icon: "services-specific-icons/automation-spec.png",
        },
        {
          heading: "Maintenance and Support",
          description:
            "Encanto Technologies takes great pride in providing best-in-class maintenance and support. Our valuable clients are delighted with our maintenance and support team. Our experts are constantly looking to create more opportunities for the global clientele anchored with trustful maintenance and support. We think outside the box for your organization to make it unique through our customized versions of the software. If you find any issues in any software then you can reach out to our support team anytime.",
          icon: "services-specific-icons/maintainence-spec.png",
        },
      ],
    };
  },
};
</script>

<style scoped></style>
