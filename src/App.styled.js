import styled from "styled-components";

export const MainContainer = styled.main`
  display: flex;
  justify-content: center;
  min-height: 100vh;
  padding: 40px 10px;
  background: ${({ theme }) => theme.background2};
`;
