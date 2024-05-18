import { ref } from "vue";
import { useRoute } from "vue-router";
import { useRouter } from "vue-router";

const customMove = () => {
  const route = useRoute();
  const router = useRouter();

  const paramTno = route.params.tno;

  const page = parseInt(route.query.page) || 1;
  const size = parseInt(route.query.size) || 10;

  const queryParams = { page: page, size: size };

  const moveToList = (pageParam) => {
    let queryStr = "";

    if (pageParam) {
      const pageNum = parseInt(pageParam.page) || 1;
      const sizeNum = parseInt(pageParam.size) || 10;
      queryStr = { page: pageNum, size: sizeNum };
    } else {
      queryStr = queryParams;
    }

    router.push({
      path: `/todo/list`,
      query: queryStr,
    });
  };

  const moveToModify = (num) => {
    router.push({
      path: `../modify/${num}`,
      query: queryParams,
    });
  };

  return { moveToList, moveToModify };
};

export default customMove;
