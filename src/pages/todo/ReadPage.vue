<template>
  <div class="font-extrabold w-full bg-white mt-6">
    <div class="text-2xl">Todo Read Page Component {{ paramTno }}</div>
    <ReadComponent :tno="paramTno" />
  </div>
</template>
<script setup>
import { useRoute } from "vue-router";
import { useRouter } from "vue-router";
import ReadComponent from "../../components/todo/ReadComponent.vue";

const route = useRoute();
const router = useRouter();

const paramTno = route.params.tno;

// const page = route.query.page || 1;
// const size = route.query.size || 10;

// const queryParams = { page: page, size: size };

// const moveToModify = (tno) => {
//   router.push({
//     path: `/todo/modify/${tno}`,
//     query: queryParams,
//   });
// };

// const moveToList = () => {
//   router.push({
//     path: `/todo/list`,
//     query: queryParams,
//   });
// };
</script>
<style></style>
