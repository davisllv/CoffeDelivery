import { useContext, useEffect, useState } from "react";
import { IIconsProps } from "../../../data/@types/interfaces/IIconsProps";
import { IconsPages } from "../../../ui/components/IconsPages";
import { IconsGridColumns } from "../../../ui/components/IconsPages/styles";
import { CoffeContext } from "../../../data/contexts/CoffeShop/CoffeShopContext";

function getPaymentType(paymentMethod: string): string {
  switch (paymentMethod) {
    case "creditCard":
      return "Cartão de Crédito";
    case "debitCard":
      return "Cartão de Débito";
    case "money":
      return "Dinheiro";
    default:
      return "Pagamento na entrega";
  }
}

export const ConfirmedOrdersIcons = () => {
  const [iconsValues, setIconsValues] = useState<IIconsProps[]>([]);
  const { confirmedOrderData } = useContext(CoffeContext);

  useEffect(() => {
    setIconsValues([
      {
        text: (
          <p>
            Entrega em{" "}
            <strong>
              {confirmedOrderData.street}, {confirmedOrderData.houseNumber}{" "}
            </strong>{" "}
            {confirmedOrderData.neighborhood} - {confirmedOrderData.city},
            {confirmedOrderData.state}
          </p>
        ),
        colorIcon: "purple",
        iconType: "MapPin",
      },
      {
        text: <p>Previsão de entrega</p>,
        aditionalInfo: "20 min - 30 min",
        colorIcon: "yellow",
        iconType: "Clock",
      },
      {
        text: <p>Pagamento na entrega</p>,
        aditionalInfo: getPaymentType(confirmedOrderData.paymentMethod),
        colorIcon: "yellowDark",
        iconType: "CurrencyDollar",
      },
    ]);
  }, [confirmedOrderData]);
  return (
    <IconsGridColumns $columns={1}>
      <IconsPages iconsValues={iconsValues} />
    </IconsGridColumns>
  );
};
