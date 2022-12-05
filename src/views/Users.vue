<template>
  <!-- all the things on home page are displayed here -->
  <!-- <preloader /> -->
  <navbar />
  <socialIcons />
  <contactSidebar />
  <hamburger />
  <h1>Users</h1>
  <div class="cont">
      <div v-for="(item, i) in userdata" :key="i" >
        <div @change="getUser()" class="containerrr">
          <div class="namepic">
            <div class="name">
              <h3 style="margin-bottom: 35px">
                Name: <span> {{ firstname }}</span>
              </h3>
              <h3 style="margin-bottom: 35px">
                Role: <span> {{ userdata[i] }}</span>
              </h3>
              <!-- <h3 style="margin-bottom: 20px">
                Last Name: <span> {{ lastname }}</span>
              </h3> -->
            </div>
            <img :class="gender" :src="image" :alt="`${firstname} ${lastname}`" />
          </div>
          <h3>
            Email: <span> {{ email }}</span>
          </h3>
          <!-- <h3>
            DOB: <span> {{ dob }}</span>
          </h3> -->
          <h3>
            Location: <span>{{ country }}</span>
          </h3>
          <!-- <h3>Postcode: <span> {{ postcode }} </span></h3> -->
          <!-- <h3>
            Gender: <span> {{ gender }}</span>
          </h3> -->
          <!-- <h3>
            Phone: <span> {{ phone }}</span>
          </h3> -->
          <!-- <button @change="getUser()" :class="gender">Generate User</button> -->
        </div>
      </div>
  </div>
  <footer1 />
  <footerMarquee />
  <particles />
</template>
  
  <script>
// @ is an alias to /src
import footerMarquee from "@/components/footerMarquee.vue";
import hamburger from "@/components/hamburger.vue";
import particles from "@/components/particles.vue";
import footer1 from "@/components/footer1.vue";
import navbar from "@/components/navbar.vue";
import socialIcons from "@/components/socialIcons.vue";
import contactSidebar from "@/components/contactSidebar.vue";

export default {
  data() {
    return {
    userdata :["Devops", "Devrel", "Software engineer", "SDE-2", "SDET", "SRE", "MERN Stack Developer", "FrontEnd Engineer" , "Backend Engineer"],
    firstname: "",
    lastname: "",
    email: "",
    dob: "",
    city: "",
    country: "",
    postcode: "",
    gender: "",
    phone: "",
    image: "",
    };
  },
  created: function () {
    this.getUser();
  },
  methods: {
    async getUser() {
      const res = await fetch("https://randomuser.me/api");
      const { results } = await res.json();
      console.log(results);

      this.firstname = results[0].name.first;
      this.lastname = results[0].name.last;
      this.email = results[0].email;
      this.dob = results[0].dob.date.slice(0, 10);
      this.city = results[0].location.city;
      this.country = results[0].location.country;
      this.postcode = results[0].location.postcode;
      this.gender = results[0].gender;
      this.phone = results[0].phone;
      this.image = results[0].picture.large;
    },
    // moveup method is used to move to the top on the page we are going to
    moveUp() {
      window.scrollTo(0, 0);
    },
  },
  name: "Home",
  components: {
    footerMarquee,
    hamburger,
    particles,
    footer1,
    navbar,
    socialIcons,
    contactSidebar,
  },
};
</script>
  
<style>
/* these styles will be applied to every single component
   and element present in the project cause it isn't scoped */
*,
:after,
:before {
  box-sizing: border-box;
}

body {
  /* margin: 0; */
  background: linear-gradient(180deg, #cbcbc7, #6e6e6c) fixed;
  box-sizing: border-box;
  overflow-x: hidden !important;
  font-family: Regular !important;
}
h1 {
  display: flex;
  justify-content: center;
  color: rgba(0, 0, 0, 0.6) !important;
  margin-top: 50px;
  margin-bottom: 50px;
  color: white;
  font-size: 2.5rem;
  font-weight: bold;
}

/* it will affect the color of any selected text on the website */
::selection {
  color: none;
  background: rgba(54, 37, 9, 0.3);
}

.cont {
  display: flex;
  justify-content: center;
  height: auto;
  flex-wrap:wrap;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
    margin-bottom: 50px;
    margin-top: -150px;
    transform: scale(.8);
}

.namepic {
  display: flex;
  width: 100%;
  /* height: 158px; */
  justify-content: space-between;
  align-items: center;
  /* margin-top: 20px; */
  font-size: 15px;
}

.name h3 {
  /* margin: 0 0 35px 0; */
}

.containerrr {
  width:95%;
  /* margin:30px; */
  margin:20px;
  display: flex;
  justify-content: start;
  align-items: center;
  flex-direction: column;
  border: 2px solid #424242;
  padding: 20px 40px;
  border-radius: 20px 20px 20px 20px;
  background-color: rgba(94, 94, 94, 0.9);
}

h1 {
  color: rgb(238, 179, 16);
  /* margin-bottom: 0px; */
  /* height: 80px; */
}

.headcont {
  /* background-color: rgba(0, 0, 0, 0.8); */
  /* background-color: gray; */
  width: 40%;
  border: 2px solid #7c7c7c;
  border-bottom: none;
  margin-top: 20px;
  display: flex;
  justify-content: center;
  border-radius: 20px 20px 0 0;
  align-items: center;
}

h3 {
  color: rgb(187, 187, 187);
}

span {
  color: rgb(238, 238, 238);
}

.cont img {
  border-radius: 50%;
  height: 100px;
}

button {
  padding: 10px;
  color: white;
  font-size: 15px;
  font-weight: bold;
  border-radius: 10px;
  cursor: pointer;
  margin: 20px 0;
  transition: all 0.2s ease-in-out;
}

button:hover {
  transform: scale(1.05);
}

.male {
  border: 3px solid rgba(68, 202, 226, 0.2);
  background-color: rgb(89, 172, 211);
}

.female {
  border: 3px solid rgb(228, 147, 185);
  background-color: rgb(214, 88, 197);
}

@media (max-width: 991px) {
  .containerrr {
    padding: 20px 50px;
  }
  h1 {
    font-size: 2em;
  }
}

@media (max-width: 767px) {
  .containerrr {
    padding: 20px 40px;
  }
  h1 {
    font-size: 1.8em;
  }
}

@media (max-width: 575px) {
  .containerrr {
    padding: 20px 30px;
  }
  h1 {
    font-size: 1.6em;
  }
  .headcont {
    margin-top: 5px;
  }
}
</style>
  