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
    nome: "Arábe",
    nomeIngles: "arabian-coffee",
    descricao:
      "Café arábico tradicional, conhecido por seu sabor forte e aroma intenso, preparado com grãos finamente moídos.",
    imagem: ArabianCoffee,
    cold: false,
    hasMilk: false,
    alcoholic: false,
    special: true,
  },
  {
    id: 2,
    nome: "Café Cubano",
    nomeIngles: "cuban-coffee",
    descricao:
      "Café cubano com rum forte e doce, normalmente feito com café expresso e açúcar granulado.",
    imagem: CubanCoffee,
    cold: true,
    hasMilk: false,
    alcoholic: true,
    special: true,
  },
  {
    id: 3,
    nome: "Café Havaiano",
    nomeIngles: "hawaiian-coffee",
    descricao:
      "Café havaiano cultivado nas ilhas, famoso por seu sabor suave e notas frutadas.",
    imagem: HawaiianCoffee,
    cold: false,
    hasMilk: false,
    alcoholic: false,
    special: true,
  },
  {
    id: 4,
    nome: "Chocolate Quente",
    nomeIngles: "hot-chocolate",
    descricao:
      "Chocolate quente cremoso feito com leite quente e cacau em pó, perfeito para um dia frio.",
    imagem: HotChocolate,
    cold: false,
    hasMilk: true,
    alcoholic: false,
    special: true,
  },
  {
    id: 5,
    nome: "Irlandês",
    nomeIngles: "irish-coffee",
    descricao:
      "Café irlandês feito com café quente, uísque irlandês, açúcar e uma camada de creme por cima.",
    imagem: IrishCoffee,
    cold: false,
    hasMilk: true,
    alcoholic: true,
    special: true,
  },
  {
    id: 6,
    nome: "Mochaccino",
    nomeIngles: "mochaccino-coffee",
    descricao:
      "Um cappuccino com uma dose de chocolate, misturando café expresso, leite vaporizado e calda de chocolate.",
    imagem: MocachinoCoffee,
    cold: false,
    hasMilk: true,
    alcoholic: false,
    special: false,
  },
  {
    id: 7,
    nome: "Tradicional",
    nomeIngles: "american-coffee",
    descricao:
      "Café americano feito com uma dose de expresso e água quente, resultando em um café mais leve.",
    imagem: AmericanCoffee,
    cold: false,
    hasMilk: false,
    alcoholic: false,
    special: false,
  },
  {
    id: 8,
    nome: "Cappuccino",
    nomeIngles: "cappuccino",
    descricao:
      "Café clássico italiano feito com uma dose de expresso, leite vaporizado e espuma de leite.",
    imagem: Cappuccino,
    cold: false,
    hasMilk: true,
    alcoholic: false,
    special: false,
  },
  {
    id: 9,
    nome: "Café com Leite",
    nomeIngles: "coffee-with-milk",
    descricao:
      "Café com leite, uma combinação simples e deliciosa de café expresso e leite quente.",
    imagem: CoffeeWithMilk,
    cold: false,
    hasMilk: true,
    alcoholic: false,
    special: false,
  },
  {
    id: 10,
    nome: "Expresso",
    nomeIngles: "expresso",
    descricao:
      "Café expresso concentrado, com um sabor intenso e uma camada de crema por cima.",
    imagem: Espresso,
    cold: false,
    hasMilk: true,
    alcoholic: false,
    special: false,
  },
  {
    id: 11,
    nome: "Café Gelado",
    nomeIngles: "ice-coffee",
    descricao:
      "Café gelado, perfeito para dias quentes, feito com café resfriado e gelo.",
    imagem: IceCoffee,
    cold: true,
    hasMilk: false,
    alcoholic: false,
    special: false,
  },
  {
    id: 12,
    nome: "Latte",
    nomeIngles: "latte",
    descricao:
      "Café latte, feito com uma dose de expresso e bastante leite vaporizado, geralmente com uma fina camada de espuma.",
    imagem: Latte,
    cold: false,
    hasMilk: true,
    alcoholic: false,
    special: false,
  },
  {
    id: 13,
    nome: "Macchiato",
    nomeIngles: "macchiato",
    descricao:
      "Café macchiato, uma dose de expresso marcada com um pouco de leite vaporizado.",
    imagem: Macchiato,
    cold: false,
    hasMilk: true,
    alcoholic: false,
    special: false,
  },
  {
    id: 14,
    nome: "Expresso com Leite",
    nomeIngles: "milk-expresso",
    descricao:
      "Expresso com leite, uma mistura equilibrada de café expresso e leite vaporizado.",
    imagem: MilkEspresso,
    cold: false,
    hasMilk: true,
    alcoholic: false,
    special: false,
  },
];
export interface IMockData {
  id: number;
  nome: string;
  nomeIngles: string;
  descricao: string;
  imagem: string;
  cold: boolean;
  hasMilk: boolean;
  alcoholic: boolean;
  special: boolean;
}
