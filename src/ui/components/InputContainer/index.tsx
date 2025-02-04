import React, { InputHTMLAttributes } from "react";
import { Input, InputMainContainer } from "./styles";

interface InputContainerProps extends InputHTMLAttributes<HTMLInputElement> {
  size: 1 | 2 | 3 | 4 | 5 | 6 | 8 | 9 | 10 | 12;
  required?: boolean;
}

export const InputContainer: React.FC<InputContainerProps> = ({
  size,
  required = true,
  ...rest
}) => {
  return (
    <InputMainContainer $size={size}>
      <Input required={required} {...rest} />
      {!required && <span className="input-extra-text">Opcional</span>}
    </InputMainContainer>
  );
};
