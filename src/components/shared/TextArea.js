import styled from "styled-components";

const TextArea = styled.textarea`
  border: 1px solid ${({ theme }) => theme.background3};
  padding: 10px 20px;
  border-radius: 7px;
  resize: none;

  &:focus {
    outline: 1px solid ${({ theme }) => theme.primary};
  }
`;

export default TextArea;
