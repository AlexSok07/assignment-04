
<script setup>
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
</script>

<template>
  <div class="page">
    <Navbar />

    <main class="content">
    <h2>Main content</h2>
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
  display: flex;  
}
</style>