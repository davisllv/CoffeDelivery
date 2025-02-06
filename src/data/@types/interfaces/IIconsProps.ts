export type IconType =
  | "ShoppingCart"
  | "Clock"
  | "Coffee"
  | "Package"
  | "MapPin"
  | "CurrencyDollar";
type ColorIcon = "yellowDark" | "text" | "yellow" | "purple";

export interface IIconsProps {
  text: string;
  aditionalInfo?: string;
  colorIcon: ColorIcon;
  iconType: IconType;
}
