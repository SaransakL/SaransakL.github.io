<template>
  <div>
    <header>
      <img src="/assets/saransak-logo.svg" alt="Saransak" class="logo" />

      <nav>
        <a href="https://kick.com/saransak" target="_blank">livestream</a>
        <a href="#about">about</a>
        <a href="#contact">contact</a>
        <a href="https://easydonate.app/Saransak_L" target="_blank">donate</a>
      </nav>
    </header>

    <iframe
      src="https://player.kick.com/saransak"
      height="500"
      width="100%"
      frameborder="0"
      scrolling="no"
    />

    <section id="about">
      <div class="section-title">about me</div>

      <div class="about-container">
        <img src="/assets/profile.jpg" alt="profile" class="about-img" />

        <div class="about-text">
          <h2>Hi, I'm Saransak</h2>

          <p>
            I'm a streamer on Kick and former Roblox game developer from Thailand.
          </p>

          <p>
            I stream everyday, mostly gaming, IRL and random chaos.
          </p>

          <div class="about-tags">
            <span><i class="bi bi-globe2"></i> Thailand</span>
            <span><i class="bi bi-house"></i> Phitsanulok</span>
            <span><i class="bi bi-cake"></i> 10 January 2012</span>
            <span><i class="bi bi-heart"></i> Single</span>
            <span><i class="bi bi-gender-male"></i> Male</span>
            <span><i class="bi bi-backpack"></i> Student</span>
            <span><i class="bi bi-controller"></i> Gamer</span>
            <span><i class="bi bi-broadcast"></i> Streamer</span>
          </div>
        </div>
      </div>
    </section>

    <section id="contact">
      <div class="section-title">get in touch</div>

      <form
        action="https://formspree.io/f/mwvnynrr"
        method="POST"
        class="contact-form"
      >
        <input type="text" name="name" placeholder="your name" required />
        <input type="email" name="email" placeholder="your email" required />
        <textarea name="message" rows="5" placeholder="your message..." required />

        <button type="submit">send message</button>
      </form>
    </section>

    <footer>
      <p>© 2026 Saransak</p>
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
  user-select: none;
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
  font-size: 40px;
  margin: 0 10px;
  letter-spacing: -0.05em;
}

nav a:hover {
  opacity: 0.4;
}

section {
  margin: 20px 100px;
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
  border-radius: 20px;
  transform: perspective(800px) rotateY(-10deg) rotateX(5deg) rotate(2deg);
  box-shadow: 0 10px 30px rgba(0,0,0,0.5),
              0 0 0 1px rgba(255,255,255,0.1);
  transition: 0.4s;
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

/* responsive */
@media (max-width: 768px) {
  .logo { height: 50px; }

  nav {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 10px;
  }

  nav a {
    font-size: 20px;
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