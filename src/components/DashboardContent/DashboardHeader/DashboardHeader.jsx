import "./DashboardHeader.css";

import { FiFilter } from "react-icons/fi";
import { FiSearch } from "react-icons/fi";
import { CustomButton } from "../../CustomButtom/CustomButton";
import { FiPlus } from "react-icons/fi";

export function DashboardHeader() {
  return (
    <div className="dashboard-header-container">
      <div className="dashboard-header">
        <div className="input-container">
          <input type="text" placeholder="Buscar serviços..."></input>
          <FiSearch size={24} />
        </div>
        <div className="filter-container">
          <FiFilter size={20} />
        </div>
        <CustomButton label="Adicionar Anúncio" Icon={FiPlus} />
      </div>
    </div>
  );
}
