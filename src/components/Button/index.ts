import styled from "styled-components";

export const Button = styled.button`
  border-radius: 5px;
  background-color: #0032eb;
  padding: 10px;
  color: white;
  cursor: pointer;
  transition: 0.6s;

  &:hover {
    background-color: #335bef;
    transform: scale(1.01);
  }
`;
