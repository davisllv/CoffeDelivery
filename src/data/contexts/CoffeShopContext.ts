import { createContext } from "react";
import { IMockData } from "../../assets/mock/coffeMockedShop";

interface ICoffeContextType {
  coffees: IMockData[];
  incremmentCoffeAmount(id: number): void;
  decrementCoffeAmount(id: number): void;
}

export const CoffeContext = createContext<ICoffeContextType>(
  {} as ICoffeContextType
);
