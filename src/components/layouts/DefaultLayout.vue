<script setup lang="ts">
import TheSidebar from '@/components/TheSidebar.vue'
import TheHeader from '@/components/TheHeader.vue'
import TheFooter from '@/components/TheFooter.vue'
</script>

<template>
  <div class="flex h-screen bg-white font-roboto">
    <TheSidebar />
    <div class="flex-1 flex flex-col overflow-hidden">
      <TheHeader />
      <main class="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200">
        <div class="container mx-auto px-6 py-8">
          <router-view />
        </div>
      </main>
      <TheFooter />
    </div>
  </div>
</template>
