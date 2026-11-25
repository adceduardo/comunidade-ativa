 export const AdInputsSchema = [
    {
      name: "title",
      type: "text",
      label: "Título do serviço",
      placeholder: "Ex: Aula de inglês",
      required: true,
      col: "col-md-8"
    },
    {
      name: "price",
      type: "text",
      label: "Valor em créditos",
      col: "col-md-4",
    },
    {
      name: "addressName",
      type: "text",
      label: "Nome do Endereço",
      placeholder: "Ex: Minha Casa",
      col: "col-md-6",
      required: true,
    },
     {
      name: "district",
      type: "text",
      label: "Bairro",
      placeHolder: "Seu cep",
      col: "col-md-6",
      required: true,
    },
     {
      name: "road",
      type: "text",
      label: "Rua",
      placeHolder: "Ex: Rua Getúlio Vargas",
      col: "col-md-6",
      required: true,
    },
    {
       name: "number",
      type: "text",
      label: "Número",
      placeHolder: "Número do endereço",
      col: "col-md-2",
      required: true,
    },
   
    {
      name: "cep",
      type: "text",
      label: "Cep",
      placeHolder: "Seu cep",
      col: "col-md-4",
      required: true,
    },
   
    {
      name: "description",
      type: "textarea",
      label: "Descrição",
      placeholder: "Descreva o serviço prestado / solicitado"
    },
  ];
