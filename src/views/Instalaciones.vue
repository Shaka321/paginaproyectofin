<script setup>
import TheWelcome from '../components/TheWelcome.vue'
</script>
<template>
    <section x-data="{ slide: 0 }" class="text-gray-600 body-font">
      <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div class="carousel lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center mx-auto">
          <div class="carousel-inner relative overflow-hidden w-full flex">
            <div class="carousel-item flex-1 mr-2">
              <img class="object-cover object-center rounded w-full" alt="hero"
                src="https://onedrive.live.com/embed?resid=E92AE6AD4F3C8B9%21762&authkey=%21ANvpTffQSMs1sQM&width=960&height=1280">
            </div>
            <div class="carousel-item flex-1 ml-2">
              <img class="object-cover object-center rounded w-full" alt="hero"
                src="https://onedrive.live.com/embed?resid=E92AE6AD4F3C8B9%21760&authkey=%21AF_-uiiFfdy0Rqo&width=960&height=1280">
            </div>
          </div>
          <div class="carousel-inner relative overflow-hidden w-full flex mt-4">
            <div class="carousel-item flex-1 mr-2">
              <img class="object-cover object-center rounded w-full" alt="hero"
                src="https://onedrive.live.com/embed?resid=E92AE6AD4F3C8B9%21761&authkey=%21ABwrROFz2mC2DLQ&width=960&height=1280">
            </div>
            <div class="carousel-item flex-1 ml-2">
              <img class="object-cover object-center rounded w-full" alt="hero"
                src="https://onedrive.live.com/embed?resid=E92AE6AD4F3C8B9%21762&authkey=%21ANvpTffQSMs1sQM&width=960&height=1280">
            </div>
          </div>
        </div>
        <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <!-- Otras partes de tu contenido, si las hay -->
        </div>
      </div>
    </section>
  </template>
  
  
<style scoped>
  .carousel {
    position: relative;
    width: 100%;

  }

  .carousel-inner {
    display: flex;
    width: 400%; /* Ajusta según la cantidad de elementos */
    transition: transform 0.5s ease;
  }

  .carousel-item {
    flex: 0 0 25%; /* Ajusta según la cantidad de elementos */
    width: 100%;
    box-sizing: border-box;
  }
</style>


