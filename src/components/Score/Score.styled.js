import styled from "styled-components";
import breakpoints from "../../assets/styles/breakpoints";
import TransparentButton from "../shared/TransparentButton";

const BORDER_RADIUS = "10px";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
  background: ${({ theme }) => theme.background2};
  border-radius: ${BORDER_RADIUS};
  order: 1;
  @media (min-width: ${breakpoints.medium}) {
    flex-direction: column;
    order: 0;
  }
`;

export const Value = styled.span`
  color: ${({ theme }) => theme.primary};
  font-weight: 500;
`;

export const RateButton = styled(TransparentButton)`
  padding: 15px;
  border-radius: ${BORDER_RADIUS};
  path {
    fill: ${({ isActive }) => (isActive ? `blue` : "auto")};
  }
`;
