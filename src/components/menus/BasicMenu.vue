<template>
  <nav id="navbar" class="flex bg-blue-300">
    <div class="w-4/5 bg-gray-500">
      <ul class="flex p-4 text-white font-bold">
        <li class="pr-6 text-2xl">
          <router-link to="/">Main</router-link>
        </li>
        <li class="pr-6 text-2xl">
          <router-link to="/about">About</router-link>
        </li>
        <li class="pr-6 text-2xl">
          <router-link to="/todo/">Todo</router-link>
        </li>
      </ul>
    </div>
    <div class="w-1/5 flex justify-end bg-orange-300 p-4 font-medium">
      <div class="text-white text-smm-1 rounded">Login</div>
    </div>
  </nav>
</template>
<script setup></script>
<style></style>
