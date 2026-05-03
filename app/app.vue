<template>
  <div>
  
    <header>
      <img src="/assets/saransak-logo.svg" alt="Saransak" class="logo" />

      <nav>
        <a href="#about">about</a>
        <a href="#works">works</a>
        <a href="#contact">contact</a>
        <a onclick="alert('Coming Soon')">merch</a>
      </nav>
    </header>

    <img src="/assets/profile.jpg" alt="hero" class="hero">

    <section id="about">
      <div class="section-title">about me</div>

      <div class="about-container">
        <img src="/assets/profile.jpg" alt="profile" class="about-img" />

        <div class="about-text">
          <h2>Hi, I'm Saransak</h2>

        <p>
          I'm a Roblox game developer who enjoys designing games and experimenting with ideas.
        </p>

        <p>
          Currently, I'm still in the "building and learning" phase. so no major projects yet, but something cool is definitely on the way!
        </p>

          <div class="about-tags">
            <span><i class="bi bi-globe2"></i> Thailand</span>
            <span><i class="bi bi-house"></i> Phitsanulok</span>
            <span><i class="bi bi-cake"></i> 10 Jan 2012</span>
            <span><i class="bi bi-heart"></i> Single</span>
            <span><i class="bi bi-gender-male"></i> Male</span>
          </div>
        </div>
      </div>
    </section>

    <section id="works">
      <div class="section-title">my works</div>

      <div class="works-grid">

        <div class="work-card">
          <img src="https://placehold.co/1920x1080" alt="project">

          <div class="work-info">
            <h3>Placeholder</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sit.
            </p>
          </div>
        </div>

        <div class="work-card">
          <img src="https://placehold.co/1920x1080" alt="project">

          <div class="work-info">
            <h3>Placeholder</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sit.
            </p>
          </div>
        </div>

        <div class="work-card">
          <img src="https://placehold.co/1920x1080" alt="project">

          <div class="work-info">
            <h3>Placeholder</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sit.
            </p>
          </div>
        </div>

      </div>
    </section>

    <section id="contact">
      <div class="section-title">get in touch</div>

      <form action="https://formspree.io/f/mwvnynrr" method="POST" class="contact-form">
        <input type="text" name="name" placeholder="Your full name" required />
        <input type="email" name="email" placeholder="Your email address" required />
        <textarea name="message" rows="5" placeholder="Tell me about your idea, project, or just say hi..." required></textarea>

        <button type="submit">send message</button>
      </form>
    </section>

    <footer>
      <p>© 2026 Saransak - All rights reserved.</p>
    </footer>
  </div>
</template>

<script setup>
useHead({
  title: 'Saransak'
})
</script>

<style>

* {
  font-family: 'Poppins', 'Noto Sans Thai Looped';
  scroll-behavior: smooth;
}

:root {
  --primary-blue: #007fff;
  --white: #fff;
  --black: #000;
}

body {
  color: var(--white);
  background-color: var(--black);
  margin: 0;
  padding: 0;
}

header {
  text-align: center;
  padding: 20px;
}

.logo {
  height: 120px;
}

nav a {
  color: var(--white);
  text-decoration: none;
  font-weight: bold;
  font-size: 50px;
  margin: 0 15px;
  letter-spacing: -0.05em;
  cursor: pointer;
}

nav a:hover {
  opacity: 0.4;
}

section {
  margin: 20px 100px;
}

.hero {
  width: 100%;
  height: 600px;
  object-fit: cover;
}

.section-title {
  letter-spacing: -0.05em;
  font-size: 120px;
  font-weight: bold;
}

.about-container {
  display: flex;
  gap: 60px;
  align-items: center;
  flex-wrap: wrap;
}

.about-img {
  width: 300px;
  border-radius: 100%;
  aspect-ratio: 1/1;
}

.about-text {
  max-width: 600px;
}

.about-text h2 {
  font-size: 50px;
  margin-bottom: 10px;
}

.about-text p {
  font-size: 20px;
  opacity: 0.8;
}

.about-tags {
  margin-top: 20px;
}

.about-tags span {
  display: inline-block;
  background: #111;
  border: 1px solid #333;
  padding: 8px 14px;
  border-radius: 999px;
  margin-right: 5px;
  margin-bottom: 10px;
  font-size: 15px;
}

.contact-form {
  margin-top: 20px;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.contact-form input,
.contact-form textarea {
  background: #111;
  border: 1px solid #333;
  padding: 14px;
  border-radius: 10px;
  color: var(--white);
  font-size: 16px;
  outline: none;
}

.contact-form input:focus,
.contact-form textarea:focus {
  border-color: #fff;
}

.contact-form button {
  background: var(--primary-blue);
  border: none;
  padding: 10px;
  border-radius: 1000px;
  color: white;
  font-weight: bold;
  cursor: pointer;
  font-size: 30px;
  letter-spacing: -0.05em;
}

footer {
  padding: 40px 100px;
}

.works-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 40px;
  margin-top: 20px;
}

.work-card {
  background: #111;
  border: 1px solid #333;
  border-radius: 20px;
  overflow: hidden;
  cursor: pointer;
  transition: 0.2s;
}

.work-card:hover {
  transform: scale(1.1);
}

.work-card img {
  width: 100%;
  object-fit: cover;
}

.work-info {
  padding: 20px;
}

.work-info h3 {
  margin: 0;
  font-size: 24px;
}

.work-info p {
  font-size: 14px;
  opacity: 0.7;
}

/* responsive */
@media (max-width: 768px) {
  .logo { height: 60px; }

  nav {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 10px;
  }

  nav a {
    font-size: 25px;
    margin: 0;
  }

  section { margin: 20px; }

  .section-title { font-size: 48px; }

  .about-container {
    flex-direction: column;
    gap: 30px;
    align-items: flex-start;
  }

  .about-img {
    width: 80%;
    margin: 40px;
  }

  .about-text h2 { font-size: 32px; }
  .about-text p { font-size: 16px; }

  .contact-form button {
    font-size: 20px;
    padding: 12px;
  }
}
</style>