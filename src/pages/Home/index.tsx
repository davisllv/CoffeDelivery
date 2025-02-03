import CoffeImagge from "../../assets/coffe-delivery-image.svg";
import {
  ContainerHome,
  ImageContainer,
  MainContainerHome,
  TextsContainer,
} from "./styles";
import { HomeIcons } from "./Components/Icons";

export const Home = () => {
  return (
    <ContainerHome>
      <MainContainerHome>
        <TextsContainer>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <span>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </span>
        </TextsContainer>

        <HomeIcons />
      </MainContainerHome>

      <ImageContainer>
        <img src={CoffeImagge} alt="" />
      </ImageContainer>
    </ContainerHome>
  );
};
