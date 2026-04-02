<template>
  <nav class="navbar">
    <div class="container">
      <div class="nav-content">

        <!-- Logo -->
        <div class="logo">
          <a href="index.html">Torture</a>
        </div>

        <!-- Hamburger -->
        <button 
          class="nav-toggle" 
          @click="toggleMenu"
          aria-label="Toggle navigation"
        >
          ☰
        </button>

        <!-- Nav Links -->
        <div class="nav-links" :class="{ show: isOpen }">
          <a
            v-for="item in navItems"
            :key="item.name"
            :href="item.href"
            :class="{ active: item.active }"
          >
            {{ item.name }}
          </a>
        </div>

      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue'

// 数据（直接替代你原来的 navItems）
const navItems = ref([
  { name: "Home", href: "index.html", active: true },
  { name: "Projects", href: "projects.html", active: false },
  { name: "Contact", href: "#contact", active: false }
])

// 控制菜单开关
const isOpen = ref(false)

function toggleMenu() {
  isOpen.value = !isOpen.value
}
</script>

<style scoped>
.navbar {
  width: 100%;
  background-color: #333;
  color: white;
}

.container {
  max-width: 1000px;
  margin: 0 auto;
}

.nav-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
}

.nav-links {
  display: flex;
  gap: 20px;
}

.nav-links a {
  color: white;
  text-decoration: none;
}

.active {
  border-bottom: 2px solid white;
}

/* 移动端菜单（默认隐藏） */
.nav-links {
  display: flex;
}

/* 示例：小屏幕隐藏 */
@media (max-width: 768px) {
  .nav-links {
    display: none;
    flex-direction: column;
  }

  .nav-links.show {
    display: flex;
  }
}
</style>