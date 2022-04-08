<template>
  <navbar />
  <contactSidebar />
  <socialIcons />
  <hamburger />
  <mainhead
    image="services-main-image/web-gif-final.webp"
    headingtext="Website development"
    quote="Encanto remains the trusted partner to the global clientele. Our elite web development services become the cynosure of all eyes."
  />
  <whatisthis technology="Web Development" techdetail="Our expertise in web development thrives us to deliver quality web development products and services at an attractive cost. We provide development in a wide range of web development technology to satisfy clientele from around the globe. We don’t just make websites; our sole purpose remains to make a website that could generate business for the clients. We believe a good website is a gateway to opportunities that could do wonders for the client. We invest our best resources to design websites that are presentable, efficient, user-friendly, responsive, and result-oriented. Our web development process includes many stages, from a high degree approach, precise planning, necessary research, design, accurate layout, and testing. We have set a thorough and professional approach to provide clarity and transparency without any misleading promises." />
  <newcards :content="content" />
  <howWeDoIt />
  <footer1 />
  <footerMarquee />
  <particles />
</template>

<script>
// @ is an alias to /src
import particles from "@/components/particles.vue";
import newcards from "@/components/services-comps/newcards.vue";
import navbar from "@/components/navbar.vue";
import socialIcons from "@/components/socialIcons.vue";
import hamburger from "@/components/hamburger.vue";
import footerMarquee from "@/components/footerMarquee.vue";
import footer1 from "@/components/footer1.vue";
import mainhead from "@/components/services-comps/mainhead.vue";
import whatisthis from "@/components/services-comps/whatisthis.vue";
import howWeDoIt from "@/components/services-comps/howWeDoIt.vue";
import contactSidebar from "@/components/contactSidebar.vue";

export default {
  name: "webU",
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
          heading: "FrontEnd Development",
          description:
            "Our seamless user interfaces and smooth navigations create a lasting impression. Our experts develop the attractive and holistic user interface of web applications and web pages. We are specialized in providing mobile app development, web development, UI/UX, among others. Encanto Technologies is globally renowned for designing custom front-end development to build custom applications right from the concept to consulting, development, maintenance, and support.",
          icon: "services-specific-icons/frontend-spec.png",
        },
        {
          heading: "Backend Development",
          description:
            "The real game lies behind the curtain that users don’t see, and it matters the most. We at Encanto technologies design a very strong backend that anchors the Digital Core Transformation. Our front-end development is the cynosure of all eyes owing to the rock-solid backend framework.",
          description2:
            "Our experts meticulously design backend development with a perfect blend of writing, optimizing, and deploying the intricate server-side code. We give utmost importance to creating a solid backend framework to strengthen the roots. Our experts pay due attention to every minute detail including writing complex functional protocols, building intricate libraries, among other technicalities to optimize and improve the performance.",
          icon: "services-specific-icons/backend-spec.png",
        },
        {
          heading: "eCommerce Development",
          description:
            "eCommerce will continue to gain momentum owing to massive inclination from businesses around the globe. We endeavor to boost and optimize sales through eCommerce platforms. As a leading ecommerce development company, Encanto Technologies deliver wide range of eCommerce development services. Our expertise in optimizing leading platforms such as Magento, Shopify and BigCommerce helped our clients to scale their businesses. We provide complete control, security, and optimization through our eCommerce Development.",
          icon: "services-specific-icons/ecommerce-spec.png",
        },
        {
          heading: "CMS Development",
          description:
            "We deliver custom CMS solutions to ensure prompt and cost-effective web content management, optimizing website lead generation, among other benefits. CMS Development remains our expertise, we deliver customize CMS web designs with strong support and maintenance. Our experts build websites that can be easily managed and updated after deployment to stay competitive. Our expertise in WordPress, Joomla!, Magento, Shopify, and WooCommerce caters to a wide range of clientele. From an informational website to Mobile App, we tailor the web development solution as per the requirement.",
          icon: "services-specific-icons/cms-spec.png",
        },
        {
          heading: "Web Application Development",
          description:
            "Our Teams' adaptability is backed by well-established knowledge management procedures. This ensures that web application development workflows are uninterrupted and the updates are delivered quickly. Our web development teams launch new applications and features faster due to continuous delivery based on full deployment automation. Encanto Technologies work on projects with every size of the organization and also deliver 24*7 support to our customers. We are client centric organization and endeavour to serve our client with all our heart.",
          icon: "services-specific-icons/web-application-spec.png",
        },
        {
          heading: "QA & Testing",
          description:
            " Testing remains our top priority in our Software Development methodology. Our robust and efficient testing process helps to improve the quality of the deliverables and the hassle-free optimization. Software with bugs is a nightmare for any organization that leads to poor user experience, delayed project timelines, reduced brand value, and worst of all revenue losses. At Encanto Technologies we provide the top-class quality assurance engineer that helps you to show the best in class product to your customer.",
          icon: "services-specific-icons/qa-spec.png",
        },
      ],
    };
  },
};
</script>

<style scoped>
</style>
