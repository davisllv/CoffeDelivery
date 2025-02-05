import { CurrencyDollar, MapPin, Timer } from "@phosphor-icons/react";
import CoffeDeliveringImagge from "../../assets/coffe-delivering.png";

export const ConfirmedOrder = () => {
  return (
    <div>
      <main>
        <div>
          <h1>Uhu ! Pedido Confirmado</h1>
          <p>Agora é só aguardar que logo o café chegará até você</p>
        </div>

        <div>
          <div>
            <MapPin size={16} weight="fill" />
            <div>
              <p>Entrega em Rua João Daniele Martinele</p>
              <span>Farrapos - Porto Alegre, RS</span>
            </div>
          </div>
          <div>
            <Timer size={16} weight="fill" />
            <div>
              <p>Previsão de entrega</p>
              <span>20 min - 30 min </span>
            </div>
          </div>
          <div>
            <CurrencyDollar size={16} weight="fill" />
            <div>
              <p>Pagamento na entrega</p>
              <span>Cartão de Crédito</span>
            </div>
          </div>
        </div>

        <img src={CoffeDeliveringImagge} alt="Office Boy" />
      </main>
    </div>
  );
};
