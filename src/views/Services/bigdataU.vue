<template>
  <navbar />
  <socialIcons />
  <contactSidebar />
  <hamburger />
  <mainhead
    image="services-main-image/big-data-gif-final.webp"
    headingtext="Big-data Development"
    quote=" Encanto Technologies has mastered the art of creating perfect big data development tools to help organizations scale and prosper."
  />
  <whatisthis
    technology="Big-data Development"
    techdetail="These days every organization has easy access to data owing to the exponential growth of emerging digital big data offering technologies. From integrating your data into an analytics-ready system or building a scalable big data solution from scratch, our experienced team of big data engineers will make sure to maximize the ROI. We helped organizations to leverage data and make better business decisions to stay competitive. We employ the latest technologies in big data development to make organizations data-driven."
  />
  <newcards :content=content  />

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
  name: "bigdataU",
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
          heading:"Big Data Consulting",
          description:" Encanto Technologies have a leading team of experts who helps you to provide the best big data consulting services. Our big data consulting services enable organizations to make better decisions through various data-driven insights that increase productivity and efficiency. The big data consulting team also supports in understanding the smarter recommendation and target audience as well as providing enhanced R&D innovation through various big data tools and technologies. We provide the development with big data in real-time processing through stream analytics which provides organizations to become more agile.",
          icon: "services-specific-icons/big-data-consulting-spec.png",
        },
        {
          heading:"Data Infrastructure and Engineering",
          description:"Data infrastructure and engineering services take care of collecting, parsing, managing, analyzing, and visualizing large data sets in a company. Encanto Technologies aids in collecting data and analyze various information about potential customers which can save the company’s revenue and supports to build a database of the customer for future marketing and retargeting. Encanto Technologies provides various big data technologies such as NoSQL and Splunk that converts input data to the data science framework and creates production-ready data for faster completion of analytics project implementations.",
          icon: "services-specific-icons/data-infrastructure-spec.png",
        },
        {
          heading:"Data Analytics",
          description:"Our team aids companies to deliver high-quality data at an affordable cost. It improves the decision-making process significantly with various tools and makes accurate predictions. The predictive modeling team helps organizations to understand the root causes behind problems and predict future outcomes. With the company’s data analytics service, organizations can improve operational efficiency and understand risks and take preventive measures beforehand. Data analytics service also helps to diagnose the causes of past data breaches by processing and visualizing relevant data.",
          icon: "services-specific-icons/data-analytics-spec.png",
        },
        {
          heading:"Data Visualization",
          description:"Encanto Technologies creates easy-to-understand visual representations of data to communicate complex data relationships and data-driven insights. The company utilizes data visualization for a wide range of applications including MySQL and MongoDB. These visual representations are used by a team of data analysts and data scientists to find and explain patterns and trends using statistical tools. It is also used by management to convey organizational structure and hierarchy.",
          icon: "services-specific-icons/data-visualizatio-spec.png",
        },
        {
          heading:"Artificial Intelligence",
          description:"AI is the model of human intelligence in robots that have been programmed to think and act like humans. The most promising feature of AI is the ability to rationalize and execute actions that have the best likelihood of reaching a certain goal. At Encanto Technologies, the agile team provides clients with the best AI-based programs to support businesses to grow faster and produce better quality code.",
          icon: "services-specific-icons/ai-spec.png",
        },
        {
          heading:"Big Data Support",
          description:"Big data is a huge collection of data that grows dramatically over time. With big data analysis, firms can maximize the value of their data and fulfill their business goals. Successful businesses are using data to make better business decisions in the current competitive market. Encanto Technologies uses cutting-edge technology to assist you in becoming a data-driven organization. Encanto Technologies offers a variety of big data services, including consultancy, installation, support, and big data as a service.",
          icon: "services-specific-icons/big-data-spec.png",
        },
      ]
    }
  },
};
</script>

<style scoped>
</style>