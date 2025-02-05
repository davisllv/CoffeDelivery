export enum ActionTypesEnum {
  INCREMENT_COFFEE_AMOUNT = "INCREMENT_COFFEE_AMOUNT",
  DECREMENT_COFFE_AMOUNT = "DECREMENT_AMOUNT",
}

export function incremmentCoffeAmountAction(coffeId: number) {
  return {
    type: ActionTypesEnum.INCREMENT_COFFEE_AMOUNT,
    payload: {
      coffeId,
    },
  };
}

export function decremmentCoffeAmountAction(coffeId: number) {
  return {
    type: ActionTypesEnum.DECREMENT_COFFE_AMOUNT,
    payload: {
      coffeId,
    },
  };
}
