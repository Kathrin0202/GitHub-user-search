import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getUsers } from "../api";
import { perPage } from "../pages/main";
import { setPageNumber } from "../store/slices/searchSlices";
import { getUser } from "../store/slices/userSlices";
import { useAppSelector } from "../store/store";
import * as S from "../styled/pagination.styled";

export const Pagination = () => {
  const currentPage = useAppSelector((state) => state.search.pageNumber);
  const totalCount = useAppSelector((state) => state.user.total_count);
  const userName = useAppSelector((state) => state.search.userName);
  const [pages, setPages] = useState(1);
  const dispatch = useDispatch();

  const fetchData = (page: number) => {
    dispatch(setPageNumber(page));
    const totalPagesCount = Math.ceil(totalCount / perPage);
    setPages(totalPagesCount);
    getUsers({
      userName: userName,
      perPage: perPage,
      page: currentPage,
    })
      .then((data) => dispatch(getUser(data)))
      .catch((error) => console.log(error));
  };

  const handlePageChange = (page: number) => {
    fetchData(page);
  };

  const handlePrevClick = () => {
    if (currentPage > 1) {
      handlePageChange(currentPage - 1);
      return;
    }
  };

  const handleNextClick = () => {
    if (currentPage < pages) {
      handlePageChange(currentPage + 1);
      return;
    }
  };

  useEffect(() => {
    const totalPagesCount = Math.ceil(totalCount / perPage);
    setPages(totalPagesCount);
  }, [totalCount, currentPage]);

  return (
    <S.PaginationCard>
      <S.BtnPrev onClick={handlePrevClick}>Назад</S.BtnPrev>
      <S.Page onClick={() => currentPage && handlePageChange(currentPage)}>
        {currentPage}
      </S.Page>
      <S.BtnNext onClick={handleNextClick}>Вперед</S.BtnNext>
    </S.PaginationCard>
  );
};
