<script setup lang="ts">
import { ref } from 'vue'
import { useSidebar } from '@/hooks/useLogicDropdown'
import { UserGroupIcon, HomeIcon, KeyIcon } from '@heroicons/vue/24/solid'

const { isOpenMenu } = useSidebar()
const activeClass = ref(
  'bg-opacity-25 text-blue-600 bg-blue-200 font-bold',
)
const inactiveClass = ref(
  'text-gray-500 hover:bg-blue-200 hover:bg-opacity-25 hover:font-font-bold',
)
</script>

<template>
  <div class="app-header flex">
    <!-- Backdrop -->
    <div :class="isOpenMenu ? 'block' : 'hidden'" class="fixed inset-0 z-20 transition-opacity bg-white opacity-50 lg:hidden"
      @click="isOpenMenu = false" />
    <!-- End Backdrop -->

    <div :class="isOpenMenu ? 'translate-x-0 ease-out' : '-translate-x-full ease-in'"
      class="fixed inset-y-0 left-0 z-30 w-64 overflow-y-auto transition duration-300 transform bg-white lg:translate-x-0 lg:static lg:inset-0">
      <div class="flex items-center justify-center mt-8">
        <div class="flex items-center">
          <span class="mx-2 text-2xl font-semibold text-white">SimBiz Vue</span>
        </div>
      </div>

      <nav class="mt-10">
        <router-link class="flex items-center px-6 py-2 mt-4 duration-200"
          :class="[$route.name === 'Dashboard' ? activeClass : inactiveClass]" to="/dashboard">
          <HomeIcon class="h-5 w-5" />
          <span class="mx-4">Home</span>
        </router-link>

        <router-link class="flex items-center px-6 py-2 mt-4 duration-200"
          :class="[$route.name === 'Administration' ? activeClass : inactiveClass]" to="/administration">
          <KeyIcon class="h-5 w-5" />
          <span class="mx-4">Administration</span>
        </router-link>

        <router-link class="flex items-center px-6 py-2 mt-4 duration-200"
          :class="[$route.name === 'Customer' ? activeClass : inactiveClass]" to="/customers">
          <UserGroupIcon class="h-5 w-5" />
          <span class="mx-4">Customer</span>
        </router-link>
      </nav>
    </div>
  </div>
</template>