<template>
  <header class="site-header">
    <div class="container header-inner">
      <RouterLink to="/" class="brand">History Hub</RouterLink>

      <!-- 搜索框：原先由 main.js 动态插入，现在直接写在模板里 -->
      <div class="search-container" ref="searchContainer">
        <input
          type="text"
          id="search-input"
          placeholder="Search pages..."
          v-model="searchQuery"
        />
        <!-- v-if 代替 :empty CSS；v-for 代替 forEach + createElement -->
        <div id="search-results" v-if="searchResults.length > 0">
          <RouterLink
            v-for="page in searchResults"
            :key="page.name"
            :to="page.route"
          >
            {{ page.name }}
          </RouterLink>
        </div>
        <div id="search-results" v-else-if="searchQuery.length > 0">
          <div>No matches found</div>
        </div>
      </div>

      <nav class="main-nav">
        <RouterLink to="/about">About Us</RouterLink>
        <RouterLink to="/login">Log In</RouterLink>
        <RouterLink to="/review">Review</RouterLink>
      </nav>
    </div>
  </header>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'

const pages = [
  { name: 'Home',                    route: '/' },
  { name: 'About Us',               route: '/about' },
  { name: 'Log In',                 route: '/login' },
  { name: 'Review',                 route: '/review' },
  { name: 'Ancient Civilizations',  route: '/ancient' },
  { name: 'Renaissance & Early Modern', route: '/renaissance' },
  { name: 'Industrial Revolution',  route: '/industrial' },
  { name: 'World Wars',             route: '/world-wars' },
]

const searchQuery = ref('')

const searchResults = computed(() => {
  if (!searchQuery.value.trim()) return []
  return pages.filter(p =>
    p.name.toLowerCase().includes(searchQuery.value.toLowerCase())
  )
})

const searchContainer = ref(null)

// CClear the search query when clicking outside the search container
function handleOutsideClick(e) {
  if (searchContainer.value && !searchContainer.value.contains(e.target)) {
    searchQuery.value = ''
  }
}

// Avoid memory leaks by adding/removing event listener on component mount/unmount
onMounted(() => document.addEventListener('click', handleOutsideClick))
onUnmounted(() => document.removeEventListener('click', handleOutsideClick))
</script>