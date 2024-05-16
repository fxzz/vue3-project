<template>
  <div class="text=3xl">
    <div>{{ paramTno }}</div>
    Read Page
  </div>
  <div>
    <button @click="moveToModify(paramTno)">수정</button>
    <button @click="moveToList">리스트</button>
  </div>
</template>
<script setup>
import { useRoute } from "vue-router";
import { useRouter } from "vue-router";

const route = useRoute();
const router = useRouter();

const paramTno = route.params.tno;

const page = route.query.page || 1;
const size = route.query.size || 10;

const queryParams = { page: page, size: size };
const queryStr = new URLSearchParams(queryParams).toString();

const moveToModify = (tno) => {
  router.push({
    path: `/todo/modify/${tno}`,
    query: queryParams,
  });
};

const moveToList = () => {
  router.push({
    path: `/todo/list`,
    query: queryParams,
  });
};
</script>
<style></style>
