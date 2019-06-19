import styled from "styled-components";

export const StyledCard = styled.section`
  ::-webkit-scrollbar { width: 0 !important }
  overflow-y: auto;
  flex-basis: ${({ dist }) => dist || "100% "};
  ${({ height }) => height && `height: ${height}px;`}
  background: ${({ color }) => color || "#fff"};
  display: flex;
  flex-wrap: wrap;
  border-radius: 2px;
  padding: 10px;
  box-shadow: 4px 4px 10px 4px rgba(0, 0, 0, 0.1);
  @media (max-width: 800px) {
    padding: 10px;
  }
  :not(first-child) {
    margin-bottom: 10px;
  }
  :last-child {
    margin-left: 10px;
  }
`;
export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-basis: 100%;
  align-items: center;
`;
export default StyledCard;
