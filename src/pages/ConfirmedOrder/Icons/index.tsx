import { IIconsProps } from "../../../data/@types/interfaces/IIconsProps";
import { IconsPages } from "../../../ui/components/IconsPages";
import { IconsGridColumns } from "../../../ui/components/IconsPages/styles";

const IconsValues: IIconsProps[] = [
  {
    text: "Entrega em Rua João Daniel Martinelli, 102 Farrapos - Porto Alegre, RS",
    colorIcon: "purple",
    iconType: "MapPin",
  },
  {
    text: "Previsão de entrega",
    aditionalInfo: "20 min - 30 min",
    colorIcon: "yellow",
    iconType: "Clock",
  },
  {
    text: "Pagamento na entrega",
    aditionalInfo: "Cartão de Crédito",
    colorIcon: "yellowDark",
    iconType: "CurrencyDollar",
  },
];

export const ConfirmedOrdersIcons = () => {
  return (
    <IconsGridColumns $columns={1}>
      <IconsPages iconsValues={IconsValues} />
    </IconsGridColumns>
  );
};
