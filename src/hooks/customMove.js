import { ref } from "vue";
import { useRoute } from "vue-router";
import { useRouter } from "vue-router";

const customMove = () => {
  const route = useRoute();
  const router = useRouter();
  //const paramTno = route.params.tno;

  const getQueryParams = () => {
    const page = parseInt(route.query.page) || 1;
    const size = parseInt(route.query.size) || 10;
    return { page, size };
  };

  const moveToList = (pageParam) => {
    let queryStr = "";

    if (pageParam) {
      const pageNum = parseInt(pageParam.page) || 1;
      const sizeNum = parseInt(pageParam.size) || 10;
      queryStr = { page: pageNum, size: sizeNum };
    } else {
      queryStr = getQueryParams();
    }

    router.push({
      path: `/todo/list`,
      query: queryStr,
    });
  };

  const moveToModify = (num) => {
    router.push({
      path: `../modify/${num}`,
      query: getQueryParams(),
    });
  };

  const moveToRead = (num) => {
    router.push({
      path: `/todo/read/${num}`,
      query: getQueryParams(),
    });
  };

  return { moveToList, moveToModify, moveToRead };
};

export default customMove;
