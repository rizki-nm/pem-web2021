<template>
  <header class="bg-custom">
    <div class="container">
      <div class="row">
        <div class="col-12 col-lg-6 mt-5 mt-lg-0 align-self-center">
          <div>
            <h1 class="fw-bold title">Temu Dokter</h1>
          </div>
          <div class="mt-4">
            <h5 class="tema">Buat appointment dengan dokter kami yang terpercaya!</h5>
          </div>
          <div class="mt-4">
            <router-link class="btn btn-sm btn-primary font-button" :to="{ name: 'Appointment' }" role="button">Buat Appointment</router-link>
          </div>
        </div>
        <div class="col-0 col-lg-6">
          <div class="d-lg-block">
            <img class="img-fluid" src="../assets/images/hero.png" alt="Logo">
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header"
}
</script>

<style scoped>
.bg-custom {
  background-color: #f5fdfc;
}
.font-button {
  font-size: 14px;
}
</style>