<template>
  <main class="px-3">
    <h1>AMMIN-ID</h1>
    <p class="lead">Silahkan Login Terlebih Dahulu </p>
    <form @submit.prevent="handleLogin" class="lead container-sm" style="max-width : 250px" enctype="multipart/form-data">
      <div class="mb-3">
        <label for="email" class="form-label">Email</label>
        <input v-model="email" type="text" class="form-control" id="email" placeholder="Masukkan Email....">
        <label for="password" class="form-label">Password</label>
        <input v-model="password" type="password" class="form-control" id="password" placeholder="Masukkan Password....">
      </div>
      <button type="submit" class="btn btn-primary">Login</button>
    </form>
    <p>Belum Terdaftar ? Silahkan Klik <a href="#" @click.prevent="toRegis">Daftar</a> </p>
  </main>
</template>
<script>
  import {mapWritableState, mapActions} from 'pinia'
  import authStore from '../stores/auth.js'
  export default {
    name: 'LoginPage',
    computed : {
      ...mapWritableState(authStore, ['email','password'])
    },
    methods : {
      ...mapActions(authStore, ["login"]),
      toRegis(){
        this.$router.push({name : 'register'})
      },
      handleLogin(){
        this.login()
      }
    }
  }
</script>