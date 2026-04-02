
<script setup>
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
import RealInstruments from './assets/RealInstruments.png'
</script>

<template>
  <div class="page">
    <Navbar />

    <main class="content">
    <h2>Main content</h2>
    <img :src="RealInstruments" alt="logo">
    </main>

    <Footer />
    </div>
  
</template>

<style>
.page {
  display: flex;
  flex-direction: column;
  min-height: 100vh; 
}

.content {
  flex: 1; 
  display: raw;  
}
</style>