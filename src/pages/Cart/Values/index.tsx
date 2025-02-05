import { CoffeValuesContainer } from "./styles";

interface IValuesCoffeCartProps {
  description: string;
  value: number;
  isTotal?: boolean;
}
export const ValuesCoffeCart = ({
  description,
  value,
  isTotal = false,
}: IValuesCoffeCartProps) => {
  return (
    <CoffeValuesContainer>
      {isTotal ? (
        <h3>{description}</h3>
      ) : (
        <p className="value-description">{description}</p>
      )}
      <span>
        {value.toLocaleString("pt-br", { style: "currency", currency: "BRL" })}
      </span>
    </CoffeValuesContainer>
  );
};
