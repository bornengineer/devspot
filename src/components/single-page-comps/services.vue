<template>
  <div class="containerr">
    <h1 class="text-center pt-5">Services We Provide</h1>
    <div
      class="
        servicesCont
        d-flex
        flex-xxl-row flex-xl-row flex-lg-row flex-md-row flex-sm-row flex-column
        justify-content-center
        align-items-center
      "
    >
      <div
        class="
          service
          d-flex
          flex-column
          justify-content-center
          align-items-center
          text-center
        "
      >
        <img
          src="https://info.assleit.com/assets/images/main-service1.png"
          alt=""
        />
        <h2>Mobile App Development</h2>
        <p>
          App Development: Your mobile device has now become the coolest portal
          into your digital self.
        </p>
        <button @click.prevent.stop="gotoapp()">Know more</button>
      </div>
      <div
        class="
          service
          d-flex
          flex-column
          justify-content-center
          align-items-center
          text-center
        "
      >
        <img
          src="https://info.assleit.com/assets/images/main-service2.png"
          alt=""
        />
        <h2>Website Development</h2>
        <p>
          Web Development: We don't just sell websites; we design websites that
          SELL.
        </p>
        <button @click.prevent.stop="gotoweb()">Know more</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    gotoapp() {
      var mq499 = window.matchMedia("(max-width:499px)");
      var mq576 = window.matchMedia("(max-width:576px)");
      var mq768 = window.matchMedia("(max-width:768px)");
      var mq992 = window.matchMedia("(max-width:992px)");
      var mq1166 = window.matchMedia("(max-width:1166px)");

      if (mq499.matches) {
        window.scrollTo(0, 2100);
      } 
      else if (mq576.matches) {
        window.scrollTo(0, 1960);
      } 
      else if (mq768.matches) {
        window.scrollTo(0, 1600);
      } 
      else if (mq992.matches) {
        window.scrollTo(0, 1420);
      } 
      else if (mq1166.matches) {
        window.scrollTo(0, 1180);
      } 
      else {
        window.scrollTo(0, 1120);
      }
    },
    gotoweb() {
      var mq499 = window.matchMedia("(max-width:499px)");
      var mq576 = window.matchMedia("(max-width:576px)");
      var mq768 = window.matchMedia("(max-width:768px)");
      var mq992 = window.matchMedia("(max-width:992px)");
      var mq1166 = window.matchMedia("(max-width:1166px)");

      if (mq499.matches) {
        window.scrollTo(0, 3000);
      } 
      else if (mq576.matches) {
        window.scrollTo(0, 2635);
      } 
      else if (mq768.matches) {
        window.scrollTo(0, 2280);
      } 
      else if (mq992.matches) {
        window.scrollTo(0, 1870);
      } 
      else if (mq1166.matches) {
        window.scrollTo(0, 1660);
      } 
      else {
        window.scrollTo(0, 1530);
      }
    },
  },
};
</script>

<style scoped>
.containerr {
  width: 100vw;
  background: white;
}
.containerr h1 {
  font-size: 2rem;
  font-weight: bold;
}
.service {
  width: 30vw;
  padding: 20px;
  margin: 20px;
}
.service img {
  height: 150px;
  margin: 10px;
}
.service h2 {
  font-size: 1.8rem;
}
.service p {
  font-size: 1rem;
}
.service h2,
.service p,
.service button {
  margin: 10px 0;
}
.service button {
  border: none;
  background: rgb(221, 221, 221);
  padding: 5px 10px;
  border-radius: 10px;
  color: rgb(80, 80, 80);
}
.service button:hover {
  color: rgb(44, 44, 44);
}

@media (max-width: 992px) {
  .service {
    width: 40vw;
  }
}
@media (max-width: 576px) {
  .service {
    width: 70vw;
  }
}
</style>