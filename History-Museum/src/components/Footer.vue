<template>
<footer class="site-footer" id="contact">
      <div class="container footer-content">
        <p>Questions?</p>
        <p>Email: hello@example.com</p>
        <p>Phone: (123) 456-7890</p>
        <p>Address: 123 Main Street, Anytown, USA</p>
      </div>
    </footer>
</template>

<script setup>

</script>

<style scoped>
.site-footer {
  background: var(--surface);
  border-top: 1px solid var(--border);
  padding: 2rem 0;
}

.footer-content {
  text-align: center;
  color: var(--muted);
  display: grid;
  gap: 0.5rem;
}

.footer-content p {
  margin: 0;
}
</style>