import { createContext } from "react";
import { IMockData } from "../../../assets/mock/coffeMockedShop";
import { NewShoppingCartDetailsFormData } from "../../../pages/Cart/CartForm/schema";

interface ICoffeContextType {
  coffees: IMockData[];
  incremmentCoffeAmount(id: number): void;
  decrementCoffeAmount(id: number): void;

  shoppingCartCoffes: NewShoppingCartDetailsFormData[];
  coffeTotalAmount: number;
  coffeTotalPrice: number;
  addCoffeeToCart(coffe: IMockData): void;
  removeCoffeeFromCart(coffeCartId: string): void;

  incrementCoffeToCart(coffeCartId: string): void;
  decrementCoffeToCart(coffeCartId: string): void;
}

export const CoffeContext = createContext<ICoffeContextType>(
  {} as ICoffeContextType
);
