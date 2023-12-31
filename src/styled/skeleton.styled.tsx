import { keyframes, styled } from "styled-components";

export const UserContainer = styled.div`
  width: 100%;
  display: -ms-grid;
  display: grid;
  -ms-grid-columns: (270px) [4];
  grid-template-columns: repeat(4, 270px);
  grid-auto-rows: 441px;
  grid-gap: 20px 45px;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  overflow-y: auto;
  scrollbar-color: #ffffff #2e2e2e;
  scrollbar-width: thin;
  scrollbar-width: 0px;
  height: 922px;
`;

const gradient = keyframes`gradient
    0% {
        background-position: 80% 0%;
    }
    50% {
        background-position: 20% 100%;
    }
    100% {
        background-position: 80% 0%;
    }`;

export const UserCard = styled.div`
  width: 270px;
  height: 350px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  background: linear-gradient(
    149deg,
    rgba(255, 255, 255) 0%,
    rgba(169, 169, 169) 42%,
    rgba(128, 128, 128) 72%,
    rgba(105, 105, 105) 100%
  );
  animation: ${gradient} 10s infinite linear;
  background-size: 400%;
`;
