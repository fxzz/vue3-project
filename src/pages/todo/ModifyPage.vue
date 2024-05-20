<template>
  <div class="p-4 w-full bg-white">
    <div class="text-2xl font-extrabold">Todo Modify Page</div>
    <ModifyComponent :tno="paramTno" />
  </div>
</template>

<script setup>
import ModifyComponent from "../../components/todo/ModifyComponent.vue";
import { useRoute } from "vue-router";
const route = useRoute();
const paramTno = route.params.tno;
</script>
<style></style>
