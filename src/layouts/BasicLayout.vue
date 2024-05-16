<template>
  <div>
    <BasicMenu />

    <div
      class="bg-white my-5 w-full flex flex-col space-y-1 md:flex-row md:space-x-1 md:space-y 0"
    >
      <main class="bg-sky-300 md:w-2/3 lg:w-3/4 px-5 py-5">
        <slot />
      </main>
      <aside class="bg-green-300 md:w-1/3 lg:w-1/4 px-5 flex py-5">
        <h1 class="text-2xl md:text-4xl">Sidebar</h1>
      </aside>
    </div>
  </div>
</template>

<script setup>
import BasicMenu from "../components/menus/BasicMenu.vue";
</script>
