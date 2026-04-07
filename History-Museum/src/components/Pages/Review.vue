<template>
    <main class="page-main">
      <div class="container">
        <h1>Site Feedback & Complaints</h1>
        <p>
          Use this page to tell us about issues with the website, content,
          or the research used to cover historical topics.
        </p>

        <section class="page-section">
          <h2>Submit a Complaint</h2>
          <p>
            If you find factual errors, unclear context, or concerns about how
            we presented historical information, we want to hear from you.
          </p>

          <article class="review-card">
            <h3>Research Accuracy</h3>
            <p>
              Report any mistakes in dates, events, sources, or interpretations
              so we can review and correct them.
            </p>
          </article>

          <article class="review-card">
            <h3>Website Experience</h3>
            <p>
              Tell us about navigation problems, broken links, or any part of the
              site that felt confusing.
            </p>
          </article>
        </section>

        <section class="page-section form-section">
          <h2>Contact Us</h2>
          <form>
            <label for="name">Name</label>
            <input type="text" id="name" name="name" placeholder="Your name" />
            <label for="email">Email</label>
            <input type="email" id="email" name="email" placeholder="you@example.com" />
            <label for="issue">Issue Details</label>
            <textarea id="issue" name="issue" rows="5" placeholder="Describe the problem or concern"></textarea>
            <button type="submit" class="button">Submit Feedback</button>
          </form>
        </section>
      </div>
    </main>
</template>

<script setup>
</script>

<style scoped>
</style>