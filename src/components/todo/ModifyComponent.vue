<template>
  <div class="border-2 border-sky-200 mt-10 m-2 p-4">
    <!--모달 자리-->
    <ResultModal
      v-if="showModal"
      :title="modalTitle"
      :content="modalContent"
      :movePage="handleMovePage"
    />
    <div class="flex justify-center mt-10">
      <div class="relative mb-4 flex w-full flex-wrap items-stretch">
        <div class="w-1/5 p-6 text-right font-bold">TNO</div>
        <div
          class="w-4/5 p-6 rounded-r border border-solid shadow-md bg-gray-100"
        >
          {{ todo.tno }}
        </div>
      </div>
    </div>
    <div class="flex justify-center">
      <div class="relative mb-4 flex w-full flex-wrap items-stretch">
        <div class="w-1/5 p-6 text-right font-bold">TITLE</div>
        <input
          class="w-4/5 p-6 rounded-r border border-solid border-neutral-300 shadow-md"
          name="title"
          type="text"
          v-model="todo.title"
        />
      </div>
    </div>
    <div class="flex justify-center">
      <div class="relative mb-4 flex w-full flex-wrap items-stretch">
        <div class="w-1/5 p-6 text-right font-bold">CONTENT</div>
        <input
          class="w-4/5 p-6 rounded-r border border-solid border-neutral-300 shadow-md"
          name="title"
          type="text"
          v-model="todo.content"
        />
      </div>
    </div>
    <div class="flex justify-center">
      <div class="relative mb-4 flex w-full flex-wrap items-stretch">
        <div class="w-1/5 p-6 text-right font-bold">DUEDATE</div>
        <input
          class="w-4/5 p-6 rounded-r border border-solid border-neutral-300 shadow-md"
          name="dueDate"
          type="date"
          v-model="todo.dueDate"
        />
      </div>
    </div>
    <div class="flex justify-center">
      <div class="relative mb-4 flex w-full flex-wrap items-stretch">
        <div class="w-1/5 p-6 text-right font-bold">COMPLETE</div>
        <select
          name="status"
          class="border-solid border-2 rounded m-1 p-2"
          :value="todo.complete ? 'Y' : 'N'"
          @change="handleStatusChange"
        >
          <option value="Y">Completed</option>
          <option value="N">Not Yet</option>
        </select>
      </div>
    </div>

    <div class="flex justify-end p-4">
      <button
        @click="handleClickDelete"
        type="button"
        class="inline-block rounded p-4 m-2 text-xl w-32 text-white bg-red-500"
      >
        Delete
      </button>
      <button
        type="button"
        class="rounded p-4 m-2 text-xl w-32 text-white bg-blue-500"
        @click="handleClickModify"
      >
        Modify
      </button>
    </div>
  </div>
</template>

<script setup>
import { reactive, watchEffect, ref } from "vue";
import { getOne, putOne, deleteOne } from "../../api/todoApi";
import ResultModal from "../common/ResultModal.vue";
import customMove from "../../hooks/customMove";
const initState = {
  tno: 0,
  title: "",
  content: "",
  dueDate: "",
  complete: false,
};

const todo = reactive({ ...initState });

const showModal = ref(false);
const modalTitle = ref("");
const modalContent = ref("");

const actionType = ref(null);

const props = defineProps({
  tno: {
    type: Number,
    required: true,
  },
});

const fetchOneData = async () => {
  try {
    const res = await getOne(props.tno);
    console.log(res);
    Object.assign(todo, res);
  } catch (error) {
    console.log("에러:", error);
    modalTitle.value = "에러";
    modalContent.value = "나중에 다시 시도해 주세요.";
  }
};

const putTodo = async () => {
  try {
    const res = await putOne(todo);
    modalTitle.value = "성공";
    modalContent.value = "수정 완료 했습니다.";
    actionType.value = "put";
  } catch (error) {
    console.log("에러:", error);
    modalTitle.value = "에러";
    modalContent.value = "나중에 다시 시도해 주세요.";
  } finally {
    showModal.value = true;
  }
};

const deleteTodo = async () => {
  try {
    const res = await deleteOne(props.tno);
    modalTitle.value = "성공";
    modalContent.value = "삭제 완료 했습니다.";
    actionType.value = "delete";
  } catch (error) {
    console.log("에러:", error);
    modalTitle.value = "에러";
    modalContent.value = "나중에 다시 시도해 주세요.";
  } finally {
    showModal.value = true;
  }
};

const handleStatusChange = (event) => {
  if (event.target.value === "Y") {
    todo.complete = true;
  } else if (event.target.value === "N") {
    todo.complete = false;
  }
};

const handleClickModify = () => {
  console.log(todo);
  putTodo();
};

const handleClickDelete = () => {
  console.log(props.tno);
  deleteTodo();
};

const { moveToRead, moveToList } = customMove();

const handleMovePage = () => {
  if (actionType.value === "put") {
    moveToRead(props.tno);
  } else if (actionType.value === "delete") {
    moveToList();
  }
};

watchEffect(() => {
  fetchOneData();
});
</script>

<style></style>
