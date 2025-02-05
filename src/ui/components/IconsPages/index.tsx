import { Clock, Coffee, Package, ShoppingCart } from "@phosphor-icons/react";
import { IconContainer } from "./styles";
import { IIconsProps } from "../../../data/@types/interfaces/IIconsProps";

interface IIconsPagesProps {
  iconsValues: IIconsProps[];
}

export const IconsPages = ({ iconsValues }: IIconsPagesProps) => {
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
    <>
      {iconsValues.map((icon) => {
        return (
          <div key={icon.iconType} className="icons-boxes">
            <IconContainer $colorIcon={icon.colorIcon}>
              {getIcon(icon.iconType)}
            </IconContainer>
            <p>{icon.text}</p>
          </div>
        );
      })}
    </>
  );
};
