import styled from "styled-components";

const Button = styled.button`
  border: none;
  border-radius: 6px;
  background: ${({ theme }) => theme.primary};
  padding: 12px 25px;
  text-transform: uppercase;
  color: white;
  cursor: pointer;
  &:hover {
    filter: opacity(0.5);
  }
`;

export default Button;
