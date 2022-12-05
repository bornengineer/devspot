<template>
  <div
    data-aos="fade"
    class="
      containerr
      d-flex
      flex-column
      justify-content-center
      align-items-center
    "
  >
    <h3 class="text-center" data-aos="fade-up" data-aos-delay="300" data-aos-duration="1000" >WHAT CLIENTS SAY</h3>
    <div class="d-flex justify-content-center">
      <div
        data-aos="flip-up"
        data-aos-delay="300"
         data-aos-duration="1000"
        id="carouselExampleIndicators"
        class="carousel slide testimonials my-3"
        data-bs-ride="carousel"
      >
        <div class="carousel-indicators mb-2">
          <button
            style="height: 12px; width: 12px; border-radius: 50%"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            style="height: 12px; width: 12px; border-radius: 50%"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            style="height: 12px; width: 12px; border-radius: 50%"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div class="carousel-inner">

          <!-- 1st slide -->
          <div class="carousel-item active">
            <div class="testimonial d-flex justify-content-center">
              <div
                class="
                  user
                  text-center
                  d-flex
                  flex-column
                  justify-content-center
                  align-items-center
                "
              >
                <img :src="user1.image" alt="" />
                <h4>{{ user1.name }}</h4>
                <h5>{{ user1.designation }}</h5>
              </div>
              <div class="aposdetails d-flex flex-row">
                <div class="apostophie">
                  <img
                    src="https://ik.imagekit.io/2eribsa8w/quote_PJEWl_ZP6gP.svg"
                    alt=""
                  />
                </div>
                <div
                  class="
                    details
                    d-flex
                    flex-column
                    align-items-start
                    justify-content-center
                  "
                >
                  <img
                    style="margin-bottom: 10px; height: 20px; opacity: 0.9"
                    src="https://www.pngall.com/wp-content/uploads/4/5-Star-Rating-PNG-File.png"
                    alt=""
                  />
                  <p>
                    {{ user1.text }}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <!-- 2nd slide -->
          <div class="carousel-item">
            <div class="testimonial d-flex justify-content-center">
              <div
                class="
                  user
                  d-flex
                  text-center
                  flex-column
                  justify-content-center
                  align-items-center
                "
              >
                <img :src="user2.image" alt="" />
                <h4>{{ user2.name }}</h4>
                <h5>{{ user2.designation }}</h5>
              </div>
              <div class="aposdetails d-flex flex-row">
                <div class="apostophie">
                  <img
                    src="https://ik.imagekit.io/2eribsa8w/quote_PJEWl_ZP6gP.svg"
                    alt=""
                  />
                </div>
                <div
                  class="
                    details
                    d-flex
                    flex-column
                    align-items-start
                    justify-content-center
                  "
                >
                  <img
                    style="margin-bottom: 10px; height: 20px; opacity: 0.9"
                    src="https://www.pngall.com/wp-content/uploads/4/5-Star-Rating-PNG-File.png"
                    alt=""
                  />
                  <p>
                    {{ user2.text }}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <!-- 3rd slide -->
          <div class="carousel-item">
            <div class="testimonial d-flex justify-content-center">
              <div
                class="
                  user
                  d-flex
                  text-center
                  flex-column
                  justify-content-center
                  align-items-center
                "
              >
                <img :src="user3.image" alt="" />
                <h4>{{ user3.name }}</h4>
                <h5>{{ user3.designation }}</h5>
              </div>
              <div class="aposdetails d-flex flex-row">
                <div class="apostophie">
                  <img
                    src="https://ik.imagekit.io/2eribsa8w/quote_PJEWl_ZP6gP.svg"
                    alt=""
                  />
                </div>
                <div
                  class="
                    details
                    d-flex
                    flex-column
                    align-items-start
                    justify-content-center
                  "
                >
                  <img
                    style="margin-bottom: 10px; height: 20px; opacity: 0.9"
                    src="https://www.pngall.com/wp-content/uploads/4/5-Star-Rating-PNG-File.png"
                    alt=""
                  />
                  <p>
                    {{ user3.text }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button> -->
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
  data() {
    return {
      user1: {
        image: "https://cdn1.iconfinder.com/data/icons/photography-2/512/YPS__human_avatar_portrait_photography_picture_photo-512.png",
        name: "Jonathan David",
        designation: "Music Director",
        rating:
          "https://www.pngall.com/wp-content/uploads/4/5-Star-Rating-PNG-File.png",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
      },
      user2: {
        image: "https://cdn1.iconfinder.com/data/icons/photography-2/512/YPS__human_avatar_portrait_photography_picture_photo-512.png",
        name: " James Wong",
        designation: "Manager-Global Sales",
        rating:
          "https://www.pngall.com/wp-content/uploads/4/5-Star-Rating-PNG-File.png",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
      },
      user3: {
        image: "https://cdn1.iconfinder.com/data/icons/photography-2/512/YPS__human_avatar_portrait_photography_picture_photo-512.png",
        name: "Kenji Okamoto",
        designation: "CMO",
        rating:
          "https://www.pngall.com/wp-content/uploads/4/5-Star-Rating-PNG-File.png",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
      },
    };
  },
};
</script>

<style scoped>
.containerr {
  margin: 20px 0 60px 0;
}
.containerr h3 {
  font-weight: bold;
  font-size: 2.5rem;
  color: #00000099;
  margin-bottom: 30px;
  width: 90%;
}

.testimonials {
  width: 65vw;
  height:350px;
  border-radius: 20px;
  background:rgba(0, 0, 0, 0.7);
  box-shadow: inset -3px -3px 10px 0px rgba(241, 230, 200, 0.5);
}
.testimonial {
  width: 65vw;
  height: 270px;
  margin-top: 30px;
}
.user img {
  width: 60px;
  border-radius: 50%;

  border: 2px solid rgba(255, 255, 255, 0.746);
  background: white;
}
.user {
  max-width: 20vw;
}
.user h5 {
  font-weight: normal;
  color: rgb(219, 219, 219);
}
.user h4 {
  margin-top: 10px;
  color: white;
}
.details {
  margin-left: 30px;
}
.aposdetails {
  max-width: 42vw;
  margin-left: 20px;
  padding-top: 30px;
}
.details p {
  font-size: 1.2rem;
  color: rgb(255, 255, 255);
  line-height: 1.7;
}
.apostophie {
  padding-top: 40px;
}
@media (max-width: 991px) {
  .testimonials {
    width: 70vw;
  }
  .testimonial {
    width: 70vw;
    margin-top: 25px;
  }
  .aposdetails {
    max-width: 45vw;
    padding-top: 25px;
  }
  .containerr h3 {
    font-size: 2.2rem;
  }
}
@media (max-width: 767px) {
  .testimonials {
    width: 80vw;
  }
  .testimonial {
    width: 80vw;
    margin-top: 25px;
  }
  .aposdetails {
    max-width: 50vw;
    padding-top: 20px;
  }
  .containerr h3 {
    font-size: 2rem;
  }
  .details p{
    font-size: 1rem;
  }
}
@media (max-width: 680px) {
  .testimonials {
    height: 420px;
    width: 80vw;
  }
  .testimonial {
    align-items: center;
    flex-direction: column;
    width: 80vw;
    height: 420px;
    margin-top: 0px;
  }
  .aposdetails {
    margin-left: 0px;
    max-width: 70vw;
    padding-top: 20px;
  }
  .user {
    max-width: 60vw;
  }
  .apostophie img {
    height: 26px;
  }
  .details {
    margin-left: 25px;
  }
}
@media (max-width: 575px) {
  .testimonials {
    height: 500px;
    width: 88vw;
  }
  .testimonial {
    height: 500px;
    width: 88vw;
  }
  .apostophie img {
    height: 23px;
  }
  .details {
    margin-left: 20px;
  }
  .containerr h3 {
    font-size: 1.8rem;
  }
}

@media (max-width: 500px) {
    .testimonials {
    height: 550px;
    width: 88vw;
  }
  .testimonial {
    height: 550px;
    width: 88vw;
  }
  .containerr h3 {
    font-size: 1.6rem;
  }
  .details p{
    font-size:0.8rem !important;
  }
}
</style>