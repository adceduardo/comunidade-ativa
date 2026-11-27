import { CustomButton } from "../CustomButtom/CustomButton";
import { CustomTable } from "../CustomTable/CustomTable";
import "./MyAdsContent.css";

export function MyAdsContent() {
  const columns = [
    {
      key: "title",
      label: "Titulo do serviço",
      render: (dataRow) => {
        const {title, description} = dataRow
        return(
          <div className="d-flex" style={{flexDirection: "column", gap: "8px"}}>
            <h4>{title}</h4>
            <p>{description}</p>
          </div>
        )
      }
    },
    {
      key: "price",
      label: "Valor",
    },
    {
      key: "local",
      label: "Localização",
    },
  ];

  const data = [
    {
      id: 1,
      title: "Teste1",
      description: "Conversação avançada e gramática",
      price: "22",
      local: "sbs",
    },
    {
      id: 2,
      title: "Teste2",
      description: "Conversação avançada e gramática",
      price: "22",
      local: "sbs",
    },
    {
      id: 3,
      title: "Teste3",
      description: "Conversação avançada e gramática",
    },
  ];

  return (
    <div className="my-ads-container">
      <header className="d-flex justify-content-between">
        <h3>Meus Anúncios</h3>
        <CustomButton label={"Adicionar Anúncio"} />
      </header>
      <div className="content">
        <CustomTable columns={columns} data={data} />
      </div>
    </div>
  );
}
