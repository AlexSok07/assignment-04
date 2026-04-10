<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'

const route = useRoute()
const isHomePage = computed(() => route.path === '/')
</script>

<template>
  <div class="page" :class="{ 'texture-homepage': isHomePage }">
    <Navbar />

    <RouterView />

    <Footer />
  </div>
</template>

<style>
.page {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
</style>