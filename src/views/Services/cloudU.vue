<template>
  <navbar />
  <socialIcons />
  <contactSidebar />
  <hamburger />
  <mainhead
    image="services-main-image/cloud-gif-final.webp"
    headingtext="Cloud Based Development"
    quote="Keep the Mountains of data in the Cloud and push your business to new heights."
  />
  <whatisthis
    technology="Cloud Development"
    techdetail="Our Cloud-Based Applications are increasingly adopted around the globe owing to the robust growth of companies in varied domains. Our clients reach us to free up the IT infrastructure to optimize business operations as cloud-based applications are highly prolific, reliable, and user-friendly. Our cloud experts will never let you down owing to our experts that relentlessly work to optimize your businesses through cloud-based applications. With our cloud-based application forget about the downtime of your application as it scales as traffic. We make business transformation easy and reliable which helps in scaling and optimizing the businesses through the cloud. For assessment and planning to migrate your business process, we work with you to make cloud applications secure and faster. Our Cloud applications provide get the advantage of scalability, flexibility, efficiency, data security, and remote access."
  />
  <newcards :content=content />

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
  name: "cloudU",
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
  data(){
    return{
      content:[
        {
          heading:"Cloud App Development",
          description:"Cloud app development entails creating programs that run in the cloud and taking advantage of cloud vendors' capabilities and services. Encanto Technologies creates cloud-native and cloud-only programs that make the most of all cloud capabilities in a timely and reliable manner. We offer end-to-end cloud application implementation services, including cloud app consultation, cloud app development and, testing, cloud app security, and cloud app integration. In addition, we assist our clients in migrating their legacy applications to the cloud.",
          icon: "services-specific-icons/cloud-app-spec.png",
        },
        {
          heading:"Cloud Native Development",
          description:"Businesses require modern hyper-scalable software to compete effectively in their industries. Since the confluence of increasingly disruptive technologies has transformed the way applications are produced, migrating to the cloud and using microservices architecture is no longer sufficient. Cloud-native application development has emerged as a lifesaver for businesses that operate at a high rate and require frequent deployments. Encanto Technologies create and execute fault-tolerant, scalable, and responsive programs from anywhere.",
          icon: "services-specific-icons/cloud-native-spec.png",
        },
        {
          heading:"Cloud Consulting Services",
          description:"Migrating business applications to the cloud saves money on internal data solutions while also allowing companies to be more flexible and scalable. Consultants at Encanto Technologies, are efficient and assist its clients and customers with every problem anytime. Encanto Technologies’ cloud consulting service assists you in selecting the best cloud solutions and products that will integrate easily and provide you with the best return on your technology investment.",
          icon: "services-specific-icons/cloud-consulting-spec.png",
        },
        {
          heading:"Cloud Migration",
          description:"The process of migrating business applications and data from on-premise infrastructure to the cloud is known as cloud migration. The COVID-19 pandemic created significant demand for cloud migration since businesses are moving to the cloud, redefining their offers, and becoming more cost-effective, agile, and innovative in their operations. Encanto Technologies’ cloud migration allows your business to grow and thrive while maintaining its current infrastructure. Reduced IT expenditures and increased performance are two main benefits of migrating.",
          icon: "services-specific-icons/cloud-migration-spec.png",
        },
        {
          heading:"Cloud Integration",
          description:"Cloud integration is a way of connecting diverse systems, applications, and IT environments to exchange data and processes in real-time. Encanto Technologies’ cloud integration enables quick and reliable data synchronization, reducing redundant data and increasing operational efficiency. Using a cloud integration platform allows you to quickly connect, saving time and resources and enabling faster time to value, regardless of what type of business processes and systems your partners and customers have.",
          icon: "services-specific-icons/cloud-integration-spec.png",
        },
        {
          heading:"Cloud Monitoring and Support",
          description:"Web application response times that are late, workloads that are under-resourced, downtime, or data breaches are the issues companies can't afford. Response times, availability, resource consumption levels, performance, and possible concerns are all tracked via cloud monitoring. Encanto Technologies’ cloud monitoring and support services make it easy to spot patterns in the infrastructure and potential security threats. Cloud monitoring solutions enables monitoring as well as the ability to notify you of any service disruptions.",
          icon: "services-specific-icons/cloud-monitoring-spec.png",
        },
      ]
    }
  },
};
</script>

<style scoped></style>
