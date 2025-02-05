import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
  Trash,
} from "@phosphor-icons/react";
import {
  ContainerText,
  CardContainer,
  FormContainerValues,
  MainContainer,
  ListShopContainer,
  CoffeValuesMain,
} from "./styles";
import { ButtonCountDown } from "../../ui/components/ButtonCountDown";
import { DisplayGrid } from "../../ui/components/Display/Grid/styles";
import { InputContainer } from "../../ui/components/InputContainer";
import { useContext } from "react";
import { CoffeContext } from "../../data/contexts/CoffeShopContext";
import { ValuesCoffeCart } from "./Values";

export const Cart = () => {
  const {
    shoppingCartCoffes,
    coffeTotalPrice,
    incrementCoffeToCart,
    decrementCoffeToCart,
  } = useContext(CoffeContext);
  return (
    <MainContainer>
      <CardContainer>
        <h2>Complete seu Pedido</h2>
        <form className="form-container">
          <FormContainerValues>
            <ContainerText>
              <MapPinLine className="map-pin-icon" size={22} />
              <div>
                <p>Endereço de Entrega</p>
                <span>Informe o endereço onde deseja receber seu pedido</span>
              </div>
            </ContainerText>

            <DisplayGrid>
              <InputContainer size={4} placeholder="CEP" type="string" />
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
              <InputContainer size={2} placeholder="UF" type="string" />
            </DisplayGrid>
          </FormContainerValues>

          <FormContainerValues>
            <ContainerText>
              <CurrencyDollar className="dollar-icon" size={22} />
              <div>
                <p>Pagamento</p>
                <span>
                  O pagamento é feito na entrega. Escolha a forma que deseja
                  pagar
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
        </form>
      </CardContainer>

      <CardContainer>
        <h2>Cafés selecionados</h2>
        <ListShopContainer>
          {shoppingCartCoffes.map((coffe) => {
            return (
              <div className="coffe-item">
                <div className="coffe-info-container">
                  <div className="coffe-description">
                    <img src={coffe.image} />

                    <div className="coffe-information">
                      <p>{coffe.name}</p>
                      <div className="coffe-actions-buttons">
                        <ButtonCountDown
                          count={coffe.quantity}
                          onDecrement={() => decrementCoffeToCart(coffe.id)}
                          onIncrement={() => incrementCoffeToCart(coffe.id)}
                        />
                        <button>
                          <Trash size={16} />
                          Remover
                        </button>
                      </div>
                    </div>
                  </div>

                  <p className="coffe-values">
                    R${" "}
                    {coffe.price.toLocaleString("pt-br", {
                      minimumFractionDigits: 0,
                    })}
                  </p>
                </div>
              </div>
            );
          })}

          <CoffeValuesMain>
            <ValuesCoffeCart
              description="Total dos Itens"
              value={coffeTotalPrice}
            />
            <ValuesCoffeCart description="Entrega" value={3.5} />

            <ValuesCoffeCart
              description="Total"
              value={coffeTotalPrice}
              isTotal
            />
          </CoffeValuesMain>

          <button className="coffe-confirm-button">Confirmar Pedido</button>
        </ListShopContainer>
      </CardContainer>
    </MainContainer>
  );
};
