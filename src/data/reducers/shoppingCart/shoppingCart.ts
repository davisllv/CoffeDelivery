import { produce } from "immer";
import { IShoppingCartCoffe } from "../../@types/interfaces/IShoppingCartCoffe";
import { ActionTypesEnum } from "./actionts";

interface IShoppingCartStates {
  coffees: IShoppingCartCoffe[];
  totalPrice: number;
  coffeId: number;
}

interface IShoppingCartAction {
  type: ActionTypesEnum;
  payload: any;
}

export function ShoppingCartReducers(
  state: IShoppingCartStates,
  action: IShoppingCartAction
) {
  switch (action.type) {
    case ActionTypesEnum.INSERT_COFFEE_CART:
      {
        const findedIndex = state.coffees.findIndex(
          (value) => value.coffeId === action.payload.coffe.id
        );

        if (findedIndex >= 0) {
          return produce(state, (draft) => {
            draft.coffees[findedIndex].quantity +=
              action.payload.coffe.quantity;
            draft.totalPrice = draft.coffees.reduce(
              (acc, curr) => acc + curr.quantity * curr.value,
              0
            );
          });
        }
      }
      break;
    default:
      return state;
  }
}
