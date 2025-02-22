import { createContext } from "react";
import { IMockData } from "../../../assets/mock/coffeMockedShop";
import {
  NewOrderDetailsFormData,
  NewShoppingCartDetailsFormData,
} from "../../../pages/Cart/CartForm/schema";

interface ICoffeContextType {
  coffees: IMockData[];
  incremmentCoffeAmount(id: number): void;
  decrementCoffeAmount(id: number): void;
  resetCoffesAmount(id: number): void;

  shoppingCartCoffes: NewShoppingCartDetailsFormData[];
  coffeTotalAmount: number;
  coffeTotalPrice: number;
  addCoffeeToCart(coffe: IMockData): void;
  removeCoffeeFromCart(coffeCartId: string): void;
  resetCoffesFromCart(): void;

  incrementCoffeToCart(coffeCartId: string): void;
  decrementCoffeToCart(coffeCartId: string): void;

  confirmedOrderData: NewOrderDetailsFormData;
  setConfirmedOrderData(data: NewOrderDetailsFormData): void;

  shippingPrice: number;
  setShippingPrice(shippingPrice: number): void;

  shippingTime: number;
  setShippingTime(shippingTime: number): void;
}

export const CoffeContext = createContext<ICoffeContextType>(
  {} as ICoffeContextType
);
