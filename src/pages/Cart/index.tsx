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
import { useLoading } from "../../data/contexts/LoaderBackdrop/LoaderBackdropContext";
import { useNavigate } from "react-router-dom";
import { CartForm } from "./CartForm";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  newCartOrderDetailsFormSchema,
  NewOrderDetailsFormData,
} from "./CartForm/schema";

export const Cart = () => {
  const {
    shoppingCartCoffes,
    coffeTotalPrice,
    incrementCoffeToCart,
    decrementCoffeToCart,
    removeCoffeeFromCart,
  } = useContext(CoffeContext);
  const { setLoading } = useLoading();

  const navigate = useNavigate();
  const newOrderForm = useForm<NewOrderDetailsFormData>({
    resolver: zodResolver(newCartOrderDetailsFormSchema),
    defaultValues: {
      city: "",
      complement: "",
      houseNumber: undefined,
      neighborhood: "",
      state: "",
      street: "",
      zipCode: "",
    },
  });

  const handleSubmitOrder = async () => {
    setLoading(true);
    try {
      // Simulate a delay for the payment process
      // await new Promise((resolve) => setTimeout(resolve, 3000));
      navigate("/confirmed-order");
    } catch (error) {
      // Handle the payment error
      console.error("Payment failed:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <MainContainer>
      <CardContainer>
        <h2>Complete seu Pedido</h2>
        <form className="form-container">
          <FormProvider {...newOrderForm}>
            <CartForm />
          </FormProvider>
        </form>
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
            <ValuesCoffeCart description="Entrega" value={3.5} />

            <ValuesCoffeCart
              description="Total"
              value={coffeTotalPrice}
              isTotal
            />
          </CoffeValuesMain>

          <button
            className="coffe-confirm-button"
            onClick={() => handleSubmitOrder()}
          >
            Confirmar Pedido
          </button>
        </ListShopContainer>
      </CardContainer>
    </MainContainer>
  );
};
