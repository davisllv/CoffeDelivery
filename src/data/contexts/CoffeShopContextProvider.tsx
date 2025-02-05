import { ReactNode, useReducer } from "react";
import { IMockData, MockData } from "../../assets/mock/coffeMockedShop";
import { CoffeReducers } from "../reducers/coffe/coffes";
import {
  decremmentCoffeAmountAction,
  incremmentCoffeAmountAction,
} from "../reducers/coffe/actions";
import { CoffeContext } from "./CoffeShopContext";
import { ShoppingCartReducers } from "../reducers/shoppingCart/shoppingCart";
import { addCoffeToCartAction } from "../reducers/shoppingCart/actionts";

interface ICoffeContextProviderProps {
  children: ReactNode;
}

export function CoffeContextProvider({ children }: ICoffeContextProviderProps) {
  const [{ coffees }, dispatch] = useReducer(CoffeReducers, {
    coffees: MockData,
    selectedCoffeId: 0,
  });

  const [{ shoppingCartCoffes, totalAmount }, dispatchSoppingCart] = useReducer(
    ShoppingCartReducers,
    {
      shoppingCartCoffes: [],
      totalPrice: 0,
      totalAmount: 0,
      coffeId: 0,
    }
  );

  function incremmentCoffeAmount(coffeId: number) {
    dispatch(incremmentCoffeAmountAction(coffeId));
  }

  function decrementCoffeAmount(coffeId: number) {
    dispatch(decremmentCoffeAmountAction(coffeId));
  }

  function addCoffeeToCart(coffe: IMockData) {
    dispatchSoppingCart(addCoffeToCartAction(coffe));
  }

  return (
    <CoffeContext.Provider
      value={{
        coffees,
        incremmentCoffeAmount,
        decrementCoffeAmount,

        shoppingCartCoffes,
        coffeTotalAmount: totalAmount,
        addCoffeeToCart,
      }}
    >
      {children}
    </CoffeContext.Provider>
  );
}
