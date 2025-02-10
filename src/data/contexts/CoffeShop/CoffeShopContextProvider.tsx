import { ReactNode, useReducer, useState } from "react";
import { IMockData, MockData } from "../../../assets/mock/coffeMockedShop";
import { CoffeReducers } from "../../reducers/coffe/coffes";
import {
  decremmentCoffeAmountAction,
  incremmentCoffeAmountAction,
} from "../../reducers/coffe/actions";
import { CoffeContext } from "./CoffeShopContext";
import { ShoppingCartReducers } from "../../reducers/shoppingCart/shoppingCart";
import {
  addCoffeToCartAction,
  decrementCoffeToCartAction,
  incrementCoffeToCartAction,
  removeCoffeeFromCartAction,
} from "../../reducers/shoppingCart/actionts";
import { NewOrderDetailsFormData } from "../../../pages/Cart/CartForm/schema";

interface ICoffeContextProviderProps {
  children: ReactNode;
}

export function CoffeContextProvider({ children }: ICoffeContextProviderProps) {
  const [confirmedOrderData, setConfirmedOrderData] =
    useState<NewOrderDetailsFormData>({} as NewOrderDetailsFormData);
  const [{ coffees }, dispatch] = useReducer(CoffeReducers, {
    coffees: MockData,
    selectedCoffeId: 0,
  });

  const [{ shoppingCartCoffes, totalAmount, totalPrice }, dispatchSoppingCart] =
    useReducer(ShoppingCartReducers, {
      shoppingCartCoffes: [],
      totalPrice: 0,
      totalAmount: 0,
      coffeId: 0,
    });

  function incremmentCoffeAmount(coffeId: number) {
    dispatch(incremmentCoffeAmountAction(coffeId));
  }

  function decrementCoffeAmount(coffeId: number) {
    dispatch(decremmentCoffeAmountAction(coffeId));
  }

  /* COFFE CART - SECTION */

  function incrementCoffeToCart(coffeCartId: string) {
    dispatchSoppingCart(incrementCoffeToCartAction(coffeCartId));
  }

  function decrementCoffeToCart(coffeCartId: string) {
    dispatchSoppingCart(decrementCoffeToCartAction(coffeCartId));
  }

  function addCoffeeToCart(coffe: IMockData) {
    dispatchSoppingCart(addCoffeToCartAction(coffe));
  }

  function removeCoffeeFromCart(coffeCartId: string) {
    dispatchSoppingCart(removeCoffeeFromCartAction(coffeCartId));
  }

  return (
    <CoffeContext.Provider
      value={{
        coffees,
        incremmentCoffeAmount,
        decrementCoffeAmount,

        shoppingCartCoffes,
        coffeTotalAmount: totalAmount,
        coffeTotalPrice: totalPrice,
        decrementCoffeToCart,
        incrementCoffeToCart,
        addCoffeeToCart,
        removeCoffeeFromCart,

        confirmedOrderData,
        setConfirmedOrderData: (data: NewOrderDetailsFormData) => {
          setConfirmedOrderData(data);
        },
      }}
    >
      {children}
    </CoffeContext.Provider>
  );
}
