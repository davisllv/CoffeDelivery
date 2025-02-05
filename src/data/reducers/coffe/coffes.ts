/* eslint-disable @typescript-eslint/no-explicit-any */
import { produce } from "immer";
import { IMockData } from "../../../assets/mock/coffeMockedShop";
import { ActionTypesEnum } from "./actions";

interface ICoffesStates {
  coffees: IMockData[];
  selectedCoffeId: number;
}

interface ICoffesAction {
  type: ActionTypesEnum;
  payload: any;
}

export function CoffeReducers(state: ICoffesStates, action: ICoffesAction) {
  switch (action.type) {
    case ActionTypesEnum.INCREMENT_COFFEE_AMOUNT: {
      const findedIndex = state.coffees.findIndex(
        (coffe) => coffe.id === action.payload.coffeId
      );

      if (findedIndex < 0) return state;
      return produce(state, (draft) => {
        draft.coffees[findedIndex].quantity++;
      });
    }

    case ActionTypesEnum.DECREMENT_COFFE_AMOUNT: {
      const findedIndex = state.coffees.findIndex(
        (coffe) => coffe.id === action.payload.coffeId
      );

      if (findedIndex < 0) return state;
      return produce(state, (draft) => {
        if (draft.coffees[findedIndex].quantity <= 1) return;
        draft.coffees[findedIndex].quantity--;
      });
    }

    default:
      return state;
  }
}
