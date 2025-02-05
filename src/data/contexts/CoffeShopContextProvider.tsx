import { ReactNode, useReducer } from "react";
import { MockData } from "../../assets/mock/coffeMockedShop";
import { CoffeReducers } from "../reducers/coffe/coffes";
import {
  decremmentCoffeAmountAction,
  incremmentCoffeAmountAction,
} from "../reducers/coffe/actions";
import { CoffeContext } from "./CoffeShopContext";

interface ICoffeContextProviderProps {
  children: ReactNode;
}

export function CoffeContextProvider({ children }: ICoffeContextProviderProps) {
  const [{ coffees }, dispatch] = useReducer(CoffeReducers, {
    coffees: MockData,
    selectedCoffeId: 0,
  });

  function incremmentCoffeAmount(coffeId: number) {
    dispatch(incremmentCoffeAmountAction(coffeId));
  }

  function decrementCoffeAmount(coffeId: number) {
    dispatch(decremmentCoffeAmountAction(coffeId));
  }

  return (
    <CoffeContext.Provider
      value={{ coffees, incremmentCoffeAmount, decrementCoffeAmount }}
    >
      {children}
    </CoffeContext.Provider>
  );
}
