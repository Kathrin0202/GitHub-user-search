import { styled } from "styled-components";

export const NotFoundContainer = styled.div`
  max-width: 1178px;
  padding: 0 0 70px;
  margin: 100px;
  padding: 0 5px 70px;
`;

export const NotFoundCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 26px;
`;
export const NotFoundCardTitle = styled.h1`
  font-style: normal;
  font-weight: 500;
  font-size: 40px;
  line-height: 42px;
  color: #009ee4;
  margin-top: 30px;
  text-align: center;
  &:hover::before {
    border-top: 2px solid #0080c1;
    border-left: 2px solid #0080c1;
  }
`;
export const NotFoundCardText = styled.p`
  font-size: 22px;
  font-weight: 500;
  line-height: 26px;
  color: #00000;
  overflow: hidden;
  text-overflow: ellipsis;
`;
export const NotFoundCardBtn = styled.button`
  margin-left: 10px;
  width: 250px;
  height: 50px;
  background-color: #009ee4;
  border: 1px solid #009ee4;
  border-radius: 6px;
  font-size: 16px;
  line-height: 24px;
  color: #ffffff;
  &:hover {
    background-color: #0080c1;
  }
`;
