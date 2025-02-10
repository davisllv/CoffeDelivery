import { IMockData } from "../../../assets/mock/coffeMockedShop";

export enum ActionTypesEnum {
  INSERT_COFFEE_CART = "INSERT_COFFEE_CART",
  REMOVE_COFFE_CART = "REMOVE_COFFE_CART",
  INCREMENT_COFFE_CART = "INCREMENT_COFFE_CART",
  DECREMENT_COFFE_CART = "DECREMENT_COFFE_CART",
  INCREASE_TOTAL_PRICE = "INCREASE_TOTAL_PRICE",
  RESET_COFFE_CART = "RESET_COFFE_CART",
}

export function addCoffeToCartAction(coffe: IMockData) {
  return {
    type: ActionTypesEnum.INSERT_COFFEE_CART,
    payload: {
      coffe,
    },
  };
}

export function incrementCoffeToCartAction(coffeCartId: string) {
  return {
    type: ActionTypesEnum.INCREMENT_COFFE_CART,
    payload: {
      coffeCartId,
    },
  };
}

export function decrementCoffeToCartAction(coffeCartId: string) {
  return {
    type: ActionTypesEnum.DECREMENT_COFFE_CART,
    payload: {
      coffeCartId,
    },
  };
}

export function removeCoffeeFromCartAction(coffeCartId: string) {
  return {
    type: ActionTypesEnum.REMOVE_COFFE_CART,
    payload: {
      coffeCartId,
    },
  };
}

export function recalculateTotalPriceAction(price: number) {
  return {
    type: ActionTypesEnum.INCREASE_TOTAL_PRICE,
    payload: {
      price,
    },
  };
}

export function resetCoffesFromCartAction() {
  return {
    type: ActionTypesEnum.RESET_COFFE_CART,
  };
}
