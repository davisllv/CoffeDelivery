import { createContext } from "react";
import { IMockData } from "../../assets/mock/coffeMockedShop";
import { IShoppingCartCoffes } from "../@types/interfaces/IShoppingCartCoffes";

interface ICoffeContextType {
  coffees: IMockData[];
  incremmentCoffeAmount(id: number): void;
  decrementCoffeAmount(id: number): void;

  shoppingCartCoffes: IShoppingCartCoffes[];
  coffeTotalAmount: number;
  addCoffeeToCart(coffe: IMockData): void;
}

export const CoffeContext = createContext<ICoffeContextType>(
  {} as ICoffeContextType
);
