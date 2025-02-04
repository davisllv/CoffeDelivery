import { MapPin, ShoppingCart } from "@phosphor-icons/react";
import CoffeLogo from "../../../assets/coffe-logo.svg";
import { HeaderButtons, HeaderContainer } from "./styles";
import { NavLink } from "react-router-dom";
import { useTomTomGeolocation } from "../../../data/hooks/useGeolocalization";
export const Header = () => {
  const { city, state } = useTomTomGeolocation();
  return (
    <HeaderContainer>
      <NavLink to="/">
        <img src={CoffeLogo} />
      </NavLink>
      <HeaderButtons>
        <span>
          <MapPin size={22} weight="fill" />
          {city} - {state}
        </span>

        <NavLink to="/cart" title="Shopping Cart">
          <div className="shopping-cart-link">
            <span className="shopping-cart-amount">1</span>
            <ShoppingCart size={22} weight="fill" />
          </div>
        </NavLink>
      </HeaderButtons>
    </HeaderContainer>
  );
};
