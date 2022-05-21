<template>
  <main class="px-3">
    <h1>AMMIN-ID</h1>
    <p class="lead">Silahkan Check Pesanan (OrderId) Anda Dibawah Ini </p>
    <form class="lead container-sm" style="max-width : 250px" @submit.prevent="handleCheckOrder">
      <div class="mb-3">
        <label for="target" class="form-label">Check Pesanan</label>
        <input v-model="orderId" type="text" class="form-control" id="target" placeholder="Check Pesanan Mu Disini">
      </div>
      <button type="submit" class="btn btn-primary">Check</button>
    </form>
  </main>
</template>
<script>
  import {mapWritableState, mapActions} from 'pinia'
  import checkOrderStore from '../stores/checkOrder.js'
  export default {
    name: 'CheckOrder',
    methods : {
      ...mapActions(checkOrderStore, ['getCheck']),
      handleCheckOrder(){
        this.getCheck()
      }
    },
    computed : {
      ...mapWritableState(checkOrderStore, ['orderId'])
    }
  }
</script>