<script setup lang="ts">
import { ref } from 'vue'
import router from '@/router'

/* Todo: remove test data, use vee-validate and verify JWT token from API
 *  https://vee-validate.logaretm.com/v4/guide/composition-api/getting-started/
 */

const email = ref('admin@gmail.com')
const password = ref('123!@#')

function onSubmit() {
  router.push({
    name: 'Dashboard'
  })
}
</script>

<template>
  <div class="flex items-center justify-center h-screen px-6 bg-gray-200">
    <div class="w-full max-w-sm p-6 bg-white rounded-md shadow-md">
      <div class="flex items-center justify-center">
        <span class="text-2xl font-semibold text-blue-600">Login</span>
      </div>

      <form class="mt-4" @submit.prevent="onSubmit">
        <label class="block">
          <span class="text-sm text-700 font-bold">Email</span>
          <input
            v-model="email"
            type="email"
            class="block w-full mt-1 border-gray-200 rounded-md focus:border-indigo-600 focus:ring focus:ring-opacity-40 focus:ring-indigo-500"
          />
        </label>

        <label class="block mt-3">
          <span class="text-sm text-gray-700 font-bold">Password</span>
          <input
            v-model="password"
            type="password"
            class="block w-full mt-1 border-gray-200 rounded-md focus:border-indigo-600 focus:ring focus:ring-opacity-40 focus:ring-indigo-500"
          />
        </label>

        <div class="flex items-center justify-between mt-4">
          <div>
            <label class="inline-flex items-center">
              <input
                type="checkbox"
                class="text-indigo-600 border-gray-200 rounded-md focus:border-indigo-600 focus:ring focus:ring-opacity-40 focus:ring-indigo-500"
              />
              <span class="mx-2 text-sm text-gray-600">Remember me</span>
            </label>
          </div>

          <div>
            <a class="block text-sm text-indigo-700 fontme hover:underline" href="#"
              >Forgot your password?</a
            >
          </div>
        </div>

        <div class="mt-6">
          <button
            type="submit"
            class="w-full px-4 py-2 text-sm text-center text-white bg-blue-600 rounded-md focus:outline-none hover:bg-blue-700"
          >
            Login
          </button>
        </div>
      </form>
    </div>
  </div>
</template>
