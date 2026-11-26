//Styles
import "./DashboardHeader.css";

//Icons
import { FiPlus, FiFilter, FiSearch } from "react-icons/fi";

//Components
import { CustomButton } from "../../CustomButtom/CustomButton";
import { useState } from "react";
import { AdFormCard } from "../../AdFormCard/AdFormCard";

export function DashboardHeader() {
  const [showAdForm, setShowAdForm] = useState(false);

  return (
    <div className="dashboard-header-container">
      {showAdForm && (
        <div className="backdrop-blur">
          <AdFormCard onClose={() => setShowAdForm(false)} />
        </div>
      )}
      <div className="dashboard-header">
        <div className="input-container">
          <input type="text" placeholder="Buscar serviços..."></input>
          <FiSearch size={24} />
        </div>
        <div className="d-flex" style={{height: "48px", gap: "16px"}}>
          <div className="filter-container">
            <FiFilter size={20} />
          </div>
          <CustomButton
            label="Adicionar Anúncio"
            Icon={FiPlus}
            handleClick={() => setShowAdForm(true)}
          />
                </div>
        </div>
    </div>
  );
}
