import {
  Clock,
  Coffee,
  CurrencyDollar,
  MapPin,
  Package,
  ShoppingCart,
} from "@phosphor-icons/react";
import { IconContainer } from "./styles";
import {
  IconType,
  IIconsProps,
} from "../../../data/@types/interfaces/IIconsProps";

interface IIconsPagesProps {
  iconsValues: IIconsProps[];
}

const iconMap: Record<IconType, React.ReactElement> = {
  ShoppingCart: <ShoppingCart size={16} weight="fill" />,
  Clock: <Clock size={16} weight="fill" />,
  Coffee: <Coffee size={16} weight="fill" />,
  Package: <Package size={16} weight="fill" />,
  MapPin: <MapPin size={16} weight="fill" />,
  CurrencyDollar: <CurrencyDollar size={16} />,
};

export const IconsPages = ({ iconsValues }: IIconsPagesProps) => {
  return (
    <>
      {iconsValues.map((icon) => {
        return (
          <div key={icon.iconType} className="icons-boxes">
            <IconContainer $colorIcon={icon.colorIcon}>
              {iconMap[icon.iconType]}
            </IconContainer>
            <div>
              <p>{icon.text}</p>
              {icon.aditionalInfo && (
                <p className="icon-text-aditional">{icon.aditionalInfo}</p>
              )}
            </div>
          </div>
        );
      })}
    </>
  );
};
