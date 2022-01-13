import * as Style from "./Score.styled";
import { ReactComponent as PlusIcon } from "../../assets/images/icon-plus.svg";
import { ReactComponent as MinusIcon } from "../../assets/images/icon-minus.svg";

function Score({ score, diff, onRate }) {
  return (
    <Style.Container>
      <Style.RateButton isActive={diff === 1} onClick={() => onRate(1)}>
        <PlusIcon />
      </Style.RateButton>
      <Style.Value>{score + (diff || 0)}</Style.Value>
      <Style.RateButton isActive={diff === -1} onClick={() => onRate(-1)}>
        <MinusIcon />
      </Style.RateButton>
    </Style.Container>
  );
}

export default Score;
