import { Trash } from "@phosphor-icons/react";
import {
  CardContainer,
  MainContainer,
  ListShopContainer,
  CoffeValuesMain,
} from "./styles";
import { ButtonCountDown } from "../../ui/components/ButtonCountDown";
import { useContext } from "react";
import { CoffeContext } from "../../data/contexts/CoffeShop/CoffeShopContext";
import { ValuesCoffeCart } from "./Values";
import { Button } from "../../ui/components/Button";
import { CartForm } from "./CartForm";
import { FormProvider, useForm } from "react-hook-form";
import {
  newCartOrderDetailsFormSchema,
  NewOrderDetailsFormData,
} from "./CartForm/schema";
import { ZodError } from "zod";
import { getErrorValidation } from "../../data/services/getErrorValidations";
import { useLoaderBackdrop } from "../../data/hooks/useLoaderBackdrop";
import { useNavigate } from "react-router-dom";

export const Cart = () => {
  const { setLoading } = useLoaderBackdrop();
  const navigate = useNavigate();
  const {
    shoppingCartCoffes,
    coffeTotalPrice,
    incrementCoffeToCart,
    decrementCoffeToCart,
    removeCoffeeFromCart,
    setConfirmedOrderData,
    shippingPrice,
    resetCoffesFromCart,
  } = useContext(CoffeContext);

  const newOrderForm = useForm<NewOrderDetailsFormData>({
    defaultValues: {
      city: "",
      complement: "",
      houseNumber: "0",
      neighborhood: "",
      state: "",
      street: "",
      zipCode: "",
    },
  });
  const { handleSubmit, reset } = newOrderForm;

  const handleSubmitOrder = async (data: NewOrderDetailsFormData) => {
    setLoading(true);
    try {
      data.shoppingCartCoffes = shoppingCartCoffes;
      data.shippingPrice = shippingPrice;

      newCartOrderDetailsFormSchema.parse(data);

      setConfirmedOrderData(data);

      await new Promise((resolve) => setTimeout(resolve, 5000));
      navigate("/confirmed-order");

      reset();
      resetCoffesFromCart();
    } catch (error) {
      if (error instanceof ZodError) getErrorValidation(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <MainContainer>
      <form action="" onSubmit={handleSubmit(handleSubmitOrder)}>
        <CardContainer>
          <h2>Complete seu Pedido</h2>
          <FormProvider {...newOrderForm}>
            <CartForm />
          </FormProvider>
        </CardContainer>

        <CardContainer>
          <h2>Cafés selecionados</h2>
          <ListShopContainer>
            {shoppingCartCoffes.map((coffe) => {
              return (
                <div className="coffe-item">
                  <div className="coffe-info-container">
                    <div className="coffe-description">
                      <img src={coffe.image} />

                      <div className="coffe-information">
                        <p>{coffe.name}</p>
                        <div className="coffe-actions-buttons">
                          <ButtonCountDown
                            count={coffe.quantity}
                            onDecrement={() => decrementCoffeToCart(coffe.id)}
                            onIncrement={() => incrementCoffeToCart(coffe.id)}
                          />

                          <Button
                            type="button"
                            onClick={() => removeCoffeeFromCart(coffe.id)}
                            icon={<Trash size={16} />}
                          >
                            Remover
                          </Button>
                        </div>
                      </div>
                    </div>

                    <p className="coffe-values">
                      R${" "}
                      {coffe.price.toLocaleString("pt-br", {
                        minimumFractionDigits: 0,
                      })}
                    </p>
                  </div>
                </div>
              );
            })}

            <CoffeValuesMain>
              <ValuesCoffeCart
                description="Total dos Itens"
                value={coffeTotalPrice}
              />
              {shippingPrice > 0 && (
                <ValuesCoffeCart description="Entrega" value={shippingPrice} />
              )}

              <ValuesCoffeCart
                description="Total"
                value={coffeTotalPrice}
                isTotal
              />
            </CoffeValuesMain>

            <button type="submit" className="coffe-confirm-button">
              Confirmar Pedido
            </button>
          </ListShopContainer>
        </CardContainer>
      </form>
    </MainContainer>
  );
};
