import React, { InputHTMLAttributes, forwardRef } from "react";
import { Input, InputMainContainer } from "./styles";

export interface InputContainerProps
  extends InputHTMLAttributes<HTMLInputElement> {
  size: 1 | 2 | 3 | 4 | 5 | 6 | 8 | 9 | 10 | 12;
  required?: boolean;
}

export const InputContainer = forwardRef<HTMLInputElement, InputContainerProps>(
  ({ size, required = true, ...rest }, ref) => {
    return (
      <InputMainContainer $size={size}>
        <Input {...rest} ref={ref} />
        {!required && <span className="input-extra-text">Opcional</span>}
      </InputMainContainer>
    );
  }
);

InputContainer.displayName = "InputContainer";
