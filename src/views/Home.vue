<template>
  <main class="px-3">
    <h1>AMMIN-ID</h1>
    <p class="lead">Hadir Untuk Memenuhi Kebutuhan Social Media Marketing Anda, Ingin Mendapatkan Gratis Layanan ? Yuk Ambil Sekarang Dibawah Ini</p>
    <form class="lead container-sm" style="max-width : 250px" @submit.prevent="handleGetFree">
      <div class="mb-3">
        <label for="target" class="form-label">Target</label>
        <input v-model="target" type="text" class="form-control" id="target" placeholder="Username Profile Mu">
      </div>
      <select v-model="service" class="form-select mb-3" aria-label="Default select example">
        <option value="3274">Followers IG Indonesia</option>
        <option disabled>Comming Soon</option>
      </select>
      <button type="submit" class="btn btn-primary">AMBIL</button>
    </form>
  </main>
</template>
<script>
import {mapActions, mapWritableState} from 'pinia'
import getFreeStore from './../stores/getFree.js'
  export default {
    name: 'Homepage',
    computed : {
      ...mapWritableState(getFreeStore, ['service', 'target'])
    },
    methods : {
      ...mapActions(getFreeStore, ['freeFollowerIg']),
      handleGetFree(){
        this.freeFollowerIg()
        this.$router.push({name: 'home'})
      }
    }
  }
</script>