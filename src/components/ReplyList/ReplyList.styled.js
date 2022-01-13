import styled from "styled-components";
import breakpoints from "../../assets/styles/breakpoints";

export const Container = styled.div`
  margin-top: 20px;
  display: flex;
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
  flex-grow: 1;
`;

export const Line = styled.div`
  width: 3px;
  background: ${({ theme }) => theme.background3};
  margin: 0 10px;
  @media (min-width: ${breakpoints.medium}) {
    margin: 0 37px;
  }
`;
