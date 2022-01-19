<template>
  <!-- Navbar -->
  <nav class="navbar navbar-expand-lg navbar-light bg-light" id="navbar">
    <div class="container mt-3">

      <!-- Logo -->
      <router-link to="/" class="navbar-brand">Temu Dokter</router-link>
      <!-- End Logo -->

      <!-- Toggle -->
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
              aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <!-- End Toggle -->

      <!-- Navigation -->
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
          <li class="nav-item mx-3 align-self-center">
            <router-link :to="{ name: 'Home' }" class="nav-link">Home</router-link>
          </li>
          <li class="nav-item mx-3  align-self-center">
            <router-link :to="{ name: 'Doctors' }" class="nav-link">Doctors</router-link>
          </li>
          <li class="nav-item mx-3  align-self-center">
            <a href="#footer" class="nav-link">Contact</a>
          </li>
          <li class="nav-item mx-3  align-self-center">
            <router-link :to="{ name: 'Appointment' }" class="btn btn-primary" role="button">Buat Appointment</router-link>
          </li>
        </ul>
      </div>
      <!-- End Navigation -->
    </div>
  </nav>
  <!-- End Navbar -->

  <router-view/>

  <!-- Footer -->
  <footer id="footer" class="test">
    <div class="container">
      <div class="row mt-5 mt-5">
        <div class="col-12 col-lg-6">
          <div>
            <h3 class="fw-bold title2">Temu Dokter</h3>
          </div>
          <div class="mt-4 ">
            <p>Jalan Nakula I No 5 - 11 Semarang Kompleks UKM UDINUS, Gedung F.2.K</p>
            <p>
              <i class="bi bi-envelope"></i> customer.center@temudokter.com
            </p>
            <a href="https://instagram.com/rrwvx" class="text-decoration-none footer-link">
              <p>
                <i class="bi bi-instagram"></i> temudokter
              </p>
            </a>
          </div>
        </div>
        <div class="col-12 col-lg-3 mt-5 mt-lg-0">
          <div>
            <h3 class="fw-bold title2">Links</h3>
          </div>
          <div class="mt-4 ">
            <ul class="list-unstyled">
              <li>
                <router-link :to="{ name: 'Home' }" class="text-decoration-none footer-link">Home</router-link>
              </li>
            </ul>
            <ul class="list-unstyled">
              <li>
                <router-link :to="{ name: 'Doctors' }" class="text-decoration-none footer-link">Doctors</router-link>
              </li>
            </ul>
            <ul class="list-unstyled">
              <li>
                <router-link :to="{ name: 'Appointment' }" class="text-decoration-none footer-link">Appointment</router-link>
              </li>
            </ul>
          </div>
        </div>
        <div class="col-12 col-lg-3 mt-5 mt-lg-0">
          <div>
            <h3 class="fw-bold title2">Support</h3>
          </div>
          <div class="mt-4 ">
            <ul class="list-unstyled">
              <li>
                <a href="https://dinus.ac.id/" class="text-decoration-none footer-link">UDINUS</a>
              </li>
            </ul>
            <ul class="list-unstyled">
              <li>
                <a href="https://v3.vuejs.org/" class="text-decoration-none footer-link">Vue.js</a>
              </li>
            </ul>
            <ul class="list-unstyled">
              <li>
                <a href="https://getbootstrap.com/" class="text-decoration-none footer-link">Bootstrap</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div class="row mt-5 mb-5 justify-content-center">
        <div class="col-10">
          <div class="text-center">
            <h5 class="footer-copyright">Copyright ©2022 Temu Dokter</h5>
          </div>
        </div>
      </div>

    </div>
  </footer>
  <!-- End Footer -->

</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;700&display=swap');
.navbar {
  scroll-behavior: smooth;
}
.footer-link {
  color: #4FBDBA;
}

.footer-copyright {
  font-size: 14px;
  color: grey;

}

#footer {
  color: #4FBDBA;
  background-color: #072227;
}
</style>
