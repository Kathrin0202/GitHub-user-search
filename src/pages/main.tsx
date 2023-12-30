import { useState } from "react";
import { useDispatch } from "react-redux";
import { getUsers } from "../api";
import { chooseRepo, FilterContainer } from "../components/filterContainer";
import { UserContainer } from "../components/userContainer";
import { setSearchUser } from "../store/slices/searchSlices";
import { getUser } from "../store/slices/userSlices";
import * as S from "../styled/main.style";
import { useAppSelector } from "../store/store";

export const perPage = 12;

export const Main = () => {
  const [userName, setUserName] = useState("");
  const [isLoading, setIsLoading] = useState<boolean | null>(null);
  const currentPage = useAppSelector((state) => state.search.pageNumber);
  const dispatch = useDispatch();

  const handleSearchClick = (event: any) => {
    event.preventDefault();
    setIsLoading(true);
    setUserName(userName);
    dispatch(setSearchUser(userName));
    getUsers({
      userName: userName,
      sort: chooseRepo[1],
      perPage: perPage,
      page: currentPage,
    })
      .then((data) => {
        dispatch(getUser(data));
      })
      .catch((error) => alert(error))
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <S.Main>
      <S.MainText>Поиск пользователей GitHub</S.MainText>
      <S.InputContainer>
        <S.InputUser
          placeholder="Введите имя пользователя"
          type="search"
          name="search"
          value={userName}
          onChange={(event) => {
            setUserName(event.target.value);
          }}
        ></S.InputUser>
        <S.ButtonSearchUser onClick={(event) => handleSearchClick(event)}>
          Найти
        </S.ButtonSearchUser>
      </S.InputContainer>
      <FilterContainer />
      {isLoading ? <p>Данные загружаются...</p> : <UserContainer />}
    </S.Main>
  );
};
