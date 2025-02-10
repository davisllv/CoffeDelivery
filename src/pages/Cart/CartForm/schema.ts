import * as zod from "zod";

export const shoppingCartCoffesSchema = zod.object({
  id: zod.string().nonempty("ID é obrigatório"),
  coffeId: zod
    .number()
    .int()
    .positive("ID do café deve ser um número positivo"),
  image: zod.string().nonempty("URL da imagem inválida"),
  name: zod.string().nonempty("Nome é obrigatório"),
  quantity: zod
    .number()
    .int()
    .positive("Quantidade deve ser um número positivo"),
  price: zod.number().nonnegative("Preço deve ser um número não negativo"),
});

export const newCartOrderDetailsFormSchema = zod.object({
  zipCode: zod
    .string()
    .min(8, "CEP deve ter 8 dígitos")
    .max(9, "CEP não pode ter mais de 8 dígitos")
    .regex(/^\d{5}-?\d{3}$/, "CEP deve estar no formato XXXXX-XXX ou XXXXXXXX"),
  complement: zod.string().optional(),
  houseNumber: zod.string(),
  neighborhood: zod.string().min(1, "Informe um bairro"),
  street: zod.string().min(1, "Informe uma rua"),
  state: zod
    .string()
    .min(2, "Sigla do estado inválida. Use uma sigla válida do Brasil."),
  city: zod.string().min(1, "Informe uma cidade"),
  shoppingCartCoffes: zod
    .array(shoppingCartCoffesSchema)
    .min(1, "Você não adicionou nenhum café ao seu pedido."),
  paymentMethod: zod.string().min(1, "Selecione um tipo de pagamento"),
});

export type NewShoppingCartDetailsFormData = zod.infer<
  typeof shoppingCartCoffesSchema
>;

export type NewOrderDetailsFormData = zod.infer<
  typeof newCartOrderDetailsFormSchema
>;
