<template>
  <BasicLayout>
    <div class="w-full flex m-2 p-2">
      <div
        @click="handleClickList"
        class="text-xl m-1 p-2 w-20 font-extrabold text-center underline"
      >
        LIST
      </div>
      <div
        @click="handleClickAdd"
        class="text-xl m-1 p-2 w-20 font-extrabold text-center underline"
      >
        ADD
      </div>
    </div>
    <div class="flex flex-wrap w-full">
      <router-view />
    </div>
  </BasicLayout>
</template>
<script setup>
import BasicLayout from "../../layouts/BasicLayout.vue";
import { useRouter } from "vue-router";

const router = useRouter();

const handleClickList = () => {
  router.push("list");
};

const handleClickAdd = () => {
  router.push("add");
};
</script>
<style></style>
