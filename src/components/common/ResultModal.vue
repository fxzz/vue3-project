<template>
  <div
    class="fixed top-0 left-0 z-[1055] flex h-full w-full justify-center bg-black bg-opacity-20"
  >
    <div
      class="absolute bg-white shadow dark:bg-gray-700 opacity-100 w-1/4 rounded mt-10 mb-10 px-6 min-w-[600px]"
    >
      <div
        class="justify-center bg-warning-400 mt-6 mb-6 text-2xl border-b-4 border-gray-500"
      >
        {{ title }}
      </div>
      <div class="text-4xl border-orange-400 border-b-4 pt-4 pb-4">
        {{ content }}
      </div>
      <div class="justify-end flex">
        <button
          @click="handleCloseModal"
          class="rounded bg-blue-500 mt-4 mb-4 px-6 pt-4 pb-4 text-lg text-white"
        >
          Close Modal
        </button>
      </div>
    </div>
  </div>
</template>
<script setup>
import { defineProps } from "vue";

const props = defineProps({
  movePage: {
    type: Function,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
});

const handleCloseModal = () => {
  props.movePage();
};
</script>
<style></style>
