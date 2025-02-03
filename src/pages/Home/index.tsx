import CoffeImagge from "../../assets/coffe-delivery-image.svg";
import {
  CardSectionContainer,
  ContainerHome,
  ImageContainer,
  MainContainerHome,
  TextsContainer,
} from "./styles";
import { HomeIcons } from "./Components/Icons";
import { HomeCards } from "./Components/Cards";

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
        <HomeCards />
      </CardSectionContainer>
    </div>
  );
};
