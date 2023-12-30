import { useState } from "react";
import { useDispatch } from "react-redux";
import { getUsers } from "../api";
import { perPage } from "../pages/main";
import { getUser } from "../store/slices/userSlices";
import { useAppSelector } from "../store/store";
import * as S from "../styled/main.style";

export const chooseRepo = ["asc", "desc"];

export const FilterContainer = () => {
  const currentPage = useAppSelector((state) => state.search.pageNumber);
  const userName = useAppSelector((state) => state.search.userName);
  const dispatch = useDispatch();
  const [openFilter, setOpenFilter] = useState(false);

  const selectCategory = () => {
    setOpenFilter(true);
  };

  const handleFilterClick = (sort: string) => {
    getUsers({
      userName: userName,
      sort: sort,
      perPage: perPage,
      page: currentPage,
    })
      .then((data) => {
        dispatch(getUser(data));
      })
      .catch((error) => alert(error))
      .finally(() => {
        setOpenFilter(false);
      });
  };
  return (
    <S.FilterContainer>
      <S.FilterContainerTitle>Сортировать:</S.FilterContainerTitle>
      <S.FilterButton
        $active={openFilter ? "active" : "notActive"}
        onClick={selectCategory}
      >
        {" "}
        по количеству репозиториев
        {openFilter && (
          <S.FilterWrap>
            <S.FilterText onClick={() => handleFilterClick(chooseRepo[0])}>
              По возрастанию
            </S.FilterText>
            <S.FilterText onClick={() => handleFilterClick(chooseRepo[1])}>
              По убыванию
            </S.FilterText>
          </S.FilterWrap>
        )}
      </S.FilterButton>
    </S.FilterContainer>
  );
};
