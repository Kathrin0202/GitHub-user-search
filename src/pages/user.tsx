import { useNavigate, useParams } from "react-router-dom";
import { useAppSelector } from "../store/store";
import * as S from "../styled/user.style";

export const UserPage = () => {
  const name = useParams();
  const navigate = useNavigate();

  const closeForm = () => {
    navigate("/");
  };

  const user = useAppSelector((state) => state.user.details);

  return (
    <S.Wrapper>
      <S.MainCenter>
        <S.Title>Профиль пользователя</S.Title>
        <S.ModalBtnClose>
          <S.ModalBtnCloseLine onClick={closeForm}></S.ModalBtnCloseLine>
        </S.ModalBtnClose>
        {name && (
          <S.MainProfile>
            <S.ProfileContent>
              <S.ProfileLeft>
                <S.ProfileImg>
                  <S.ProfileImgImg src={user.avatar_url} />
                </S.ProfileImg>
              </S.ProfileLeft>
              <S.ProfileRight>
                <S.ProfileTitle>Логин: {user.login}</S.ProfileTitle>
                <S.ProfileIhfo>
                  {" "}
                  Зарегистрирован с{" "}
                  {new Date(user.created_at).toLocaleString("ru", {
                    year: "numeric",
                    month: "long",
                  })}
                </S.ProfileIhfo>
                <S.ProfileIhfo>Компания: {user.company}</S.ProfileIhfo>
                <S.ProfileIhfo>Страна: {user.location}</S.ProfileIhfo>
                <S.ProfileIhfo>Подписчики: {user.followers}</S.ProfileIhfo>
                <S.ProfileIhfoNav>{user.html_url}</S.ProfileIhfoNav>
              </S.ProfileRight>
            </S.ProfileContent>
          </S.MainProfile>
        )}
      </S.MainCenter>
    </S.Wrapper>
  );
};
