import { Calculator, CurrencyDollar, MapPinLine } from "@phosphor-icons/react";
import { FormContainer, FormContainerValues } from "./styles";
import { DisplayGrid } from "../../../ui/components/Display/Grid/styles";
import { InputContainer } from "../../../ui/components/InputContainer";
import { ContainerText } from "../styles";
import { InputCep } from "../../../ui/components/InputCep";
import { useFormContext } from "react-hook-form";
import { estadosBrasileiros } from "../../../assets/mock/braziliaStates";
import { PaymentMethodButton } from "../../../ui/components/PaymentMethodButton";
import { useCalculateShipping } from "../../../data/hooks/useCalculateShipping";
import { useLoaderBackdrop } from "../../../data/hooks/useLoaderBackdrop";
import { newCalculatePriceFormData } from "./schema";
import { getErrorValidation } from "../../../data/services/getErrorValidations";

export const CartForm = () => {
  const { setLoading } = useLoaderBackdrop();
  const { register, control, watch } = useFormContext();
  const { calculateShipping } = useCalculateShipping();

  const handleCalculateShipping = async () => {
    setLoading(true);
    try {
      const zipCode = watch("zipCode");

      newCalculatePriceFormData.parse(zipCode);

      await calculateShipping(zipCode);
    } catch (error) {
      if (error instanceof Error) getErrorValidation(error);
    } finally {
      setLoading(false);
    }
  };

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
          <InputCep
            size={4}
            placeholder="CEP"
            type="string"
            {...register("zipCode")}
          />

          <InputContainer
            size={12}
            placeholder="Rua"
            type="string"
            {...register("street")}
          />
          <InputContainer
            size={4}
            placeholder="Número"
            type="number"
            min={0}
            {...register("houseNumber")}
          />
          <InputContainer
            size={8}
            placeholder="Complemento"
            type="string"
            required={false}
            {...register("complement")}
          />
          <InputContainer
            size={4}
            placeholder="Bairro"
            type="string"
            {...register("neighborhood")}
          />
          <InputContainer
            size={6}
            placeholder="Cidade"
            type="string"
            {...register("city")}
          />
          <InputContainer
            size={2}
            placeholder="UF"
            type="string"
            list="brazilian-states"
            {...register("state")}
          />

          <datalist id="brazilian-states">
            {estadosBrasileiros.map((state) => {
              return <option key={state} value={state} />;
            })}
          </datalist>
        </DisplayGrid>

        <ContainerText>
          <Calculator className="calculator-icon" size={22} />
          <div>
            <p>Calcular preço de Entrega</p>
            <span>Informe o CEP para calcular o frete</span>
            <button
              type="button"
              className="calculate-button"
              onClick={handleCalculateShipping}
            >
              Calcular
            </button>
          </div>
        </ContainerText>
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

        <PaymentMethodButton control={control} name="paymentMethod" />
      </FormContainerValues>
    </FormContainer>
  );
};
