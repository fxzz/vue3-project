<template>
  <div class="p-4 w-full bg-white">
    <div class="text-3xl font-extrabold">Todo List Page Component</div>
    <ListComponent />
  </div>
</template>
<script setup>
import ListComponent from "../../components/todo/ListComponent.vue";
import customMove from "../../hooks/customMove";

const { page, size } = customMove();
</script>
<style></style>
