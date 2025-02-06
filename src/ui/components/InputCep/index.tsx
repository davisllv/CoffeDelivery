import { useState } from "react";
import { InputContainer, InputContainerProps } from "../InputContainer";
import "./styles.css";

export const InputCep = ({ ...rest }: InputContainerProps) => {
  const [cep, setCep] = useState<string>("");

  const formatCep = (value: string): string => {
    const numericValue = value.replace(/\D/g, "");

    const truncatedValue = numericValue.slice(0, 8);

    if (truncatedValue.length > 5) {
      return `${truncatedValue.slice(0, 5)}-${truncatedValue.slice(5)}`;
    }

    return truncatedValue;
  };

  // Função para lidar com a mudança no input
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const formattedCep = formatCep(event.target.value);
    setCep(formattedCep);
  };
  return (
    <InputContainer
      type="text"
      id="cep"
      name="cep"
      value={cep}
      onChange={handleChange}
      maxLength={9} // 8 dígitos + 1 traço
      {...rest}
    />
  );
};
