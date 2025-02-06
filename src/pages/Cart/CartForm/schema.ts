import * as zod from "zod";

export const newCartOrderDetailsFormSchema = zod.object({
  zipCode: zod
    .string()
    .min(8, "CEP deve ter 8 dígitos")
    .max(9, "CEP não pode ter mais de 8 dígitos")
    .regex(/^\d{5}-?\d{3}$/, "CEP deve estar no formato XXXXX-XXX ou XXXXXXXX"),
  houseNumber: zod.number(),
  complement: zod.string().optional(),
  neighborhood: zod.string().min(1, "Informe um bairro"),
  street: zod.string().min(1, "Informe uma rua"),
  state: zod
    .string()
    .min(2, "Sigla do estado inválida. Use uma sigla válida do Brasil."),
  city: zod.string().min(1, "Informe uma cidade"),
});

export type NewOrderDetailsFormData = zod.infer<
  typeof newCartOrderDetailsFormSchema
>;
