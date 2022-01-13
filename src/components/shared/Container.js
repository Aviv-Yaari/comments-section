import styled from "styled-components";

const Container = styled.li`
  display: flex;
  align-items: flex-start;
  gap: 20px;
  padding: 20px;
  background: ${({ theme }) => theme.background};
`;

export default Container;
