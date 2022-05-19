<template>
  <header class="mb-auto">
    <div>
      <h3 class="float-md-start mb-0">AMMIN</h3>
      <nav class="nav nav-masthead justify-content-center float-md-end">
        <a class="nav-link" href="#" @click="toHome">GRATIS</a>
        <a class="nav-link" href="#" @click="toBuy">BERBAYAR</a>
        <a class="nav-link" href="#" @click="toContact">KONTAK</a>
        <a class="nav-link" href="#" @click="toCheckOrder">CEK PESANAN</a>
      </nav>
    </div>
  </header>
</template>
<script>
  export default {
    name: 'Header',
    methods : {
      toContact(){
        this.$router.push({name : 'contact'})
      },
      toHome(){
        this.$router.push({name : 'home'})
      },
      toBuy(){
        this.$router.push({name : 'buy'})
      },
      toCheckOrder(){
        this.$router.push({name : 'checkOrder'})
      }
    }
  }
</script>