<script setup lang="ts">
import AppNavBar from './AppNavBar.vue';
import AppHeader from './AppHeader.vue';
import AppFooter from './AppFooter.vue';
</script>

<template>
  <div class="flex h-screen bg-white font-roboto">
    <AppNavBar />
    <div class="flex-1 flex flex-col overflow-hidden">
      <AppHeader />
      <main class="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200">
        <div class="container mx-auto px-6 py-8">
          <router-view />
        </div>
      </main>
      <AppFooter />
    </div>
  </div>
</template>