import * as S from "../styled/skeleton.styled";

export const Skeleton = () => {
  return (
    <S.UserContainer>
      {Array(12)
        .fill(null)
        .map((item, index) => {
          return <S.UserCard key={index}></S.UserCard>;
        })}
    </S.UserContainer>
  );
};
