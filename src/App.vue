<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <header class="bg-white">
    <div class="mx-auto flex h-16 max-w-screen-xl items-center gap-8 px-4 sm:px-6 lg:px-8">
      <a class="block text-teal-600" href="/">
        <span class="sr-only">Home</span>
        <img class="w-12 h-12 object-center rounded" alt="hero"
          src="https://onedrive.live.com/embed?resid=E92AE6AD4F3C8B9%21759&authkey=%21ANAWODmVpjnRYIg&width=3167&height=2582">
      </a>

      <div class="flex flex-1 items-center justify-end md:justify-between">
        <nav aria-label="Global" class="hidden md:block">
          <ul class="flex items-center gap-6 text-sm">
            <li>
              <a class="text-gray-500 transition hover:text-gray-500/75" href="/">

                <RouterLink to="/">Home</RouterLink>
              </a>
            </li>

            <li>
              <a class="text-gray-500 transition hover:text-gray-500/75" href="/">
                <RouterLink to="/about"> Ver Primer Avance</RouterLink>
              </a>
            </li>

            <li>
              <a class="text-gray-500 transition hover:text-gray-500/75" href="/">
                <RouterLink to="/mision">Ver Segundo Avance</RouterLink>
              </a>
            </li>

            <li>
              <a class="text-gray-500 transition hover:text-gray-500/75" href="/">
                <RouterLink to="/vision">Ver Tercer Avance</RouterLink>
              </a>
            </li>

            <li>
              <a class="text-gray-500 transition hover:text-gray-500/75" href="/">
                <RouterLink to="/cuarto">Ver Cuarto Avance</RouterLink>
              </a>
            </li>

            <li>
              <a class="text-gray-500 transition hover:text-gray-500/75" href="/">
                <RouterLink to="/instalaciones">Ver nuestras instalaciones</RouterLink>
              </a>
            </li>
          </ul>
        </nav>

        <div class="flex items-center gap-4">
          <div class="sm:flex sm:gap-4">
            <a class="block rounded-md bg-teal-600 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-teal-700"
              href="/">
              Login
            </a>

            <a class="hidden rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-teal-600 transition hover:text-teal-600/75 sm:block"
              href="/">
              Register
            </a>
          </div>

          <button class="block rounded bg-gray-100 p-2.5 text-gray-600 transition hover:text-gray-600/75 md:hidden">
            <span class="sr-only">Toggle menu</span>
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"
              stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </header>
  <RouterView />
</template>
