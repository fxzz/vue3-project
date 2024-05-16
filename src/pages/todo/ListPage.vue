<template>
  <div class="p-4 w-full bg-orange-200">
    <div class="text-3xl font-extrabold">Todo List Page Component</div>
    <div>{{ page }}</div>
    <div>{{ size }}</div>
  </div>
</template>
<script setup>
import { useRoute } from "vue-router";

const route = useRoute();
const page = route.query.page || 1;
const size = route.query.size || 10;
</script>
<style></style>
