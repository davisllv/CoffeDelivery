import CoffeDeliveringImagge from "../../assets/coffe-delivering.png";
import { MainContainer } from "./styles";
import { ConfirmedOrdersIcons } from "./Icons";

export const ConfirmedOrder = () => {
  return (
    <MainContainer>
      <div className="confirmed-order-container">
        <div className="title-container">
          <h1>Uhu ! Pedido Confirmado</h1>
          <p>Agora é só aguardar que logo o café chegará até você</p>
        </div>

        <div className="confirmed-order-icons-container">
          <ConfirmedOrdersIcons />
        </div>
      </div>
      <div className="confirmed-order-image-container">
        <img src={CoffeDeliveringImagge} alt="Office Boy" />
      </div>
    </MainContainer>
  );
};
