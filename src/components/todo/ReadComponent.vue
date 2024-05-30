<template>
  <div class="border-2 border-sky-200 mt-10 m-2 p-4">
    <div class="flex justify-center">
      <div class="relative mb-4 flex w-full flex-wrap items-stretch">
        <div class="w-1/5 p-6 text-right font-bold">Tno</div>
        <div class="w-4/5 p-6 rounded-r border border-solid shadow-md">
          {{ todo.tno }}
        </div>
      </div>
    </div>
    <div class="flex justify-center">
      <div class="relative mb-4 flex w-full flex-wrap items-stretch">
        <div class="w-1/5 p-6 text-right font-bold">title</div>
        <div class="w-4/5 p-6 rounded-r border border-solid shadow-md">
          {{ todo.title }}
        </div>
      </div>
    </div>
    <div class="flex justify-center">
      <div class="relative mb-4 flex w-full flex-wrap items-stretch">
        <div class="w-1/5 p-6 text-right font-bold">content</div>
        <div class="w-4/5 p-6 rounded-r border border-solid shadow-md">
          {{ todo.content }}
        </div>
      </div>
    </div>
    <div class="flex justify-center">
      <div class="relative mb-4 flex w-full flex-wrap items-stretch">
        <div class="w-1/5 p-6 text-right font-bold">dueDate</div>
        <div class="w-4/5 p-6 rounded-r border border-solid shadow-md">
          {{ todo.dueDate }}
        </div>
      </div>
    </div>
    <div class="flex justify-center">
      <div class="relative mb-4 flex w-full flex-wrap items-stretch">
        <div class="w-1/5 p-6 text-right font-bold">complete</div>
        <div class="w-4/5 p-6 rounded-r border border-solid shadow-md">
          {{ todo.complete ? "Completed" : "Not Yet" }}
        </div>
      </div>
    </div>
    <div class="flex justify-end p-4">
      <button
        type="button"
        class="rounded p-4 m-2 text-xl w-32 text white bg-blue-500"
        @click="moveToList"
      >
        List
      </button>

      <button
        type="button"
        class="rounded p-4 m-2 text-xl w-32 text white bg-green-500"
        @click="moveToModify(todo.tno)"
      >
        Modify
      </button>
    </div>
  </div>
</template>
<script setup>
import { onMounted, ref } from "vue";
import { getOne } from "../../api/todoApi";
import customMove from "../../hooks/customMove";

const props = defineProps({
  tno: {
    type: Number,
    required: true,
  },
});

const initState = {
  tno: 0,
  title: "",
  content: "",
  dueDate: "",
  complete: false,
};

const todo = ref(initState);

const fetchOneData = async () => {
  try {
    const res = await getOne(props.tno);
    console.log(res);
    todo.value = res;
  } catch (error) {
    console.log("에러:", error);
  }
};

onMounted(() => {
  fetchOneData();
});

const { moveToList, moveToModify } = customMove();
</script>
<style></style>
