import AmericanCoffe from "../../assets/coffes/american-coffe.svg";
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
} from "./styles";
import { ButtonCountDown } from "../../ui/components/ButtonCountDown";

export const Cart = () => {
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

            <div className="form-container-inputs">
              <input placeholder="CEP" type="string" />
              <input placeholder="Rua" type="string" />
              <input placeholder="Número" type="number" />
              <input placeholder="Complemento" type="string" />
              <input placeholder="Bairro" type="string" />
              <input placeholder="UF" type="string" />
            </div>
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
          <div className="coffe-item">
            <div className="coffe-info-container">
              <div className="coffe-description">
                <img src={AmericanCoffe} />

                <div className="coffe-information">
                  <p>Expresso Tradicional</p>
                  <div className="coffe-actions-buttons">
                    <ButtonCountDown />
                    <button>
                      <Trash size={16} />
                      Remover
                    </button>
                  </div>
                </div>
              </div>

              <p className="coffe-values">R$ 9,90</p>
            </div>
          </div>
          <div className="coffe-item">
            <div className="coffe-info-container">
              <div className="coffe-description">
                <img src={AmericanCoffe} />

                <div className="coffe-information">
                  <p>Expresso Tradicional</p>
                  <div className="coffe-actions-buttons">
                    <ButtonCountDown />
                    <button>
                      <Trash size={16} />
                      Remover
                    </button>
                  </div>
                </div>
              </div>

              <p className="coffe-values">R$ 9,90</p>
            </div>
          </div>
        </ListShopContainer>
      </CardContainer>
    </MainContainer>
  );
};
