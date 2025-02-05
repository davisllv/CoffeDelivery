import { IconsPages } from "../../../../ui/components/IconsPages";
import { IIconsProps } from "../../../../data/@types/interfaces/IIconsProps";
import { IconsGridColumns } from "../../../../ui/components/IconsPages/styles";

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
  return (
    <IconsGridColumns>
      <IconsPages iconsValues={IconsValues} />
    </IconsGridColumns>
  );
};
