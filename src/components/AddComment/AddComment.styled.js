import styled from "styled-components";
import breakpoints from "../../assets/styles/breakpoints";
import Container from "../shared/Container";
import TextArea from "../shared/TextArea";

export const Input = styled(TextArea)`
  width: 100%;
  @media (max-width: ${breakpoints.medium}) {
    order: -1;
  }
`;

export const AddCommentContainer = styled(Container)`
  justify-content: space-between;
  @media (max-width: ${breakpoints.medium}) {
    flex-wrap: wrap;
  }
`;
