<template>
  <div class="containerr">
    <div  class="d-flex justify-content-center align-items-center">
      <h1 data-aos="fade-right" data-aos-delay="300" data-aos-duration="1000" class="row1 d-flex justify-content-start align-items-start">
        What We Do
         ?
      </h1>
    </div>
    <div class="row2 d-flex justify-content-center align-item-center">
      <h2 data-aos="fade-right" data-aos-delay="300" data-aos-duration="1000" >
        {{techdetail}}
      </h2>
    </div>
  </div>
</template>

<script>
export default {
  props:{
    technology:String,
    techdetail:String,
  },
  data() {
    return {
      
    };
  },
};
</script>

<style scoped>
.containerr {
  margin:60px 0 -30px 0;
}
.row1 {
  height: 10vh;
  width: 70vw;
}

h1 {
  width: 70vw;
  color: rgb(255, 255, 255);
  text-align: left;
  font-weight: bold;
}

h2 {
  width: 70vw;
  color: rgb(58, 58, 58);
  padding: 0;
  font-size: 20px;
}

@media (max-width: 992px){
  .row1 {
  width: 65vw;
}
h1 {
  width: 65vw;
}

h2 {
  width: 65vw;
}
}
@media (max-width: 768px){
  .row1 {
  width: 72vw;
}
h1 {
  width: 72vw;
}

h2 {
  width: 72vw;
}
}
@media (max-width: 576px){
  .row1 {
  width: 80vw;
}
h1 {
  width: 80vw;
}

h2 {
  width: 80vw;
}
}
@media (max-width: 499px) {
    .row1 {
  margin:0 10px;
}
h1 {
  width: 80vw;
}

h2 {
  width: 80vw;
  font-size: 16px;
}
}
.row1{
  padding-left:10px !important;
}
 .row2{
  padding-left:15px !important;
}

</style>
