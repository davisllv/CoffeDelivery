import { IMockData } from "../../../assets/mock/coffeMockedShop";

export enum ActionTypesEnum {
  INSERT_COFFEE_CART = "INSERT_COFFEE_CART",
  UPDATE_COFFE_CART = "UPDATE_COFFE_CART",
}

export function addCoffeToCartAction(coffe: IMockData) {
  return {
    type: ActionTypesEnum.INSERT_COFFEE_CART,
    payload: {
      coffe,
    },
  };
}
