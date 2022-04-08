<template>
  <!-- this is the single page component and all the sub components are imported in it -->
  <singlepageheader />
  <services />
  <serviceDesc />
  <callToAction />
  <domainsServices backgroundclr="white" padding="100px" />
  <yourtechpartner />
  <singlepagefooter />
</template>

<script>
import singlepageheader from "@/components/single-page-comps/singlepageheader.vue";
import services from "@/components/single-page-comps/services.vue";
import serviceDesc from "@/components/single-page-comps/serviceDesc.vue";
import callToAction from "@/components/single-page-comps/callToAction.vue";
import singlepagefooter from "@/components/single-page-comps/singlepagefooter.vue";
import yourtechpartner from "@/components/single-page-comps/yourtechpartner.vue";
import domainsServices from "@/components/single-page-comps/domainsServices.vue";

export default {
  name: "singlepage",
  components: {
    singlepageheader,
    services,
    serviceDesc,
    callToAction,
    singlepagefooter,
    yourtechpartner,
    domainsServices,
  },
};
</script>

<style scoped>
</style>