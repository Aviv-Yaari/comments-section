import styled from "styled-components";
import breakpoints from "../../assets/styles/breakpoints";

export const Container = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
  max-width: ${breakpoints.medium};
`;
