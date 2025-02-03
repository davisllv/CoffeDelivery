import { Clock, Coffee, Package, ShoppingCart } from "@phosphor-icons/react";
import CoffeImagge from "../../assets/coffe-delivery-image.svg";
import {
  ContainerHome,
  IconContainer,
  IconsContainer,
  ImageContainer,
  MainContainerHome,
  TextsContainer,
} from "./styles";

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

        <IconsContainer>
          <p>
            <IconContainer colorIcon={"yellowDark"}>
              <ShoppingCart size={16} weight="fill" />
            </IconContainer>
            <span>Compra simples e segura</span>
          </p>
          <p>
            <IconContainer colorIcon={"text"}>
              <Package size={16} weight="fill" />
            </IconContainer>
            <span>Embalagem mantém o café intacto</span>
          </p>
          <p>
            <IconContainer colorIcon={"yellow"}>
              <Clock size={16} weight="fill" />
            </IconContainer>
            <span>Entrega rápida e rastreada</span>
          </p>
          <p>
            <IconContainer colorIcon={"purple"}>
              <Coffee size={16} weight="fill" />
            </IconContainer>
            <span>O café chega fresquinho até você</span>
          </p>
        </IconsContainer>
      </MainContainerHome>

      <ImageContainer>
        <img src={CoffeImagge} alt="" />
      </ImageContainer>
    </ContainerHome>
  );
};
