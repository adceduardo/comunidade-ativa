import * as yup from "yup";

export const AdValidateSchema = yup.object().shape({
  title: yup.string().trim().required("Informe o título do serviço"),
  price: yup
    .number()
    .transform((value, originalValue) => {
      if (
        originalValue === "" ||
        originalValue === null ||
        originalValue === undefined
      ) {
        return undefined;
      }

      const cleaned = String(originalValue).trim().replace(",", ".");
      if (cleaned === "") return undefined;

      const parsed = Number(cleaned);

      return Number.isNaN(parsed) ? NaN : parsed;
    })
    .typeError("Digite um número válido")
    .integer("O valor em créditos deve ser um número inteiro")
    .min(0, "O valor não pode ser negativo"),
  location: yup.string().trim().required("Informe a localização"),
  description: yup.string().trim(),
});
