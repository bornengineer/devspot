<template>
  <div class="containerr d-flex flex-column justify-content-center align-items-center">
      <p>Copyright © 2022 Encanto Technologies</p>
      <div class="icons">
        <ul class="d-flex flex-row p-0">
          <li><a href="#"><i class="fab fa-instagram-square"></i></a></li>
          <li><a href="#"><i class="fab fa-facebook-square"></i></a></li>
          <li><a href="#"><i class="fab fa-twitter-square"></i></a></li>
          <li><a href="#"><i class="fab fa-linkedin"></i></a></li>
        </ul>
      </div>
  </div>
</template>

<style scoped>
.containerr{
    background: #dfdfdf;
    width:100vw;
    height: 140px;
}
ul{
  list-style: none;
}
.icons{
  height: 40px;
  width: 240px;
}
ul li{
  margin:5px 20px;
}
ul li i{
   color:rgb(61, 61, 61);
   font-size:24px;
   transition: all 0.2s;
}
ul li i:hover{
   color:rgb(37, 37, 37);
}
</style>