import AmericanCoffee from "../coffes/american-coffe.svg";
import ArabianCoffee from "../coffes/arabian-coffe.svg";
import Cappuccino from "../coffes/cappucino.svg";
import CoffeeWithMilk from "../coffes/coffe-with-milk.svg";
import CubanCoffee from "../coffes/cuban-coffe.svg";
import Espresso from "../coffes/expresso.svg";
import HawaiianCoffee from "../coffes/hawaiian-coffee.svg";
import HotChocolate from "../coffes/hot-chocolate.svg";
import IrishCoffee from "../coffes/irish-coffee.svg";
import Latte from "../coffes/latte.svg";
import Macchiato from "../coffes/macchiato.svg";
import MilkEspresso from "../coffes/milk-expresso.svg";
import MocachinoCoffee from "../coffes/mochaccino-coffee.svg";
import IceCoffee from "../coffes/ice-coffee.svg";

export const MockData = [
  {
    id: 1,
    name: "Arábe",
    description:
      "Café arábico tradicional, conhecido por seu sabor forte e aroma intenso, preparado com grãos finamente moídos.",
    image: ArabianCoffee,
    quantity: 1,
    cold: false,
    hasMilk: false,
    alcoholic: false,
    special: true,
    price: 10.99,
  },
  {
    id: 2,
    name: "Café Cubano",
    description:
      "Café cubano com rum forte e doce, normalmente feito com café expresso e açúcar granulado.",
    image: CubanCoffee,
    quantity: 1,
    cold: true,
    hasMilk: false,
    alcoholic: true,
    special: true,
    price: 13.5,
  },
  {
    id: 3,
    name: "Café Havaiano",
    description:
      "Café havaiano cultivado nas ilhas, famoso por seu sabor suave e notas frutadas.",
    image: HawaiianCoffee,
    quantity: 1,
    cold: false,
    hasMilk: false,
    alcoholic: false,
    special: true,
    price: 12.75,
  },
  {
    id: 4,
    name: "Chocolate Quente",
    description:
      "Chocolate quente cremoso feito com leite quente e cacau em pó, perfeito para um dia frio.",
    image: HotChocolate,
    quantity: 1,
    cold: false,
    hasMilk: true,
    alcoholic: false,
    special: true,
    price: 9.99,
  },
  {
    id: 5,
    name: "Irlandês",
    description:
      "Café irlandês feito com café quente, uísque irlandês, açúcar e uma camada de creme por cima.",
    image: IrishCoffee,
    quantity: 1,
    cold: false,
    hasMilk: true,
    alcoholic: true,
    special: true,
    price: 11.99,
  },
  {
    id: 6,
    name: "Mochaccino",
    description:
      "Um cappuccino com uma dose de chocolate, misturando café expresso, leite vaporizado e calda de chocolate.",
    image: MocachinoCoffee,
    quantity: 1,
    cold: false,
    hasMilk: true,
    alcoholic: false,
    special: false,
    price: 10.75,
  },
  {
    id: 7,
    name: "Tradicional",
    description:
      "Café americano feito com uma dose de expresso e água quente, resultando em um café mais leve.",
    image: AmericanCoffee,
    quantity: 1,
    cold: false,
    hasMilk: false,
    alcoholic: false,
    special: false,
    price: 7.5,
  },
  {
    id: 8,
    name: "Cappuccino",
    description:
      "Café clássico italiano feito com uma dose de expresso, leite vaporizado e espuma de leite.",
    image: Cappuccino,
    quantity: 1,
    cold: false,
    hasMilk: true,
    alcoholic: false,
    special: false,
    price: 9.5,
  },
  {
    id: 9,
    name: "Café com Leite",
    description:
      "Café com leite, uma combinação simples e deliciosa de café expresso e leite quente.",
    image: CoffeeWithMilk,
    quantity: 1,
    cold: false,
    hasMilk: true,
    alcoholic: false,
    special: false,
    price: 8.99,
  },
  {
    id: 10,
    name: "Expresso",
    description:
      "Café expresso concentrado, com um sabor intenso e uma camada de crema por cima.",
    image: Espresso,
    quantity: 1,
    cold: false,
    hasMilk: true,
    alcoholic: false,
    special: false,
    price: 6.75,
  },
  {
    id: 11,
    name: "Café Gelado",
    description:
      "Café gelado, perfeito para dias quentes, feito com café resfriado e gelo.",
    image: IceCoffee,
    quantity: 1,
    cold: true,
    hasMilk: false,
    alcoholic: false,
    special: false,
    price: 8.25,
  },
  {
    id: 12,
    name: "Latte",
    description:
      "Café latte, feito com uma dose de expresso e bastante leite vaporizado, geralmente com uma fina camada de espuma.",
    image: Latte,
    quantity: 1,
    cold: false,
    hasMilk: true,
    alcoholic: false,
    special: false,
    price: 9.0,
  },
  {
    id: 13,
    name: "Macchiato",
    description:
      "Café macchiato, uma dose de expresso marcada com um pouco de leite vaporizado.",
    image: Macchiato,
    quantity: 1,
    cold: false,
    hasMilk: true,
    alcoholic: false,
    special: false,
    price: 8.5,
  },
  {
    id: 14,
    name: "Expresso com Leite",
    description:
      "Expresso com leite, uma mistura equilibrada de café expresso e leite vaporizado.",
    image: MilkEspresso,
    quantity: 1,
    cold: false,
    hasMilk: true,
    alcoholic: false,
    special: false,
    price: 7.99,
  },
];

export interface IMockData {
  id: number;
  name: string;
  description: string;
  image: string;
  quantity: number;
  cold: boolean;
  hasMilk: boolean;
  alcoholic: boolean;
  special: boolean;
  price: number;
}
