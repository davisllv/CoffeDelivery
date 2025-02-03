import { IMockData, MockData } from "../../../../assets/mock/coffeMockedShop";
import {
  ButtonCountDownElements,
  CardButtonContainers,
  CardContainer,
  CardGrid,
  CardImageContainer,
  CardInputGroupContainer,
  CardTagContainer,
  CardTextsContainer,
} from "./styles";
import { Minus, Plus, ShoppingCart } from "@phosphor-icons/react";

export const HomeCards = () => {
  function getTagComponent(coffe: IMockData) {
    const tagComponent: JSX.Element[] = [];

    if (coffe.special) {
      tagComponent.push(<span key="special">Especial</span>);
    } else {
      tagComponent.push(<span>Tradicional</span>);
    }

    if (coffe.alcoholic) tagComponent.push(<span>Alcoólico</span>);
    if (coffe.cold) tagComponent.push(<span>Gelado</span>);
    if (coffe.hasMilk) tagComponent.push(<span>Com Leite</span>);

    return tagComponent;
  }
  return (
    <CardGrid>
      {MockData.map((coffe) => {
        return (
          <CardContainer>
            <CardImageContainer>
              <img src={coffe.imagem} alt="" />
              <CardTagContainer>{getTagComponent(coffe)}</CardTagContainer>
            </CardImageContainer>
            <CardTextsContainer>
              <h3>{coffe.nome}</h3>
              <span>{coffe.descricao}</span>
            </CardTextsContainer>

            <CardButtonContainers>
              <p>
                <span>R$ </span>
                9,90
              </p>
              <CardInputGroupContainer>
                <ButtonCountDownElements>
                  <button>
                    <Minus />
                  </button>

                  <span>{1}</span>
                  <button>
                    <Plus />
                  </button>
                </ButtonCountDownElements>
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
