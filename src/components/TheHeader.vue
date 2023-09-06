<script setup lang="ts">
import { ref } from 'vue'
import { Bars3BottomLeftIcon } from '@heroicons/vue/24/solid'
import { MagnifyingGlassIcon, BellIcon } from '@heroicons/vue/24/outline'
import { useSidebar } from '@/hooks/useLogicDropdown'

const dropdownOpen = ref(false)
const { isOpenMenu } = useSidebar()
</script>

<template>
  <header class="flex items-center justify-between px-6 py-4 bg-gray-200 border-b-4">
    <div class="flex items-center">
      <button class="text-gray-500 focus:outline-none lg:hidden" @click="isOpenMenu = true">
        <Bars3BottomLeftIcon class="h-5 w-5" />
      </button>

      <div class="relative mx-4 lg:mx-0">
        <span class="absolute inset-y-0 left-0 flex items-center pl-3">
          <MagnifyingGlassIcon class="h-5 w-5 opacity-50" />
        </span>

        <input
          class="w-32 pl-10 pr-4 text-indigo-600 border-gray-200 rounded-md sm:w-64 focus:border-indigo-600 focus:ring focus:ring-opacity-40 focus:ring-indigo-500"
          type="text"
          placeholder="Search"
        />
      </div>
    </div>

    <div class="flex items-center">
      <button class="flex mx-4 text-gray-600 focus:outline-none" @click="isOpenMenu = true">
        <BellIcon class="h-5 w-5" />
      </button>

      <div class="relative">
        <button
          class="relative z-10 block w-8 h-8 overflow-hidden rounded-full shadow focus:outline-none"
          @click="dropdownOpen = !dropdownOpen"
        >
          <img
            class="object-cover w-full h-full"
            src="https://images.unsplash.com/photo-1528892952291-009c663ce843?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=296&q=80"
            alt="Your avatar"
          />
        </button>

        <div
          v-show="dropdownOpen"
          class="fixed inset-0 z-10 w-full h-full"
          @click="dropdownOpen = false"
        />

        <transition
          enter-active-class="transition duration-150 ease-out transform"
          enter-from-class="scale-95 opacity-0"
          enter-to-class="scale-100 opacity-100"
          leave-active-class="transition duration-150 ease-in transform"
          leave-from-class="scale-100 opacity-100"
          leave-to-class="scale-95 opacity-0"
        >
          <div
            v-show="dropdownOpen"
            class="absolute right-0 z-20 w-48 py-2 mt-2 bg-white rounded-md shadow-xl"
          >
            <a
              href="#"
              class="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-600 hover:text-white"
              >Profile</a
            >
            <a
              href="#"
              class="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-600 hover:text-white"
              >Products</a
            >
            <router-link
              to="/"
              class="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-600 hover:text-white"
            >
              Log out
            </router-link>
          </div>
        </transition>
      </div>
    </div>
  </header>
</template>
