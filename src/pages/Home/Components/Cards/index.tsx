import { IMockData } from "../../../../assets/mock/coffeMockedShop";
import { ButtonCountDown } from "../../../../ui/components/ButtonCountDown";
import {
  CardButtonContainers,
  CardContainer,
  CardGrid,
  CardImageContainer,
  CardInputGroupContainer,
  CardTagContainer,
  CardTextsContainer,
} from "./styles";
import { ShoppingCart } from "@phosphor-icons/react";
import { useContext } from "react";
import { CoffeContext } from "../../../../data/contexts/CoffeShopContext";

export const HomeCards = () => {
  const { coffees, decrementCoffeAmount, incremmentCoffeAmount } =
    useContext(CoffeContext);
  function getTagComponent(coffe: IMockData) {
    const tagComponent: JSX.Element[] = [];

    if (coffe.special) {
      tagComponent.push(<span key="special">Especial</span>);
    } else {
      tagComponent.push(<span key="tradicional">Tradicional</span>);
    }

    if (coffe.alcoholic)
      tagComponent.push(<span key="alcoholic">Alcoólico</span>);
    if (coffe.cold) tagComponent.push(<span key="cold">Gelado</span>);
    if (coffe.hasMilk) tagComponent.push(<span key="milk">Com Leite</span>);

    return tagComponent;
  }

  function handleIncrement(coffeId: number) {
    decrementCoffeAmount(coffeId);
  }

  function handleDecrement(coffeId: number) {
    incremmentCoffeAmount(coffeId);
  }

  return (
    <CardGrid>
      {coffees.map((coffe) => {
        return (
          <CardContainer key={coffe.id}>
            <CardImageContainer>
              <img src={coffe.imagem} alt="" />
              <CardTagContainer>{getTagComponent(coffe)}</CardTagContainer>
            </CardImageContainer>
            <CardTextsContainer>
              <h3 className="coffe-name">{coffe.nome}</h3>
              <span className="coffe-description">{coffe.descricao}</span>
            </CardTextsContainer>

            <CardButtonContainers>
              <p>
                <span>R$ </span>
                9,90
              </p>
              <CardInputGroupContainer>
                <ButtonCountDown
                  count={coffe.quantitity}
                  onIncrement={() => handleIncrement(coffe.id)}
                  onDecrement={() => handleDecrement(coffe.id)}
                />
                <button type="button" className="shopping-button">
                  <ShoppingCart size={22} weight="fill" />
                </button>
              </CardInputGroupContainer>
            </CardButtonContainers>
          </CardContainer>
        );
      })}
    </CardGrid>
  );
};
