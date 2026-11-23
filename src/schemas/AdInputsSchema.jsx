 export const AdInputsSchema = [
    {
      name: "title",
      type: "text",
      label: "Título do serviço",
      placeholder: "Ex: Aula de inglês",
      required: true,
    },
    {
      name: "price",
      type: "text",
      label: "Valor em créditos",
      col: "col-md-6",
    },
    {
      name: "location",
      type: "text",
      label: "Localização",
      placeHolder: "Ex: Rua Getúlio Vargas",
      col: "col-md-6",
      required: true,
    },
    {
      name: "description",
      type: "textarea",
      label: "Descrição",
      placeholder: "Descreva o serviço prestado / solicitado"
    },
  ];
