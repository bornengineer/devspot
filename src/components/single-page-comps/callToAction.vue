<template>
  <div
    class="
      containerr
      d-flex
      justify-content-center
      align-items-center
      flex-column
      text-center
    "
  >
    <p>
      Take Your Business to the Next Level With Our E-Commerce Website
      Development Solutions
    </p>
    <!-- here importing the form  -->
    <formModal btntext="Get Started"/>
  </div>

</template>

<script>
import formModal from "@/components/single-page-comps/formModal.vue";
export default {
  components: { formModal },
};
</script>

<style scoped>
.containerr {
  width: 100vw;
  background: black;
  height: 300px;
}

p {
  font-size: 1.5rem;
  color: white;
  width:55vw;
}
.containerr button {
  margin-top: 20px;
  border: none;
  background: white;
  border-radius: 10px;
  padding: 4px 10px;
  width: 150px;
  height: 30px;
  text-align: center;
}

@media (max-width: 768px) {
    p{
        width:70vw;
    }
}
    
@media (max-width: 576px) {
    p{
        width:86vw;
    }
}
    

</style>