import { CustomButton } from "../CustomButtom/CustomButton";
import { CustomTable } from "../CustomTable/CustomTable";
import "./MyAdsContent.css";

export function MyAdsContent() {
  const columns = [
    {
      key: "title",
      label: "Titulo do serviço",
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
