import { Minus, Plus } from "@phosphor-icons/react";
import { ButtonCountDownElements } from "./styles";

export const ButtonCountDown = () => {
  return (
    <ButtonCountDownElements>
      <button>
        <Minus />
      </button>

      <span>{1}</span>
      <button>
        <Plus />
      </button>
    </ButtonCountDownElements>
  );
};
