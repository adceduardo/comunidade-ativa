import "./CardDetails.css";
import { IoClose } from "react-icons/io5";
import { IoMdStar } from "react-icons/io";
import { CustomButton } from "../CustomButtom/CustomButton";
import { FiPlus } from "react-icons/fi";
import { IoMdSend } from "react-icons/io";
import { AnimatedCard } from "../AnimatedCard/AnimatedCard";

export function CardDetails({ onClose }) {
  return (
    <>
      <AnimatedCard className={`animated-card card-details-container`} onClose={onClose}>
        {({ requestClose }) => (
          <>
            <div className="header">
              <h3>
                Detalhes do serviço: <span>Aula de inglês intermediário</span>
              </h3>
              <IoClose size={36} color="red" onClick={requestClose} />
            </div>
            <div className="content">
              <div className="card-info">
                <div className="card-categorie">
                  <p>Teste</p>
                  <p>Aula de</p>
                  <p>Reparos</p>
                </div>
                <div className="info-description-container">
                  <p className="description">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Quidem sit impedit placeat aspernatur error dolores fugiat!
                    Repellendus inventore sed amet corporis animi ea et autem
                    quod aliquam dignissimos, a doloremque?
                  </p>
                  <p className="endereco">Local: Rua jetulio vargas 987</p>
                </div>
              </div>
              <div className="card-action">
                <div className="tags">
                  <div
                    className="tag"
                    style={{
                      color: "var(--text-highlight)",
                      fontSize: "var(--fs-xxl)",
                    }}
                  >
                    15 créditos
                  </div>
                  <div className="tag">
                    <p>
                      Autor: <span>João gomes</span>
                    </p>
                    <div className="d-flex mt-1 gap-1">
                      <p>
                        {" "}
                        Avaliação: <span>5.8</span>
                      </p>
                      <IoMdStar size={20} />
                      <span>(134 avaliações)</span>
                    </div>
                  </div>
                </div>
                <div className="container-button">
                  <CustomButton label={"Socilitar Agendamento"} Icon={FiPlus} />
                  <CustomButton
                    label={"Enviar Mensagem"}
                    variant="secondary"
                    Icon={IoMdSend}
                    iconSize="20"
                  />
                </div>
              </div>
            </div>
          </>
        )}
      </AnimatedCard>
    </>
  );
}
