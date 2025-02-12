import { Minus, Plus } from "@phosphor-icons/react";
import { ButtonCountDownElements } from "./styles";

interface IButtonCountDownProps {
  count: number;
  onIncrement: () => void;
  onDecrement: () => void;
}

export const ButtonCountDown = ({
  count,
  onDecrement,
  onIncrement,
}: IButtonCountDownProps) => {
  return (
    <ButtonCountDownElements>
      <button type="button" onClick={onDecrement}>
        <Minus />
      </button>

      <span>{count}</span>
      <button type="button" onClick={onIncrement}>
        <Plus />
      </button>
    </ButtonCountDownElements>
  );
};
