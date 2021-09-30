import styled, { keyframes, css } from "styled-components";

const vibrate = keyframes`
        0% {
          transform: translate(0);
        }
  
        100% {
          transform: translate(-5px, 0);
        }
      `;

interface ContainerProps {
  isWinner: boolean;
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  flex-direction: column;
  border: 1px solid white;
  padding: 1em;
  border-radius: 5px;
  background-color: ${({ isWinner }) =>
    isWinner ? "rgba(124,0,248,0.12)" : "rgba(255, 255, 255, 0.1)"};
  ${({ isWinner }) =>
    isWinner &&
    css`
      animation: ${vibrate} 0.3s linear infinite alternate;
    `}

  @media (max-width: 600px) {
    font-size: 12px;
  }

  a {
    color: white;
    text-decoration: none;
  }
`;

export const Field = styled.div``;
