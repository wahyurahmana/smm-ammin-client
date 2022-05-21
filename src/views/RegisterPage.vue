<template>
  <main class="px-3">
    <h1>AMMIN-ID</h1>
    <p class="lead">Silahkan Daftar Terlebih Dahulu </p>
    <form @submit.prevent="handleRegister" class="lead container-sm" style="max-width : 250px" enctype="multipart/form-data">
      <div class="mb-3">
        <label for="email" class="form-label">Email</label>
        <input v-model="email" type="text" class="form-control" id="email" placeholder="Masukkan Email....">
        <label for="password" class="form-label">Password</label>
        <input v-model="password" type="password" class="form-control" id="password" placeholder="Masukkan Password....">
        <label for="formFileSm" class="form-label">Photo Manis Mu Dong</label>
        <input @change="(e) => photo = e.target.files[0]" name="photo_upload" class="form-control form-control-sm" id="formFileSm" type="file">
      </div>
      <button type="submit" class="btn btn-primary">Daftar</button>
    </form>
    <p>Sudah Terdaftar ? Silahkan Klik <a href="#" @click.prevent="toLogin">Login</a> </p>
  </main>
</template>
<script>
  import {mapWritableState, mapActions} from 'pinia'
  import authStore from '../stores/auth.js'
  export default {
    name: 'RegisterPage',
    computed : {
      ...mapWritableState(authStore, ['email','password','photo'])
    },
    methods : {
      ...mapActions(authStore, ["register"]),
      handleRegister(){
        this.register()
      },
      toLogin(){
        this.$router.push({name : 'login'})
      }
    }
  }
</script>