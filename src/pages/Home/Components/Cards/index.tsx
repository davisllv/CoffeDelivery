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
  const {
    coffees,
    decrementCoffeAmount,
    incremmentCoffeAmount,
    coffeTotalAmount,
    shoppingCartCoffes,
    addCoffeeToCart,
  } = useContext(CoffeContext);
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
  console.log(coffeTotalAmount);
  console.log(shoppingCartCoffes);
  function handleInsertCoffeCart(coffe: IMockData) {
    addCoffeeToCart(coffe);
  }

  function handleIncrement(coffeId: number) {
    incremmentCoffeAmount(coffeId);
  }

  function handleDecrement(coffeId: number) {
    decrementCoffeAmount(coffeId);
  }

  return (
    <CardGrid>
      {coffees.map((coffe) => {
        return (
          <CardContainer key={coffe.id}>
            <CardImageContainer>
              <img src={coffe.image} alt="" />
              <CardTagContainer>{getTagComponent(coffe)}</CardTagContainer>
            </CardImageContainer>
            <CardTextsContainer>
              <h3 className="coffe-name">{coffe.name}</h3>
              <span className="coffe-description">{coffe.description}</span>
            </CardTextsContainer>

            <CardButtonContainers>
              <p>
                <span>R$ </span>
                {coffe.price.toLocaleString("pt-BR", {
                  minimumFractionDigits: 2,
                })}
              </p>
              <CardInputGroupContainer>
                <ButtonCountDown
                  count={coffe.quantity}
                  onIncrement={() => handleIncrement(coffe.id)}
                  onDecrement={() => handleDecrement(coffe.id)}
                />
                <button
                  type="button"
                  className="shopping-button"
                  onClick={() => handleInsertCoffeCart(coffe)}
                >
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
