<template>
  <div class="p-4 w-full bg-orange-200">
    <div class="text-3xl font-extrabold">Todo List Page Component</div>
  </div>
  <ListComponent />
</template>
<script setup>
import ListComponent from "../../components/todo/ListComponent.vue";
import customMove from "../../hooks/customMove";

const { page, size } = customMove();
</script>
<style></style>
