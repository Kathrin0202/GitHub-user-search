import { Link } from "react-router-dom";
import * as S from "../styled/notFound.style";
export const NotFound = () => {
  return (
    <S.NotFoundContainer>
      <S.NotFoundCard>
        <S.NotFoundCardTitle>404</S.NotFoundCardTitle>
        <S.NotFoundCardText>Страница не найдена</S.NotFoundCardText>
        <S.NotFoundCardText>
          Возможно, она была удалена или перенесена на другой адрес
        </S.NotFoundCardText>
        <Link to="/">
          <S.NotFoundCardBtn>Вернуться на главную</S.NotFoundCardBtn>
        </Link>
      </S.NotFoundCard>
    </S.NotFoundContainer>
  );
};
