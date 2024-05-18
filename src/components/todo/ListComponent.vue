<template>
  <div class="border-2 border-blue-100 mt-10 mr-2 ml-2">
    <div class="flex flex-wrap mx-auto justify-center p-6">
      <div
        class="w-full min-w-[400px] p-2 m-2 rounded shadow-md"
        v-for="todo in data.dtoList"
        :key="todo.tno"
      >
        <div class="flex">
          <div class="font-extrabold text-2xl p-2 w-1/12">
            {{ todo.tno }}
          </div>
          <div class="text-1xl m-1 p-2 w-8/12 font-extrabold">
            {{ todo.title }}
          </div>
          <div class="text-1xl m-1 p-2 w-2/10 font-medium">
            {{ todo.dueDate }}
          </div>
        </div>
      </div>
    </div>

    <PageComponent :data="data" :movePage="moveToList" />
  </div>
</template>
<script setup>
import { onMounted, reactive, watch, ref, watchEffect } from "vue";
import { getList } from "../../api/todoApi";
import customMove from "../../hooks/customMove";
import PageComponent from "../common/PageComponent.vue";
import { useRoute } from "vue-router";
import { useRouter } from "vue-router";

const initState = {
  dtoList: [],
  pageNumList: [],
  pageRequestDTO: null,
  prev: false,
  next: false,
  totalCount: 0,
  prevPage: 0,
  nextPage: 0,
  totalPage: 0,
  current: 0,
};

const data = reactive({ ...initState });
const { moveToList } = customMove();

const fetchListData = async () => {
  try {
    const res = await getList({
      page: route.query.page,
      size: route.query.size,
    });
    console.log(res);
    Object.assign(data, res);
  } catch (error) {
    console.log("에러:", error);
  }
};

const route = useRoute();

watchEffect(() => {
  fetchListData();
});
</script>
<style></style>
