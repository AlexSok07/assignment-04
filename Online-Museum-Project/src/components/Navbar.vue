<template>
  <nav class="navbar">
    <h1 class="logo">My App</h1>
    <ul class="nav-links">
      <li><a href="#">Home</a></li>
      <li><a href="#">About</a></li>
      <li><a href="#">Contact</a></li>
    </ul>
  </nav>
</template>

<script setup>

</script>

<style scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #333;
  color: white;
  padding: 10px 40px;
  width:100%;
}

.logo {
  margin: 0;
}

.nav-links {
  list-style: none;
  display: flex;
  gap: 15px;
}

.nav-links a {
  color: white;
  text-decoration: none;
}
</style>