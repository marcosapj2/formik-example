import styled from "styled-components";

export const StyledButton = styled.button`
  cursor: pointer;
  height: 30px;
  border-radius: 2px;
  margin-left: auto;
  background: #3465a4;
  padding: ${({ large }) => (large ? "4px 20px" : "4px 10px")};
  color: #fff;
  outline: none;
  border: none;
  transition: 0.4s;
  :active {
    transform: scale(1.1);
  }
  :hover {
    background: #2a5285;
  }
`;
