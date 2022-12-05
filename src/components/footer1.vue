<template>
  <footer>
    <!-- <div class="top_header">
      <section>
        <span><i class="fa fa-map-marker"></i></span>
        <span
          ><a
            style="width: 30px !important"
            target="_blank"
            href="https://www.google.com/maps/place/Orion+Market+Research+Pvt+Ltd./@22.7251267,75.8828506,15z/data=!4m5!3m4!1s0x0:0xc4aee691c60209f5!8m2!3d22.725122!4d75.8828319"
            >ADDRESS</a
          ></span
        >
      </section>
      <section>
        <span><i class="fa fa-envelope"></i></span>
        <span
          ><a target="_blank" href="mailto:abc@example.com"
            >abc@example.com</a
          ></span
        >
      </section>
      <section>
        <span><i class="fa fa-phone"></i></span>
        <span
          ><a
            target="_blank"
            href="tel:+91-241242342"
            >+91 XXXXXXXXXX</a
          ></span
        >
      </section>
    </div> -->
    <div class="bottom_content">
      <section class="d-flex justify-content-sm-center">
        <a href="https://twitter.com/" target="_blank"><i class="fa fa-twitter"></i></a>
        <a href="https://www.facebook.com/" target="_blank"><i class="fa fa-facebook"></i></a>
        <a href="https://instagram.com/" target="_blank"><i class="fa fa-instagram"></i></a>
        <a href="#" target="_blank"><i class="fa fa-linkedin"></i></a>
      </section>
    <span class="border-shape"></span>
      <section class="d-flex justify-content-sm-center">
        <router-link class="ham-list" to="/">Home</router-link>
        <router-link class="ham-list" to="/about">About</router-link>
        <router-link class="ham-list" to="/contact">Contact</router-link>
      </section>
    </div>
    <div class="copyright">
      Made with ❤️ by team - Binary Brains
    </div>
  </footer>
</template>

<style scoped>
*,
*:after,
*:before {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}
body {
  margin: 0;
  overflow-x: hidden !important;
  box-sizing: border-box;
  font-family: "Source Sans Pro", sans-serif;
}

.bottom_content a {
  text-decoration: none;
  outline: none !important;
  color: #fff;
}

span a {
  color: #fff;
  text-decoration: none;
  transition: all 0.5s ease !important;
}

span a:hover {
  border-bottom: 1px solid white;
}

.border-shape {
  background: #c8cecf none repeat scroll 0 0;
  color: rgb(27, 151, 235);
  display: block;
  height: 3px;
  left: 0;
  margin: 20px auto;
  position: relative;
  right: 0;
  text-align: center;
  top: 0;
  width: 80px;
}

.border-shape::before {
  background: #b4b4b4 none repeat scroll 0 0;
  bottom: 0;
  content: "";
  height: 1px;
  left: 80px;
  margin: 0 -30px;
  position: absolute;
  text-align: center;
  top: 1px;
  width: 100px;
  z-index: 0;
}

.border-shape::after {
  background: #b4b4b4 none repeat scroll 0 0;
  bottom: 0;
  content: "";
  height: 1px;
  margin: 0 -30px;
  position: absolute;
  right: 80px;
  text-align: center;
  top: 1px;
  width: 100px;
}

/*FOOTER*/
footer {
  width: 100%;
  background-color: #1c1e20ad;
  color: #ffffff;
  margin-bottom: 30px;
  margin-top: -25px;
}

.top_header {
  padding: 3rem 5rem;
  display: flex;
  align-items: start;
  justify-content: center;
  position: relative;
  margin-bottom: -20px;
}

.top_header section {
  display: flex;
  align-items: start;
  justify-content: center;
  width: 100%;
  font-size: 14px;
  margin: 0 30px;
}
.top_header span {
  padding: 0 1rem;
}
.top_header span:nth-child(2) {
  width: 60%;
}

.top_header .fa {
  color: #e0e4eb;
  font-size: 25px;
}

footer .border-shape {
  width: 40%;
}

footer .border-shape::before {
  width: 100%;
  left: 120px;
}

footer .border-shape::after {
  width: 100%;
  right: 120px;
}

footer .bottom_content section {
  padding: 1.5rem 2rem;
  display: flex;
  align-items: center;
  justify-content: Center;
}

.bottom_content a {
  margin: 0 20px;
  color: rgba(255, 255, 255, 0.7);
  transition: 0.5s;
  text-align: center;
}

.bottom_content a:hover {
  color: rgba(255, 255, 255, 1);
}

.copyright {
  padding: 0.8em 0;
  background-color: #1e1e1e;
  text-align: center;
  color: rgba(255, 255, 255, 0.7);
  font-size: 15px;
}

.fa-map-marker {
  padding: 0 0.35rem;
}

@media (max-width: 820px) {
  .top_header {
    padding: 1rem 4rem;
    display: block;
  }

  .top_header section {
    margin: 40px 0;
    align-items: left;
    justify-content: left;
  }
  footer .bottom_content section {
    padding: 1rem;
    display: block;
  }
  footer .bottom_content section a i {
    margin: 0 10px;
  }
  footer .bottom_content section a {
    padding: 1rem;
    font-size: 14px;
    margin: 0 0px;
    display: inline-block;
    justify-content: center;
  }
}
@media (max-width: 499px){
  .top_header span {
  font-size:12px;
}
}
</style>
