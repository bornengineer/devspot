<template>
  <!-- this one's used for the social-icons -->
  <div class="container-i fixed-top">
    <div class="sicons">
      <ul>
        <li>
          <a href="https://twitter.com/EncantoTechnol1" target="_blank">
            <i class="fab fa-twitter-square"></i>
          </a>
        </li>
        <li>
          <a
            href="https://www.facebook.com/EncantoTek-113001977956384/"
            target="_blank"
          >
            <i class="fab fa-facebook-square"></i>
          </a>
        </li>
        <li>
          <a
            href="https://instagram.com/encantotech?utm_medium=copy_link"
            target="_blank"
          >
            <i class="fab fa-instagram-square"></i>
          </a>
        </li>
        <li>
          <a href="#" target="_blank">
            <i class="fab fa-linkedin"></i>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.sicons {
  float: left !important;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: fixed;
  width: 36px;
  top: 40%;
  left: 0px !important;
  background-color: rgba(0, 0, 0, 0.8);
  background-size: 2em;
  padding: 6px;
  border-radius: 0 15px 15px 0;
  transition: all 0.2s ease;
}
.sicons:hover {
  box-shadow: 0px 0px 8px 1px rgba(233, 233, 233, 0.698);
}
.sicons ul {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 0px !important;
  padding: 0px !important;
}
.sicons li {
  list-style: none;
  margin: 5px 5px;
  position: relative;
}
.sicons i {
  transform: scale(1.2);
  transition: all 0.3s ease-in-out;
  color: #ffffffbc;
}
.sicons i:hover {
  color: #ffffff;
  transform: scale(1.5);
}

@media (max-width: 992px) {
  .sicons i {
    transform: scale(1.1);
  }
  .sicons i:hover {
    transform: scale(1.4);
  }
  .sicons li {
    margin: 4px 4px;
  }
}
@media (max-width: 768px) {
  .sicons i {
    transform: scale(1);
  }
  .sicons i:hover {
    transform: scale(1.3);
  }
  .sicons li {
    margin: 3px 3px;
  }
}
@media (max-width: 575px) {
  .sicons i {
    transform: scale(1);
  }
  .sicons i:hover {
    transform: scale(1.3);
  }
  .sicons li {
    margin: 2px 2px;
  }
}
@media (max-width: 499px) {
  .sicons i {
    transform: scale(1);
    color: #ffffff;
  }
  .sicons i:hover {
    transform: scale(1);
    color: #ffffff;
  }
  .sicons li {
    margin: 2px 2px;
  }
  .sicons {
    top: 10%;
    width: 34px;
  }
}
</style>
