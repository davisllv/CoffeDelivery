import CoffeImagge from "../../assets/coffe-delivery-image.svg";
import TraditionalCoffe from "../../assets/coffes/american-coffe.svg";
import {
  ButtonCountDownElements,
  CardButtonContainers,
  CardContainer,
  CardGrid,
  CardImageContainer,
  CardInputGroupContainer,
  CardSectionContainer,
  CardTextsContainer,
  ContainerHome,
  ImageContainer,
  MainContainerHome,
  TextsContainer,
} from "./styles";
import { HomeIcons } from "./Components/Icons";
import { Minus, Plus, ShoppingCart } from "@phosphor-icons/react";

export const Home = () => {
  return (
    <div>
      <ContainerHome>
        <MainContainerHome>
          <TextsContainer>
            <h1>Encontre o café perfeito para qualquer hora do dia</h1>
            <span>
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
            </span>
          </TextsContainer>

          <HomeIcons />
        </MainContainerHome>

        <ImageContainer>
          <img src={CoffeImagge} alt="" />
        </ImageContainer>
      </ContainerHome>

      <CardSectionContainer>
        <h2>Nossos Cafés</h2>

        {/* Cards com os cafés */}
        <CardGrid>
          <CardContainer>
            <CardImageContainer>
              <img src={TraditionalCoffe} alt="" />
              <span>Tradicional</span>
            </CardImageContainer>
            <CardTextsContainer>
              <h3>Expresso Tradicional</h3>
              <span>
                O tradicional café feito com água quente e grãos moídos
              </span>
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
                <button type="button">
                  <ShoppingCart size={22} weight="fill" />
                </button>
              </CardInputGroupContainer>
            </CardButtonContainers>
          </CardContainer>
          <CardContainer>
            <CardImageContainer>
              <img src={TraditionalCoffe} alt="" />
              <span>Tradicional</span>
            </CardImageContainer>
            <CardTextsContainer>
              <h3>Expresso Tradicional</h3>
              <span>
                O tradicional café feito com água quente e grãos moídos
              </span>
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
                <button type="button">
                  <ShoppingCart size={22} weight="fill" />
                </button>
              </CardInputGroupContainer>
            </CardButtonContainers>
          </CardContainer>
          <CardContainer>
            <CardImageContainer>
              <img src={TraditionalCoffe} alt="" />
              <span>Tradicional</span>
            </CardImageContainer>
            <CardTextsContainer>
              <h3>Expresso Tradicional</h3>
              <span>
                O tradicional café feito com água quente e grãos moídos
              </span>
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
                <button type="button">
                  <ShoppingCart size={22} weight="fill" />
                </button>
              </CardInputGroupContainer>
            </CardButtonContainers>
          </CardContainer>
          <CardContainer>
            <CardImageContainer>
              <img src={TraditionalCoffe} alt="" />
              <span>Tradicional</span>
            </CardImageContainer>
            <CardTextsContainer>
              <h3>Expresso Tradicional</h3>
              <span>
                O tradicional café feito com água quente e grãos moídos
              </span>
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
                <button type="button">
                  <ShoppingCart size={22} weight="fill" />
                </button>
              </CardInputGroupContainer>
            </CardButtonContainers>
          </CardContainer>
        </CardGrid>
      </CardSectionContainer>
    </div>
  );
};
