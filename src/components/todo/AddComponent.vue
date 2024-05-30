<template>
  <div class="border-2 border-sky-200 mt-10 m-2 p-4">
    <div class="flex justify-center">
      <div class="relative mb-4 flex w-full flex-wrap items-stretch">
        <div class="w-1/5 p-6 text-right font-bold">TITLE</div>
        <input
          class="w-4/5 p-6 rounded-r border border-solid border-neutral-500 shadow-md"
          name="title"
          type="text"
          v-model="todo.title"
        />
        <!-- <span v-if="errors.title" class="error">{{ errors.title }}</span> -->
      </div>
    </div>

    <div class="flex justify-center">
      <div class="relative mb-4 flex w-full flex-wrap items-stretch">
        <div class="w-1/5 p-6 text-right font-bold">CONTENT</div>
        <input
          class="w-4/5 p-6 rounded-r border border-solid border-neutral-500 shadow-md"
          name="CONTENT"
          type="text"
          v-model="todo.content"
        />
        <!-- <span v-if="errors.content" class="error">{{ errors.content }}</span> -->
      </div>
    </div>

    <div class="flex justify-center">
      <div class="relative mb-4 flex w-full flex-wrap items-stretch">
        <div class="w-1/5 p-6 text-right font-bold">DUEDATE</div>
        <input
          class="w-4/5 p-6 rounded-r border border-solid border-neutral-500 shadow-md"
          name="dueDate"
          type="date"
          v-model="todo.dueDate"
        />
        <!-- <span v-if="errors.dueDate" class="error">{{ errors.dueDate }}</span> -->
      </div>
    </div>

    <div class="flex justify-end">
      <div class="relative mb-4 flex p-4 flex-wrap items-stretch">
        <button
          type="button"
          class="rounded p-4 w-36 bg-blue-500 text-xl text-white"
          @click="addTodo"
        >
          ADD
        </button>
      </div>
    </div>
    <ResultModal
      v-if="showModal"
      :movePage="moveToList"
      :title="modalTitle"
      :content="modalContent"
    />
  </div>
</template>
<script setup>
import { reactive, ref } from "vue";
import { postAdd } from "../../api/todoApi";
import customMove from "../../hooks/customMove";
import ResultModal from "../common/ResultModal.vue";

const initState = {
  title: "",
  content: "",
  dueDate: "",
};

const todo = reactive({ ...initState });

const showModal = ref(false);
const modalTitle = ref("");
const modalContent = ref("");

const saveTodo = async () => {
  try {
    // {TNO:105}
    const res = await postAdd(todo);
    modalTitle.value = "성공";
    modalContent.value = res.TNO + "번째 글을 등록했습니다.";
    // 추가 후 초기화
    Object.assign(todo, { ...initState });
  } catch (error) {
    console.log("에러:", error);
    modalTitle.value = "에러";
    modalContent.value = "나중에 다시 시도해 주세요.";
  } finally {
    showModal.value = true;
  }
};

const addTodo = () => {
  saveTodo();
};

const { moveToList } = customMove();
</script>
<style></style>
