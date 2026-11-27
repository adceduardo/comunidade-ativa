import { useState } from "react";
import { CustomButton } from "../CustomButtom/CustomButton";
import { CustomTable } from "../CustomTable/CustomTable";
import "./MyAdsContent.css";
import { EditTable } from "../CustomTable/editTable/editTable";
import { AdFormCard } from "../AdFormCard/AdFormCard";
import { FiPlus } from "react-icons/fi";

export function MyAdsContent() {
  const dataSample = [
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
      description: "Descrição do teste 2",
      price: "22",
      local: "sbs",
    },
    {
      id: 3,
      title: "Teste3",
      description: "Conversação avançada e gramática",
    },
  ];

  const [data, setData] = useState(dataSample);
  const [selectedAd, setSelectedAd] = useState(null);
  const [showAdForm, setShowAdForm] = useState(false);
  const [modeForm, setModeForm] = useState("add");

  const onEdit = (dataEdit) => {
    setModeForm("edit");
    setShowAdForm(true);
    setSelectedAd(dataEdit);
  };

  const columns = [
    {
      key: "title",
      label: "Titulo do serviço",
      render: (dataRow) => {
        const { title, description } = dataRow;
        return (
          <div className="d-flex flex-column gap-2">
            <h4>{title}</h4>
            <p>{description}</p>
          </div>
        );
      },
    },
    {
      key: "price",
      label: "Valor",
    },
    {
      key: "local",
      label: "Localização",
    },
    EditTable({ onEdit }),
  ];

  return (
    <div className="my-ads-container">
      {showAdForm && (
        <div className="backdrop-blur">
          <AdFormCard
            onClose={() => setShowAdForm(false)}
            mode={modeForm}
            dataForm={selectedAd}
          />
        </div>
      )}
      <header className="d-flex justify-content-between">
        <h3>Meus Anúncios</h3>
        <CustomButton
          label={"Adicionar Anúncio"}
          handleClick={() => {
            setModeForm("add");
            setShowAdForm(true);
          }}
          Icon={FiPlus}
        />
      </header>
      <div className="content">
        <CustomTable columns={columns} data={data} />
      </div>
    </div>
  );
}
