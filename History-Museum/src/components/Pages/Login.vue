<template>
    <main class="page-main">
      <div class="container">
        <h1>Member Login</h1>
        <p>
          Sign in to save favorite eras, access curated reading lists, and receive
          updates about new historical content.
        </p>

        <section class="page-section form-section">
          <form>
            <label for="email">Email</label>
            <input type="email" id="email" name="email" placeholder="you@example.com" />
            <label for="password">Password</label>
            <input type="password" id="password" name="password" placeholder="Enter your password" />
            <button type="submit" class="button">Log In</button>
          </form>
        </section>
      </div>
    </main>
</template>

<script setup>
</script>

<style scoped>
</style>