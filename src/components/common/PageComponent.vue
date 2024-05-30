<template>
  <div class="m-6 flex justify-center">
    <!-- Prev 버튼 -->
    <div
      v-if="data.prev"
      class="m-2 p-2 w-16 text-center font-bold text-blue-400"
      @click="movePage({ page: data.prevPage })"
    >
      Prev
    </div>

    <!-- 페이지 번호 리스트 -->
    <div
      v-for="pageNum in data.pageNumList"
      :key="pageNum"
      :class="[
        'm-2 p-2 w-12 text-center rounded shadow-md text-white',
        data.current === pageNum ? 'bg-gray-500' : 'bg-blue-400',
      ]"
      @click="movePage({ page: pageNum })"
    >
      {{ pageNum }}
    </div>

    <!-- Next 버튼 -->
    <div
      v-if="data.next"
      class="m-2 p-2 w-16 text-center font-bold text-blue-400"
      @click="movePage({ page: data.nextPage })"
    >
      Next
    </div>
  </div>
</template>
<script setup>
const props = defineProps({
  data: {
    type: Object,
    required: true,
  },
  movePage: {
    type: Function,
    required: true,
  },
});
</script>
<style></style>
