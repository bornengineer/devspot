// here the vue app is created and all the other dependencies and tools are imported and used

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Particles from "particles.vue3";
import AOS from 'aos';
import 'aos/dist/aos.css';
import "bootstrap/dist/css/bootstrap.css";
import VueTilt from 'vue-tilt.js'
// import VueMeta from 'vue-meta'

const app = createApp(App);
app.use(store);
app.use(router);
app.use(Particles);
app.use(VueTilt);
// app.use(VueMeta);
app.mount("#app");

export default{
    created(){
        AOS.init();
    }
}

import "bootstrap/dist/js/bootstrap.js";

