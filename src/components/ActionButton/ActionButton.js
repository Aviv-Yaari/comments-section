import styled, { useTheme } from "styled-components";
import ReplyIcon from "../../assets/images/icon-reply.svg";
import DeleteIcon from "../../assets/images/icon-delete.svg";
import pallete from "../../assets/styles/pallete";
import PropTypes from "prop-types";
import TransparentButton from "../shared/TransparentButton";

const Container = styled(TransparentButton)`
  display: flex;
  align-items: center;
  gap: 6px;
  color: ${({ color }) => color};
  font-weight: 500;
  &:hover {
    filter: opacity(0.5);
  }
`;

function ActionButton({ className, onClick, type }) {
  const theme = useTheme();
  const map = {
    reply: { img: ReplyIcon, text: "Reply", color: theme.primary },
    delete: { img: DeleteIcon, text: "Delete", color: pallete.softRed },
  };
  const { img, text, color } = map[type];

  return (
    <Container className={className} color={color} onClick={onClick}>
      <img src={img} alt={text} />
      <span>{text}</span>
    </Container>
  );
}

ActionButton.propTypes = {
  type: PropTypes.oneOf(["reply", "delete"]),
};

export default ActionButton;
