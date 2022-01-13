import styled from "styled-components";
import breakpoints from "../../assets/styles/breakpoints";
import Container from "../shared/Container";

export const CommentContainer = styled(Container)`
  position: relative;
  flex-direction: column;
  @media (min-width: ${breakpoints.medium}) {
    flex-direction: row;
  }
`;

export const Details = styled.article`
  flex-grow: 1;
`;

export const TopRow = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 14px;
`;

export const Actions = styled.div`
  display: flex;
  gap: 10px;
  position: absolute;
  right: 20px;
  @media (max-width: ${breakpoints.medium}) {
    bottom: 30px;
  }
`;

export const ReplyingTo = styled.span`
  font-weight: 500;
  color: ${({ theme }) => theme.primary};
`;

export const Username = styled.span`
  font-weight: 500;
  color: ${({ theme }) => theme.boldText};
`;
