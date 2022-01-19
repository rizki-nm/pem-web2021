<template>
  <div class="text-center mt-5">
    <h1>Appointment Forms</h1>
  </div>

  <div class="row ">
    <div class="col-lg-7 mx-auto">
      <div class="card mt-2 mx-auto p-4 bg-light">
        <div class="card-body bg-light">
          <div class="container">
            <form id="contact-form" role="form">
              <div class="controls">
                <div class="row">
                  <div class="col-md-6">
                    <div class="form-group"> <label for="form_name">Nama Lengkap *</label> <input id="form_name" type="text" name="name" class="form-control mt-1 mb-3" placeholder="Tulis nama lengkap Anda *" required="required" data-error="Nama lengkap tidak boleh kosong."> </div>
                  </div>
                  <div class="col-md-6">
                    <div class="form-group"> <label for="form_lastname">Alamat *</label> <input id="form_lastname" type="text" name="surname" class="form-control mt-1 mb-3" placeholder="Tulis alamat Anda *" required="required" data-error="Alamat tidak boleh kosong."> </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-6">
                    <div class="form-group"> <label for="form_email">Tanggal Lahir *</label> <input id="form_email" type="date" name="date" class="form-control mt-1 mb-3" required="required" data-error="Tanggal lahir tidak boleh kosong."> </div>
                  </div>
                  <div class="col-md-6">
                    <div class="form-group">
                      <label for="form_need">Pilih Dokter yang Anda butuhkan *</label>
                      <select id="form_need" name="need" class="form-control mt-1 mb-3" required="required" data-error="Pilih Dokter.">
                        <option value="" selected disabled>--Pilih Dokter--</option>
                        <option v-for="(key, item) in pilihan" :value="item">{{ key }}</option>
                      </select> </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-12">
                    <div class="form-group"> <label for="form_message">Keluhan *</label> <textarea id="form_message" name="message" class="form-control mt-1 mb-3" placeholder="Jelaskan keluhan Anda." rows="4" required="required" data-error="Tulis keluhan Anda."></textarea> </div>
                  </div>
                  <div class="col-md-12">
                    <input type="submit" class="btn btn-success btn-send pt-2 btn-block " value="Send Message">
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AppointmentForms",
  data() {
    return {
      pilihan: {
        "1": "dr. Rizki - Dokter Umum",
        "2": "dr. Nuzul - Dokter Anak",
        "3": "dr. Muzaki - Dokter Gigi",
        "4": "dr. Mahassih - Dokter Anak",
        "5": "dr. Hanum - Dokter Gigi",
        "6": "dr. Lembayung - Dokter Umum",
        "7": "dr. Doremi - Dokter Anak",
        "8": "dr. Budi - Dokter Umum",

      }
    }
  }
}
</script>

<style scoped>
h1 {
  margin: 40px;
}

label {
  color: #333
}

.btn-send {
  font-weight: 300;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  width: 80%;
  margin-left: 3px
}

.card {
  margin-left: 10px;
  margin-right: 10px
}
</style>