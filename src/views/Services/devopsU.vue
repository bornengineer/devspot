<template>
  <navbar />
  <socialIcons />
  <contactSidebar />
  <hamburger />
  <mainhead
    image="services-main-image/devops-gif-final.webp"
    headingtext="DevOps & CI/CD"
    quote="Our value driven DevOps & CI/CD practices ensures perennial support to optimize your business"
  />
  <whatisthis
    technology="DevOps & CI/CD"
    techdetail="CI/CD presents ongoing automation and continuous monitoring through the lifecycle of apps, from integration and testing process to delivery and deployment. Our DevOps engineers are highly skilled in developing and automating the deployment process as code gets committed. Encanto Technologies offers value-driven DevOps services and solutions to global clientele by leveraging its offering in digital, and product engineering, among other services. We are equipped with the best-in-class DevOps practices and processes to optimize business processes, produce better quality code, and deliver value to our clients."
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
import particles from "@/components/particles.vue";
import hamburger from "@/components/hamburger.vue";
import footerMarquee from "@/components/footerMarquee.vue";
import footer1 from "@/components/footer1.vue";
import mainhead from "@/components/services-comps/mainhead.vue";
import whatisthis from "@/components/services-comps/whatisthis.vue";
import howWeDoIt from "@/components/services-comps/howWeDoIt.vue";
import navbar from "@/components/navbar.vue";
import socialIcons from "@/components/socialIcons.vue";
import contactSidebar from "@/components/contactSidebar.vue";

export default {
  name: "devopsU",
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
          heading: "DevOps Consulting Services",
          description:
            "Our DevOps Consulting Services are gaining momentum around the globe since it leverages monitoring, tool-chain pipelines, collaboration, automation, and cloud adoption. We ensure significant on-boarding of applications by automating the end-to-end delivery pipeline and boosting continuous integration and development across leading cloud platforms. At Encanto Technologies, we automate the end-to-end delivery pipeline for higher cost and time efficiency. Our DevOps solutions enable organizations to design high-quality software-based products and services.",
          icon: "services-specific-icons/devops-consulting-services.png"
        },
        {
          heading: "Jenkin Implementation",
          description:
            "Jenkins is an open-source server that is written entirely in Java that executes a series of actions to achieve the continuous integration process, that too in an automated fashion. It facilitates Continuous Integration and Delivery in software projects by automating parts related to building, testing, and deploying. This makes it easy for developers to continuously work on improving products by integrating changes to the project.",
          icon: "services-specific-icons/jenkin-spec.png"
        },
        {
          heading: "AWS DevOps Services",
          description:
            " Our AWS DevOps Services support various DevOps principles and practices that help to improve your business agility. It allows you to automate the development cycle with enhanced infrastructure provisioning coupled with the management of every complex environment at scale. AWS helps to build, test and deploy the application without major challenges throughout AWS's continuous integration and continuous delivery pipeline.",
          icon: "services-specific-icons/aws-devops-spec.png"
        },
        {
          heading: "DevOps Automation Services",
          description:
            " Automating DevOps help to improve the quality and expedite the production of software. Encanto Technologies offers you a wide range of automating DevOps services without any complexity. Automation is increasingly adopted around the globe since it helps optimize the production and distribution of a product. Our experts in DevOps automation services help the organizations to build quality software that creates a lasting impression, and also increases productivity of businesses.",
          icon: "services-specific-icons/automation-services-spec.png"
        },
        {
          heading: "CI/CD Implementation",
          description:
            "Continuous Integration and Continuous Deployment embody a culture, set of operating principles, and collective practices that enable the application development teams to execute code changes more frequently and conveniently. We have a reputation for maintaining efficiency and finesse in CI/CD implementation. We at Encanto Technologies value your time and provide you with top-class integration in CI/CD.",
          icon: "services-specific-icons/cicd-implementation.png"
        },
      ],
    };
  },
};
</script>

<style scoped>
</style>