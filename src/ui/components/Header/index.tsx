import { MapPin, ShoppingCart } from "@phosphor-icons/react";
import CoffeLogo from "../../../assets/coffe-logo.svg";
import { HeaderButtons, HeaderContainer } from "./styles";
import { NavLink } from "react-router-dom";
export const Header = () => {
  return (
    <HeaderContainer>
      <img src={CoffeLogo} />
      <HeaderButtons>
        <span>
          <MapPin size={22} weight="fill" />
          Caxias do Sul - RS
        </span>

        <NavLink to="/cart" title="Shopping Cart">
          <ShoppingCart size={22} weight="fill" />
        </NavLink>
      </HeaderButtons>
    </HeaderContainer>
  );
};
