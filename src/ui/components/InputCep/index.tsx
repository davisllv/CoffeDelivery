import { forwardRef } from "react";
import { InputContainer, InputContainerProps } from "../InputContainer";
import "./styles.css";

export const InputCep = forwardRef<HTMLInputElement, InputContainerProps>(
  ({ onChange, ...rest }: InputContainerProps, ref) => {
    const formatCep = (value: string): string => {
      const numericValue = value.replace(/\D/g, ""); // Remove não numéricos
      const truncatedValue = numericValue.slice(0, 8); // Máximo 8 números

      if (truncatedValue.length > 5) {
        return `${truncatedValue.slice(0, 5)}-${truncatedValue.slice(5)}`;
      }

      return truncatedValue;
    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const formattedCep = formatCep(event.target.value);

      // Chama o onChange do React Hook Form para atualizar o valor no formulário
      if (onChange) {
        onChange({
          ...event,
          target: { ...event.target, value: formattedCep },
        });
      }
    };

    return (
      <InputContainer
        type="text"
        onChange={handleChange} // Agora o onChange sincroniza com o formulário
        maxLength={9}
        ref={ref}
        {...rest}
      />
    );
  }
);

InputCep.displayName = "InputCep";
