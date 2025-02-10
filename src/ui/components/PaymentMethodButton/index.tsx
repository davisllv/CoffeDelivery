/* eslint-disable @typescript-eslint/no-explicit-any */
import { Bank, CreditCard, Money } from "@phosphor-icons/react";
import { Control, Controller, FieldValues } from "react-hook-form";
import { ButtonContainer, ContainerButtons } from "./styles";

interface PaymentMethodButtonProps {
  control: Control<FieldValues, any>; // Controle do react-hook-form
  name: string; // Nome do campo no formulário
}

export const PaymentMethodButton = ({
  control,
  name,
}: PaymentMethodButtonProps) => {
  return (
    <Controller
      name={name}
      control={control}
      defaultValue=""
      render={({ field }) => (
        <ContainerButtons>
          <ButtonContainer
            type="button"
            onClick={() => field.onChange("creditCard")}
            className={field.value === "creditCard" ? "selected" : ""}
          >
            <CreditCard size={16} />
            Cartão de Crédito
          </ButtonContainer>

          <ButtonContainer
            type="button"
            onClick={() => field.onChange("debitCard")}
            className={field.value === "debitCard" ? "selected" : ""}
          >
            <Bank size={16} />
            Cartão de Débito
          </ButtonContainer>

          <ButtonContainer
            type="button"
            onClick={() => field.onChange("money")}
            className={field.value === "money" ? "selected" : ""}
          >
            <Money size={16} />
            Dinheiro
          </ButtonContainer>
        </ContainerButtons>
      )}
    />
  );
};
