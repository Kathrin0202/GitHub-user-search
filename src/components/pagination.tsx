import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getUsers } from "../api";
import { perPage } from "../pages/main";
import { setPageNumber } from "../store/slices/searchSlices";
import { getUser } from "../store/slices/userSlices";
import { useAppSelector } from "../store/store";
import * as S from "../styled/pagination.styled";
import { chooseRepo } from "./filterContainer";

export const Pagination = () => {
  const currentPage = useAppSelector((state) => state.search.pageNumber);
  const totalCount = useAppSelector((state) => state.user.total_count);
  const userName = useAppSelector((state) => state.search.userName);
  const [pages, setPages] = useState(1);
  const dispatch = useDispatch();
  let page: number;

  const fetchData = (page: number | null) => {
    dispatch(setPageNumber(page));
    const totalPagesCount = Math.ceil(totalCount / perPage);
    setPages(totalPagesCount);
    getUsers({
      userName: userName,
      sort: chooseRepo[1],
      perPage: perPage,
      page: currentPage,
    })
      .then((data) => dispatch(getUser(data)))
      .catch((error) => console.log(error));
  };

  const handlePageChange = (page: number | null) => {
    fetchData(page);
  };

  const handlePrevClick = () => {
    if (currentPage > 1) {
      handlePageChange(currentPage - 1);
    }
  };

  const handleNextClick = () => {
    if (currentPage < pages) {
      handlePageChange(currentPage + 1);
    }
  };

  useEffect(() => {
    const totalPagesCount = Math.ceil(totalCount / perPage);
    setPages(totalPagesCount);
  }, [totalCount, currentPage]);
  return (
    <S.PaginationCard>
      <S.BtnPrev onClick={handlePrevClick}>Назад</S.BtnPrev>
      <S.Page onClick={() => handlePageChange(currentPage)}>{currentPage}</S.Page>
      <S.BtnNext onClick={handleNextClick}>Вперед</S.BtnNext>
    </S.PaginationCard>
  );
};
