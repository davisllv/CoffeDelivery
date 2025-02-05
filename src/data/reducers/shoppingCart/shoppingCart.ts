/* eslint-disable @typescript-eslint/no-explicit-any */
import { produce } from "immer";
import { IShoppingCartCoffes } from "../../@types/interfaces/IShoppingCartCoffes";
import { ActionTypesEnum } from "./actionts";

interface IShoppingCartStates {
  shoppingCartCoffes: IShoppingCartCoffes[];
  totalPrice: number;
  totalAmount: number;
  coffeId: number;
}

export function ShoppingCartReducers(state: IShoppingCartStates, action: any) {
  function calculateTotalPrice(coffees: IShoppingCartCoffes[]): number {
    return coffees.reduce((acc, curr) => acc + curr.quantity * curr.price, 0);
  }

  function calculateTotalAmount(coffes: IShoppingCartCoffes[]): number {
    return coffes.reduce((acc, curr) => acc + curr.quantity, 0);
  }

  switch (action.type) {
    case ActionTypesEnum.INSERT_COFFEE_CART: {
      const findedIndex = state.shoppingCartCoffes.findIndex(
        (value) => value.coffeId === action.payload.coffe.id
      );

      if (findedIndex >= 0) {
        return produce(state, (draft) => {
          draft.shoppingCartCoffes[findedIndex].quantity +=
            action.payload.coffe.quantity;
          draft.totalPrice = calculateTotalPrice(draft.shoppingCartCoffes);
          draft.totalAmount = calculateTotalAmount(draft.shoppingCartCoffes);
        });
      }
      const newCoffe: IShoppingCartCoffes = {
        ...action.payload.coffe,
        id: new Date().getTime().toString(),
        coffeId: action.payload.coffe.id,
      };
      return produce(state, (draft) => {
        draft.shoppingCartCoffes.push(newCoffe);
        draft.totalPrice = calculateTotalPrice(draft.shoppingCartCoffes);
        draft.totalAmount = calculateTotalAmount(draft.shoppingCartCoffes);
      });
    }
    case ActionTypesEnum.INCREMENT_COFFE_CART: {
      const findedIndex = state.shoppingCartCoffes.findIndex(
        (coffe) => coffe.id === action.payload.coffeCartId
      );

      return produce(state, (draft) => {
        draft.shoppingCartCoffes[findedIndex].quantity++;
        draft.totalPrice = calculateTotalPrice(draft.shoppingCartCoffes);
        draft.totalAmount = calculateTotalAmount(draft.shoppingCartCoffes);
      });
    }
    case ActionTypesEnum.DECREMENT_COFFE_CART: {
      const findedIndex = state.shoppingCartCoffes.findIndex(
        (coffe) => coffe.id === action.payload.coffeCartId
      );

      return produce(state, (draft) => {
        if (draft.shoppingCartCoffes[findedIndex].quantity <= 1) return;
        draft.shoppingCartCoffes[findedIndex].quantity--;
        draft.totalPrice = calculateTotalPrice(draft.shoppingCartCoffes);
        draft.totalAmount = calculateTotalAmount(draft.shoppingCartCoffes);
      });
    }
    default:
      return state;
  }
}
