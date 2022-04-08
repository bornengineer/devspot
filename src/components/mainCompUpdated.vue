<template>
  <div
    data-aos="fade"
    class="everything d-flex justify-content-center align-items-center"
  >
    <div
      class="
        containerr
        d-flex
        flex-xxl-row
        flex-xl-row
        flex-lg-row
        flex-md-row
        flex-sm-column
        flex-column
        justify-content-center
        align-items-center
      "
    >
      <div
        data-aos="zoom-in"
        data-aos-delay="100"
        data-aos-duration="1000"
        class="gif d-flex flex-column justify-content-center align-items-center"
      >
        <img style="width: auto" src="../assets/maingiffinal.webp" />
      </div>
      <div
        data-aos="fade-up"
        data-aos-delay="100"
        data-aos-duration="1000"
        class="
          heading
          d-flex
          flex-column
          justify-content-center
          align-items-center
          text-center
        "
      >
        <h1 id="idea" class="my-2">IDEA</h1>
        <h1 id="code" class="my-2">CODE</h1>
        <h1 id="reality" class="my-2">REALITY</h1>
        <div class="fixed-animation">
          <div class="dotbox1">
            <div class="dot1"></div>
          </div>
          <div class="dotbox2">
            <div class="dot2"></div>
          </div>
        </div>

        <p class="my-2">We Create Magic With Code</p>
      </div>
    </div>
  </div>
</template>

<script>
import AOS from "aos";
import "aos/dist/aos.css";

export default {
  created() {
    AOS.init();
  },
  name: "mainCompUpdated",
  props: {},
};
</script>

<style scoped>
.fixed-animation {
  height: 208px;
  width: 374px;
  position: absolute;
  margin-bottom: 55px;
}

/* here the color changing animation of idea, code and reality is written in css */
@-webkit-keyframes idea-ani {
  0% {
    -webkit-background: linear-gradient(45deg, #0947a3, #ee2f45);
    background: linear-gradient(45deg, #0947a3, #ee2f45);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-background-clip: text;
    -moz-text-fill-color: transparent;
  }
  1% {
    -webkit-background: linear-gradient(45deg, #0947a3, #ee2f45);
    background: linear-gradient(45deg, #0947a3, #ee2f45);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-background-clip: text;
    -moz-text-fill-color: transparent;
  }
  16.6% {
    -webkit-background: linear-gradient(45deg, #0947a3, #ee2f45);
    background: linear-gradient(45deg, #0947a3, #ee2f45);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-background-clip: text;
    -moz-text-fill-color: transparent;
  }

  33.2% {
    -webkit-background: rgba(0, 0, 0, 0.8);
    background: rgba(0, 0, 0, 0.8);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-background-clip: text;
    -moz-text-fill-color: transparent;
  }

  41.5% {
    -webkit-background: rgba(0, 0, 0, 0.8);
    background: rgba(0, 0, 0, 0.8);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-background-clip: text;
    -moz-text-fill-color: transparent;
  }
  58.1% {
    -webkit-background: rgba(0, 0, 0, 0.8);
    background: rgba(0, 0, 0, 0.8);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-background-clip: text;
    -moz-text-fill-color: transparent;
  }

  83% {
    -webkit-background: rgba(0, 0, 0, 0.8);
    background: rgba(0, 0, 0, 0.8);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-background-clip: text;
    -moz-text-fill-color: transparent;
  }
  100% {
    -webkit-background: rgba(0, 0, 0, 0.8);
    background: rgba(0, 0, 0, 0.8);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-background-clip: text;
    -moz-text-fill-color: transparent;
  }
}
@-webkit-keyframes code-ani {
  0% {
    -webkit-background: rgba(0, 0, 0, 0.8);
    background: rgba(0, 0, 0, 0.8);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-background-clip: text;
    -moz-text-fill-color: transparent;
  }
  1% {
    -webkit-background: rgba(0, 0, 0, 0.8);
    background: rgba(0, 0, 0, 0.8);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-background-clip: text;
    -moz-text-fill-color: transparent;
  }
  16.6% {
    -webkit-background: rgba(0, 0, 0, 0.8);
    background: rgba(0, 0, 0, 0.8);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-background-clip: text;
    -moz-text-fill-color: transparent;
  }

  33.2% {
    -webkit-background: rgba(0, 0, 0, 0.8);
    background: rgba(0, 0, 0, 0.8);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-background-clip: text;
    -moz-text-fill-color: transparent;
  }
  40% {
    -webkit-background: linear-gradient(45deg, #ee2f45, #0947a3);
    background: linear-gradient(45deg, #ee2f45, #0947a3);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-background-clip: text;
    -moz-text-fill-color: transparent;
  }
  41.5% {
    -webkit-background: linear-gradient(45deg, #ee2f45, #0947a3);
    background: linear-gradient(45deg, #ee2f45, #0947a3);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-background-clip: text;
    -moz-text-fill-color: transparent;
  }
  58.1% {
    -webkit-background: linear-gradient(45deg, #ee2f45, #0947a3);
    background: linear-gradient(45deg, #ee2f45, #0947a3);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-background-clip: text;
    -moz-text-fill-color: transparent;
  }
  80% {
    -webkit-background: rgba(0, 0, 0, 0.8);
    background: rgba(0, 0, 0, 0.8);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-background-clip: text;
    -moz-text-fill-color: transparent;
  }
  83% {
    -webkit-background: rgba(0, 0, 0, 0.8);
    background: rgba(0, 0, 0, 0.8);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-background-clip: text;
    -moz-text-fill-color: transparent;
  }
  100% {
    -webkit-background: rgba(0, 0, 0, 0.8);
    background: rgba(0, 0, 0, 0.8);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-background-clip: text;
    -moz-text-fill-color: transparent;
  }
}
@-webkit-keyframes reality-ani {
  0% {
    -webkit-background: rgba(0, 0, 0, 0.8);
    background: rgba(0, 0, 0, 0.8);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-background-clip: text;
    -moz-text-fill-color: transparent;
  }
  1% {
    -webkit-background: rgba(0, 0, 0, 0.8);
    background: rgba(0, 0, 0, 0.8);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-background-clip: text;
    -moz-text-fill-color: transparent;
  }
  16.6% {
    -webkit-background: rgba(0, 0, 0, 0.8);
    background: rgba(0, 0, 0, 0.8);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-background-clip: text;
    -moz-text-fill-color: transparent;
  }

  33.2% {
    -webkit-background: rgba(0, 0, 0, 0.8);
    background: rgba(0, 0, 0, 0.8);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-background-clip: text;
    -moz-text-fill-color: transparent;
  }
  40% {
    -webkit-background: rgba(0, 0, 0, 0.8);
    background: rgba(0, 0, 0, 0.8);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-background-clip: text;
    -moz-text-fill-color: transparent;
  }
  41.5% {
    -webkit-background: rgba(0, 0, 0, 0.8);
    background: rgba(0, 0, 0, 0.8);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-background-clip: text;
    -moz-text-fill-color: transparent;
  }
  58.1% {
    -webkit-background: rgba(0, 0, 0, 0.8);
    background: rgba(0, 0, 0, 0.8);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-background-clip: text;
    -moz-text-fill-color: transparent;
  }
  80% {
    -webkit-background: rgba(0, 0, 0, 0.8);
    background: rgba(0, 0, 0, 0.8);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-background-clip: text;
    -moz-text-fill-color: transparent;
  }
  83% {
    background: -webkit-gradient(linear, 45deg, #0947a3, #ee2f45);
    background: linear-gradient(45deg, #0947a3, #ee2f45);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-background-clip: text;
    -moz-text-fill-color: transparent;
  }
  100% {
    background: -webkit-gradient(linear,45deg, #0947a3, #ee2f45);
    background: linear-gradient(45deg, #0947a3, #ee2f45);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-background-clip: text;
    -moz-text-fill-color: transparent;
  }
}
/* defining the animations */
#idea {
  animation: idea-ani 4.5s infinite ease-in;
}
#code {
  animation: code-ani 4.5s infinite ease-in;
}
#reality {
  animation: reality-ani 4.5s infinite ease-in;
}


/* animation for dots */
@keyframes dot1move {
  0% {
    right: 0%;
    top: -10%;
  }
  16.6% {
    right: 75%;
    top: -10%;
  }
  18% {
    right: 80%;
    top: -1%;
  }
  19.3% {
    right: 85%;
    top: 8%;
  }
  20.7% {
    right: 87.5%;
    top: 17%;
  }
  22.1% {
    right: 90%;
    top: 26%;
  }
  23.5% {
    right: 92.5%;
    top: 35%;
  }
  /* MID POINT */
  24.8% {
    right: 95%;
    top: 45%;
  }

  26.2% {
    right: 92.5%;
    top: 54%;
  }
  27.56% {
    right: 90%;
    top: 63%;
  }
  28% {
    right: 87.5%;
    top: 72%;
  }
  30.3% {
    right: 85%;
    top: 80%;
  }
  31.7% {
    right: 80%;
    top: 87%;
  }

  33.2% {
    right: 75%;
    top: 95%;
  }

  49.8% {
    right: 0%;
    top: 95%;
    opacity: 1;
  }
  50% {
    right: 0%;
    top: 95%;
    opacity: 1;
  }
  100% {
    right: 0%;
    top: 95%;
    opacity: 0;
  }
}

@keyframes dot2move {
  0% {
    right: 75%;
    top: -10%;
    opacity: 0;
  }
  49.8% {
    right: 75%;
    top: -10%;
    opacity: 0;
  }
  50% {
    right: 0%;
    top: -10%;
    opacity: 1;
  }

  66.6% {
    right: 75%;
    top: -10%;
  }
  68% {
    right: 80%;
    top: -1%;
  }
  69.3% {
    right: 85%;
    top: 8%;
  }
  70.7% {
    right: 87.5%;
    top: 17%;
  }
  72.1% {
    right: 90%;
    top: 26%;
  }
  73.5% {
    right: 92.5%;
    top: 35%;
  }
  /* MID POINT */
  74.8% {
    right: 95%;
    top: 45%;
  }

  76.2% {
    right: 92.5%;
    top: 54%;
  }
  77.56% {
    right: 90%;
    top: 63%;
  }
  78% {
    right: 87.5%;
    top: 72%;
  }
  80.3% {
    right: 85%;
    top: 80%;
  }
  81.7% {
    right: 80%;
    top: 87%;
  }

  83.2% {
    right: 75%;
    top: 95%;
  }

  100% {
    right: 0%;
    top: 95%;
    /* opacity: 1; */
  }
}

.dot1 {
  height: 15px;
  width: 15px;
  border-radius: 50%;
  background-color: rgba(46, 43, 43, 0.5);
  position: absolute;
  top: -10%;
  right: 0%;
  z-index: 1;
  animation: dot1move 4.5s infinite ease-in;
  border: 2px solid #ee2f45;
}
.dot2 {
  height: 15px;
  width: 15px;
  border-radius: 50%;
  position: absolute;
  top: -10%;
  right: 100%;
  z-index: 1;
  animation: dot2move 4.5s infinite ease-in;
  background-color: rgba(46, 43, 43, 0.5);
  border: 2px solid #0947a3;
}


/* 2 dotboxes are used to make the animation */
.dotbox1 {
  position: absolute;
  height: 106px;
  width: 187px;
  border-left: 4px dotted rgba(0, 0, 0, 0.3);
  border-top: 4px dotted rgba(0, 0, 0, 0.3);
  border-bottom: 4px dotted rgba(0, 0, 0, 0.3);
  border-radius: 80px 0 0 80px;
  z-index: -10;
  top: 0%;
  left: 0%;
}

.dotbox2 {
  transform: rotateY(180deg);
  position: absolute;
  height: 106px;
  width: 187px;
  border-left: 4px dotted rgba(0, 0, 0, 0.3);
  border-top: 4px dotted rgba(0, 0, 0, 0.3);
  border-bottom: 4px dotted rgba(0, 0, 0, 0.3);
  border-radius: 80px 0 0 80px;
  z-index: -10;
  bottom: 0%;
  right: 0%;
}

/* to make the dot move in the direction of dot line but failed */
/* .dotbox1 {
    background: linear-gradient(90deg, black 50%, transparent 50%), 
                linear-gradient(90deg, black 50%, transparent 50%), 
                linear-gradient(0deg, black 50%, transparent 50%), 
                linear-gradient(0deg, black 50%, transparent 50%);
    background-repeat: repeat-x, repeat-x,repeat-y, repeat-y;
    background-size: 7px 3px,7px 3px, 3px 7px;
    background-position: -10% -10%, 110% 110%, -10% 110%, 110% -10%;
      border-radius: 80px 0 0 80px;

    animation: dash 4.5s linear infinite ease-in;
}
@keyframes dash {
    to {
        background-position: 110% -10%, -10% 110%, -10% -10%, 110% 110%;
    }
} */

.containerr {
  height: 700px !important;
  width: 80vw;
  margin-bottom: 50px;
}
.gif {
  width: 50vw;
  height: 80vh;
}
img {
  height: 20vw;
  width: 20vw;
}
.heading {
  width: 50vw;
  height: 80vh;
}
h1 {
  font-weight: 700;
  font-size: 70px;
}
p {
  color: #0947a3;
  font-size: 1.5em;
  min-width: 320px;
}
@media (max-width: 1200px) {
  .heading {
    transform: scale(0.95) !important;
  }
}
@media (max-width: 991px) {
  img {
    height: 25vw;
    width: 25vw;
    margin-left:-40px;
    margin-right:40px;
  }
  .heading {
    transform: scale(0.90) !important;
  }
}
@media (max-width: 767px) {
  .containerr {
    height:700px !important;
    margin-bottom: 80px !important;
  }
  img {
    height: 40vw;
    width: 40vw;
     margin-left:0px;
    margin-right:0px;
    margin-bottom:20px;
  } 

  .heading {
    margin-right: 0 !important;
    transform: scale(0.9) !important;
  }
  .gif {
    margin-top: 90px;
    margin-bottom: 10px;
  }
}
@media (max-width: 575px) {
  img {
    height: 50vw;
    width: 50vw;
  }
  .heading {
    margin-right: 0 !important;
    transform: scale(0.8) !important;
  }
  .gif {
    margin-top: 90px;
  }
}
@media (max-width: 499px) {
  p {
    font-size: 1.35em;
  }
  .heading {
    margin-right: 0 !important;
    transform: scale(0.75) !important;
  }
}
</style>
