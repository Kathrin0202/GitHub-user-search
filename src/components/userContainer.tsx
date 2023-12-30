import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserPage } from "../pages/user";
import * as S from "../styled/main.style";
import { useAppSelector } from "../store/store";
import { Pagination } from "./pagination";
import { useDispatch } from "react-redux";
import { setUserDetails } from "../store/slices/userSlices";
import { getUserCard } from "../api";

export const UserContainer = () => {
  const users = useAppSelector((state) => state.user.items);
  const [openForm, setOpenForm] = useState<boolean | null>(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleUserLink = (userLogin: string) => {
    navigate(`users/${userLogin}`);
    setOpenForm(true);
    getUserCard(userLogin)
      .then((data) => {
        dispatch(setUserDetails(data));
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      {openForm && <UserPage />}
      <S.UserContainer>
        {users.map((user, index) => (
          <S.UserCard key={index} onClick={() => handleUserLink(user.login)}>
            <S.UserImages>
              <S.UserImg src={user.avatar_url} />
            </S.UserImages>
            <S.UserLogin>{user.login}</S.UserLogin>
          </S.UserCard>
        ))}
      </S.UserContainer>
      {users && <Pagination />}
    </>
  );
};
