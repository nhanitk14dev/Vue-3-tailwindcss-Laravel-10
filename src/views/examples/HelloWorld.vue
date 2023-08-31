<script setup lang="ts">
import TheWelcome from './TheWelcome.vue'
</script>

<template>
  <main class="demo-app">
    <div class="greetings">
      <h1 class="green">Hello World</h1>
      <h3>
        You’ve successfully created a project with
        <a href="https://vitejs.dev/" target="_blank" rel="noopener">Vite</a> +
        <a href="https://vuejs.org/" target="_blank" rel="noopener">Vue 3</a>. What's next?
      </h3>
    </div>
    <TheWelcome />
  </main>
</template>

<style scoped>
.demo-app {
  max-width: 1280px;
  margin: 0 auto;
  padding: 5rem;
  font-weight: normal;
}

a,
.green {
  text-decoration: none;
  color: hsla(160, 100%, 37%, 1);
  transition: 0.4s;
}

@media (hover: hover) {
  a:hover {
    background-color: hsla(160, 100%, 37%, 0.2);
  }
}

@media (min-width: 1024px) {
  body {
    display: flex;
    place-items: center;
  }

  .demo-app {
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 0 2rem;
  }
}

h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {

  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
