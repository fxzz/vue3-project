<script setup></script>

<template>
  <h1 class="text-4xl font-bold underline">Hello world!</h1>
  <div>
    <router-link to="/">메인</router-link>
    <router-link to="/test">test</router-link>
  </div>

  <router-view />
</template>

<style scoped></style>
