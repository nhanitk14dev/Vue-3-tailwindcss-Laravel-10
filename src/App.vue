<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import { computed } from 'vue'
import { useRouter } from 'vue-router'

const defaultLayout = 'default'
const { currentRoute } = useRouter()

// https://vuejs.org/guide/essentials/component-basics.html#dynamic-components
const layout = computed(() => `${currentRoute.value.meta.layout || defaultLayout}-layout`)
</script>

<template>
  <component :is="layout">
    <router-view />
  </component>
</template>
