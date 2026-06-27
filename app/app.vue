<template>
  <div>
  
    <header>
      <img src="/assets/saransak-logo.svg" alt="Saransak" class="logo" />
    </header>

    <div class="hero"></div>

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
  --danger: #e10000;
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
  padding: 30px 0px 20px;
}

.logo {
  height: 120px;
}

.hero {
  width: 100%;
  height: 800px;
  background-image: url('/assets/profile.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

@media (max-width: 768px) {
  .logo {
    height: 60px;
  }
}
</style>