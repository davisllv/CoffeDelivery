import { Clock, Coffee, Package, ShoppingCart } from "@phosphor-icons/react";
import { IconContainer, IconsContainer } from "./styles";

interface IIconsProps {
  text: string;
  colorIcon: "yellowDark" | "text" | "yellow" | "purple";
  iconType: "ShoppingCart" | "Clock" | "Coffee" | "Package";
}

const IconsValues: IIconsProps[] = [
  {
    text: "Compra simples e segura",
    colorIcon: "yellowDark",
    iconType: "ShoppingCart",
  },
  {
    text: "Embalagem mantém o café intacto",
    colorIcon: "text",
    iconType: "Package",
  },
  {
    text: "Entrega rápida e rastreada",
    colorIcon: "yellow",
    iconType: "Clock",
  },
  {
    text: "O café chega fresquinho até você",
    colorIcon: "purple",
    iconType: "Coffee",
  },
];

export const HomeIcons = () => {
  function getIcon(iconName: string): React.ReactElement {
    switch (iconName) {
      case "ShoppingCart":
        return <ShoppingCart size={16} weight="fill" />;
      case "Clock":
        return <Clock size={16} weight="fill" />;
      case "Coffee":
        return <Coffee size={16} weight="fill" />;
      case "Package":
        return <Package size={16} weight="fill" />;
      default:
        return <ShoppingCart size={16} weight="fill" />;
    }
  }
  return (
    <IconsContainer>
      {IconsValues.map((icon) => {
        return (
          <p>
            <IconContainer colorIcon={icon.colorIcon}>
              {getIcon(icon.iconType)}
            </IconContainer>
            <span>{icon.text}</span>
          </p>
        );
      })}
    </IconsContainer>
  );
};
