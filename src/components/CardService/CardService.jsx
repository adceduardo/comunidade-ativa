//Styles
import "./CardService.css";

//Icons
import { DiYii } from "react-icons/di";

//Components
import { CustomButton } from "../CustomButtom/CustomButton";
import { FiPlus } from "react-icons/fi";

export function CardService({ handleClickDetails }) {
  return (
    <div className="card">
      <DiYii size={30} className="card-ornament" />
      <div className="card-categorie">
        <p>Teste</p>
        <p>Aula de</p>
        <p>Reparos</p>
      </div>
      <div className="card-content">
        <div className="card-presentation">
          <h3>Aula de Inglês Intermediário</h3>
          <p>
            Pratique conversação e gramática. Módulos passo a passo para alunos
            que já possuem conhecimento moderado
          </p>
        </div>
        <hr></hr>
        <p>
          João P <span>(Avaliação: 4.8)</span>
        </p>
        <p className="price">15 créditos</p>
      </div>
      <CustomButton
        label={"Detalhes"}
        style={{ width: "100%", marginTop: "auto" }}
        Icon={FiPlus}
        handleClick={handleClickDetails}
      />
    </div>
  );
}
