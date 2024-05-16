import ListPage from "../pages/todo/ListPage.vue";
import ReadPage from "../pages/todo/ReadPage.vue";
import AddPage from "../pages/todo/AddPage.vue";
import ModifyPage from "../pages/todo/ModifyPage.vue";

const todoRouter = () => {
  return [
    { path: "list", component: ListPage },
    { path: "", redirect: "/todo/list" },
    { path: "read/:tno", component: ReadPage },
    { path: "add", component: AddPage },
    { path: "modify/:tno", component: ModifyPage },
  ];
};

export default todoRouter;
