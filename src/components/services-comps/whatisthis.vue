<template>
  <div class="containerr">
    <div  class="d-flex justify-content-center align-items-center">
      <div data-aos="fade-right" data-aos-delay="300" data-aos-duration="1000" class="row1 d-flex justify-content-start align-items-start">
        <div class="h1">
          What We Do
           ?
        </div>
      </div>
    </div>
    <div class="row2 d-flex justify-content-center align-item-center">
      <h3 data-aos="fade-right" data-aos-delay="300" data-aos-duration="1000" >
        {{techdetail}}
      </h3>
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

.row1 .h1 {
  width: 70vw;
  color: #00000099;
  text-align: left;
  font-weight: bold;
}

h3 {
  width: 70vw;
  color: rgb(58, 58, 58);
  padding: 0;
  font-size: 20px;
}

@media (max-width: 992px){
  .row1 {
  width: 65vw;
}
.row1 .h1 {
  width: 65vw;
}

h3 {
  width: 65vw;
}
}
@media (max-width: 768px){
  .row1 {
  width: 72vw;
}
.row1 .h1 {
  width: 72vw;
}

h3 {
  width: 72vw;
}
}
@media (max-width: 576px){
  .row1 {
  width: 80vw;
}
.row1 .h1 {
  width: 80vw;
}

h3 {
  width: 80vw;
}
}
@media (max-width: 499px) {
    .row1 {
  margin:0 10px;
}
.row1 .h1 {
  width: 80vw;
}

h3 {
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
