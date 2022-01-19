<template>
  <main class="bg-custom">
    <!-- Apa itu Temu Dokter -->
    <div class="container">
      <div class="row">
        <div class="col-lg-6">
          <div class="mt-5 mb-5 d-none d-lg-block">
            <img class="img-fluid" src="../assets/images/hero-2.png">
          </div>
        </div>
        <div class="col-12 col-lg-6 mt-5 mt-lg-0 align-self-center">
          <div>
            <h3 class="fw-bold text-center title2">-- Tentang Temu Dokter</h3>
          </div>
          <div class="mt-4">
            <p>Temu Dokter adalah layanan aplikasi kesehatan berbasis web. Di sini, Anda dapat dengan mudah membuat janji temu atau appointment dengan dokter kami.</p>
          </div>
        </div>
      </div>
    </div>
    <!-- End Apa itu BTNG -->

    <div class="bg-custom">
      <br>
      <br>
    </div>

    <!-- Daftar Doctors -->
    <div class="container content-scroll bg-custom" id="doctors">
      <div class="row justify-content-center">

        <!-- Title -->
        <div class="col-12 mt-5">
          <div>
            <h3 class="fw-bold text-center title2">-- Daftar Dokter</h3>
          </div>
        </div>
        <!-- End Title -->

        <!-- 4 Dokter -->
        <div  v-for="doctor in doctors" :key="doctor.nama" class="col-12 col-lg-6 mt-5">
          <div class="row my-3 mx-lg-3">
            <div class="col-4">
              <img class="img-fluid" :src="doctor.img">
            </div>
            <div class="col-8">
              <h1 class="fw-bold mt-2 title3">{{ doctor.nama }}</h1>
              <p class="font-custom fw-light text-secondary">{{ doctor.spesialis }}</p>
              <p class="font-custom">{{ doctor.rs }}</p>
            </div>
          </div>
        </div>

      </div>
      <!-- End Divisi Pelatihan -->

    </div>

    <!-- Button Daftar -->
    <div class="container">
      <div class="row mt-5 mb-5 justify-content-center">
        <div class="col-6 col-sm-5 col-md-4 col-lg-3 col-xl-2 text-center">
          <router-link to="/doctors" class="btn btn-primary font-button">Lihat Semua Dokter</router-link>
        </div>
      </div>
    </div>
    <!-- End Button Daftar -->

    <div class="bg-custom">
      <br>
      <br>
    </div>

  </main>

</template>

<script>
import ImageDoctorMale from '@/assets/images/doctor-male.png'
import ImageDoctorFemale from '@/assets/images/doctor-female.png'

export default {
  name: "MainContentHome",
  data() {
    return {
      doctors: [
        {
          nama: 'dr. Rizki',
          spesialis: 'Dokter Umum',
          rs: 'RS Medika Center',
          img: ImageDoctorMale
        },
        {
          nama: 'dr. Nuzul',
          spesialis: 'Dokter Anak',
          rs: 'RS Medika Center',
          img: ImageDoctorMale
        },
        {
          nama: 'dr. Muzaki',
          spesialis: 'Dokter Gigi',
          rs: 'RS Medika Center',
          img: ImageDoctorMale
        },
        {
          nama: 'dr. Mahassih',
          spesialis: 'Dokter Anak',
          rs: 'RS Medika Center',
          img: ImageDoctorFemale
        }
      ]
    }
  }
}
</script>

<style scoped>
.font-custom {
  font-size: 14px;
}

.bg-custom {
  background-color: #f5fdfc;
}
.font-button {
  font-size: 14px;
}
</style>