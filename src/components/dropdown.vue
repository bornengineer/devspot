<template>
  <!-- i m using 2 divs for the dropdown 1 for big screens and one for small screens -->

  <!--It will work on hover here-->
  <div
    class="service d-xxl-flex d-xl-flex d-lg-flex d-md-flex d-none d-sm-none"
    @mouseover="isOpen = true"
    @mouseleave="isOpen = false"
  >
    <!-- using mouse over and leave event to toggle the dropdown veiw -->
    <div class="navs">
      <div class="servicesdrop d-flex justify-content-center">
        <!-- it is the service dropdown text and svg which will rotate on hover -->
        <a href="javascript:void(0)">{{ title }}</a>
        <svg
          stroke="currentColor"
          fill="currentColor"
          stroke-width="0"
          viewBox="0 0 448 512"
          color="#377eeb"
          size="18"
          class="dropdown-icon1"
          height="19"
          width="20"
          xmlns="http://www.w3.org/2000/svg"
          style="color: #ee2f45"
        >
          <path
            d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"
          ></path>
        </svg>
      </div>
      <!-- transition will give the fade effect when dropdown appears -->
      <transition name="dropdown-fade">
        <div
          class="
            sub-menu
            d-flex
            justify-content-center
            align-items-center
            flex-wrap
          "
          v-if="isOpen"
        >
          <!-- using v-for loop to iterate over all the services to show -->
          <!-- navs1 is the individual service box -->
          <div
            class="d-flex flex-column align-items-center dev-box"
            style=""
            v-for="(item, i) in items"
            :key="i"
            id="navs1"
          >
            <div class="d-flex flex-row">
              <!-- move up function / method is used to go to top of the page
               when we go to other service page -->
              <router-link @click="moveUp" :to="item.link"
                ><div>
                  <img
                    style=""
                    class="image-fluid"
                    :src="item.img"
                    alt="img"
                  /></div
              ></router-link>
              <router-link
                style="margin-left: -70px"
                @click="moveUp"
                :to="item.link"
                >{{ item.title }}</router-link
              >
            </div>
            <p class="container-fluid text-center dev-text" style="">
              {{ item.devtext }}
            </p>
          </div>
        </div>
      </transition>
    </div>
  </div>

  <!--It will work on click here-->
  <div
    class="
      navs
      d-flex
      flex-column
      justify-content-start
      align-items-center
      d-xxl-none d-xl-none d-lg-none d-md-none d-sm-flex
    "
  >
    <div
      @click="isOpen = !isOpen"
      class="
        servicesdrop
        d-flex
        justify-content-start
        flex-column
        align-items-start
      "
    >
    <!-- here, binding the text color to change the color from gray to white when clicked -->
      <a
        v-bind:style="{
          color: isOpen ? 'white' : '#a3a3a3',
        }"
        class="to-style-a-tag"
        href="javascript:void(0)"
        >{{ title }}</a
      >
      <svg
        stroke="currentColor"
        fill="currentColor"
        stroke-width="0"
        viewBox="0 0 448 512"
        color="#377eeb"
        size="18"
        class="dropdown-icon inline mt-1"
        height="19"
        width="20"
        xmlns="http://www.w3.org/2000/svg"
        v-bind:style="{
          transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
          color: isActive1 ? '#ee2f45' : '#ee2f45',
        }"
      >
        <path
          d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"
        ></path>
      </svg>
    </div>
    <transition name="dropdown-fade">
      <div
        style="
          background: rgb(63 81 106 / 52%);
          padding: 20px 0;
          margin: 20px 0 -15px 0;
          border-radius: 0 0 30px 30px;
          width: 94vw;
        "
        class="
          sub-menu
          d-flex
          justify-content-center
          align-items-center
          flex-wrap
          d-xxl-none d-xl-none d-lg-none d-md-none d-sm-flex
        "
        v-if="isOpen"
      >
        <div
          class="d-flex flex-column align-items-center dev-box"
          style=""
          v-for="(item, i) in items"
          :key="i"
          id="navs1"
        >
          <div class="d-flex flex-row">
            <router-link @click="moveUp" :to="item.link"
              ><div>
                <img :src="item.img" :alt="item.title" /></div
            ></router-link>
            <router-link
              class="dropdown-text"
              style="margin-left: -70px"
              @click="moveUp"
              :to="item.link"
              >{{ item.title }}</router-link
            >
          </div>
          <p class="container-fluid text-center dev-text" style="">
            {{ item.devtext }}
          </p>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  methods: {
    moveUp() {
      this.isOpen = false;
      window.scrollTo(0, 0);
    },
  },
  name: "dropdown",
  // taking these props from navbar to show the services content
  props: ["title", "items"],
  data() {
    return {
      isOpen: false,
    };
  },
};
</script>

<style scoped>
.dropdown-icon {
  float: left !important;
  margin-left: -25vw !important;
  margin-top: 6px !important;
}

.to-style-a-tag {
  font-size: 20px !important;
  text-decoration: none !important;
  position: absolute;
  left: 8vw !important;
}
img {
  height: 50px;
  width: 50px;
  margin-left: -50px;
  margin-top: 0px;
  filter: invert(1);
  transition: all 0.3s ease;
}

svg {
  margin-left: 5px !important;
  margin-top: 5px;
  position: relative;
  transition: all 0.5s ease;
}
.service:hover svg {
  transform: rotate(180deg);
}
.service {
  height: 60px;
  width: 143.2px;
  display: block;
  align-items: center;
  justify-content: center;
}
#navs {
  position: absolute;
  transition: all 0.5s ease;
}
.navs {
  margin: 10px 0 !important;
  transition: all 0.5s ease;
}
#navs1 {
  transition: all 0.2s ease;
  margin: 10px;
  border-radius: 20px;
  padding-top: 20px;
  transition: all 0.5s ease;
  width: 250px;
}
.dev-box {
  border: 2px solid rgba(255, 255, 255, 0.377);
  min-height: 150px;
}

.dev-text {
  color: rgb(195, 195, 195);
  padding: 5px;
  max-width: 240px;
  font-size: 13.5px;
  margin-bottom: 20px;
}

#navs a {
  color: #dfdfdf;
  font-size: 18px;
  transition: all 0.5s ease;
  text-decoration: none;
  position: relative;
}
#navs1 a {
  color: #ffffff;
  font-size: 18px;
  transition: all 0.2s ease;
  text-decoration: none;
  text-align: center;
  padding-bottom: 10px;
  width: 120px;
  margin: 0 20px;
}

#navs a:hover {
  color: #ffffff;
}

#navs1:hover {
  background-color: #ffdb5a;
  border: 2px solid rgba(27, 27, 27, 0.7);
}
#navs1:hover img {
  filter: invert(0);
}
#navs1:hover a {
  color: #000000;
}
#navs1:hover p {
  color: #000000;
}

#navs a#logo:hover::after {
  opacity: 0;
  padding-right: 0px;
  margin-top: 20px;
}

/* submenu is the dropdown view where services are shown, apologies for inappropriate name */
#navs .sub-menu {
  position: absolute;
  background-color: rgba(0, 0, 0, 0.9);
  background: rgb(12 13 12 / 90%);
  top: 60px;
  transform: translateX(-45%);
  width: 62vw;
  height: auto;
  padding: 5px 10px 10px 10px;
  border-radius: 0 0 30px 30px;
  margin-bottom: 20px;
  border-bottom: 7px solid rgb(29, 29, 29);
}

/* this is used for transition tag to give fade effect */
.dropdown-fade-enter-active,
.dropdown-fade-leave-active {
  transition: all 0.2s ease-in-out;
}
.dropdown-fade-enter-from,
.dropdown-fade-leave-to {
  opacity: 0;
  transform: translateY(-12px);
}
@media (max-width: 992px) {
  #navs .sub-menu {
    top: 65px;
    width: 80vw;
    padding: 5px 10px 10px 10px;
  }
}

@media (max-width: 768px) {
  .dev-box {
    min-height: 165px;
  }
  .dropdown-icon {
    margin-left: -29vw !important;
    margin-top: 7px !important;
  }

  .navs .sub-menu {
    width: 84vw !important;
    position: relative;
    padding: 5px 10px 10px 10px;
    top: 50px;
    transform: translateX(0%);
    z-index: 1000;
    margin-top: -35px !important;
    margin-bottom: 40px !important;
  }
  #navs1 {
    margin: 5px;
    width: 220px;
  }
  #navs1 a {
    font-size: 16px;
  }
  .dev-text {
    max-width: 200px;
    font-size: 13.5px;
    margin-bottom: 15px;
  }
  img {
    height: 40px;
  }
}
@media (max-width: 678px) {
  .dropdown-icon {
    margin-left: -26vw !important;
    margin-top: 7px !important;
  }
}
@media (max-width: 576px) {
  .dev-box {
    min-height: 150px;
  }
  .navs .sub-menu {
    width: 90vw;
    position: relative;
    transform: translateX(0%);
    padding: 5px 3px 10px 3px;
  }
  .dropdown-icon {
    margin-left: -25vw !important;
    margin-top: 7px !important;
  }
  #navs1 {
    margin: 3px;
    width: 180px;
  }
  #navs1 a {
    font-size: 14px;
    margin-left: -10px;
  }
  .dev-text {
    max-width: 180px;
    font-size: 12px;
    margin-bottom: 10px;
  }
  img {
    height: 40px;
    width: 40px;
    margin-left: -10px;
  }
}
@media (max-width: 535px) {
  .dropdown-icon {
    margin-left: -23vw !important;
  }
}
@media (max-width: 499px) {
  .servicesdrop svg {
    transform: scale(1.1);
  }
  .dropdown-text {
    max-width: 100px;
  }
  .navs .sub-menu {
    width: 94vw !important;
  }
  .dropdown-icon {
    margin-left: -19vw !important;
    margin-top: 7px !important;
  }
  #navs1 {
    margin: 2px;
    width: 155px;
  }
  #navs1 a {
    font-size: 12px;
    margin-left: -10px;
  }
  .dev-text {
    max-width: 180px;
    font-size: 12px;
    margin-bottom: 10px;
    margin-top: -10px;
  }
  img {
    height: 40px;
    width: 40px;
    margin-left: 0px !important;
  }
  .dev-box {
    margin: 5px !important;
  }
}
</style>
