import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from "@phosphor-icons/react";
import { FormContainer, FormContainerValues } from "./styles";
import { DisplayGrid } from "../../../ui/components/Display/Grid/styles";
import { InputContainer } from "../../../ui/components/InputContainer";
import { ContainerText } from "../styles";
import { InputCep } from "../../../ui/components/InputCep";
import { useFormContext } from "react-hook-form";
import { estadosBrasileiros } from "../../../assets/mock/braziliaStates";

export const CartForm = () => {
  const { register } = useFormContext();
  return (
    <FormContainer>
      <FormContainerValues>
        <ContainerText>
          <MapPinLine className="map-pin-icon" size={22} />
          <div>
            <p>Endereço de Entrega</p>
            <span>Informe o endereço onde deseja receber seu pedido</span>
          </div>
        </ContainerText>

        <DisplayGrid>
          <InputCep size={4} placeholder="CEP" type="string" />

          <InputContainer size={12} placeholder="Rua" type="string" />
          <InputContainer size={4} placeholder="Número" type="number" />
          <InputContainer
            size={8}
            placeholder="Complemento"
            type="string"
            required={false}
          />
          <InputContainer size={4} placeholder="Bairro" type="string" />
          <InputContainer size={6} placeholder="Cidade" type="string" />
          <InputContainer
            size={2}
            placeholder="UF"
            type="string"
            list="brazilian-states"
          />

          <datalist id="brazilian-states">
            {estadosBrasileiros.map((state) => {
              return <option value={state} />;
            })}
          </datalist>
        </DisplayGrid>
      </FormContainerValues>

      <FormContainerValues>
        <ContainerText>
          <CurrencyDollar className="dollar-icon" size={22} />
          <div>
            <p>Pagamento</p>
            <span>
              O pagamento é feito na entrega. Escolha a forma que deseja pagar
            </span>
          </div>
        </ContainerText>

        <div className="form-container-buttons">
          <button type="button">
            <CreditCard size={16} />
            Cartão de Crédito
          </button>
          <button type="button">
            <Bank size={16} /> Cartão de Débito
          </button>
          <button type="button">
            <Money size={16} /> Dinheiro
          </button>
        </div>
      </FormContainerValues>
    </FormContainer>
  );
};
