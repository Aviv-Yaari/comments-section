import styled from "styled-components";

const DEFAULT_SIZE = "2em";

const Avatar = styled.img`
  border-radius: 50%;
  height: ${({ size }) => size || DEFAULT_SIZE};
  width: ${({ size }) => size || DEFAULT_SIZE};
`;

export default Avatar;
