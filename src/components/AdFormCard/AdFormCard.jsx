//Styles
import "./AdFormCard.css";

//Icones
import { IoClose } from "react-icons/io5";
import { FiPlus } from "react-icons/fi";

//Components
import { AnimatedCard } from "../AnimatedCard/AnimatedCard";
import { CustomButton } from "../CustomButtom/CustomButton";

//Schemas
import { AdInputsSchema } from "../../schemas/AdInputsSchema";
import { AdValidateSchema } from "../../schemas/ValidateSchema";
import { useState } from "react";

export function AdFormCard({ mode = "add", onClose }) {
  const INITIAL_FORM = Object.fromEntries(
    AdInputsSchema.map((input) => [input.name, ""]),
  );

  const [formData, setFormData] = useState(INITIAL_FORM);
  const [errors, setErrors] = useState([]);

  const title =
    mode === "add" ? "Adicionar" : mode === "edit" ? "Editar" : "Deletar";

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: undefined,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const validData = await AdValidateSchema.validate(formData, {
        abortEarly: false,
      });
      setErrors({});
      console.log("Dados válidos:", validData);
    } catch (err) {
      if (err.name === "ValidationError") {
        const formattedErrors = {};
        err.inner.forEach((error) => {
          if (error.path && !formattedErrors[error.path]) {
            formattedErrors[error.path] = error.message;
          }
        });
        setErrors(formattedErrors);
      }
    }
  };

  return (
    <>
      <AnimatedCard className="animated-card form-container" onClose={onClose}>
        {({ requestClose }) => (
          <>
            <div className="header d-flex p-2">
              <h3>{title} Anúncio</h3>
              <IoClose size={36} color="red" onClick={requestClose} />
            </div>
            <div className="body">
              <form className="row p-0 m-0 d-flex gx-3 gy-4">
                {AdInputsSchema.map(
                  ({
                    name,
                    label,
                    placeholder,
                    required,
                    col = "col-12",
                    type,
                  }) => {
                    const errorMessage = errors[name];

                    return (
                      <div key={name} className={`input-container ${col}`}>
                        <label htmlFor={name} className="form-label">
                          {label}
                          {required && (
                            <span
                              style={{ fontSize: "var(--fs-xl)" }}
                              className="text-danger ms-1"
                            >
                              *
                            </span>
                          )}
                        </label>

                        {type === "text" && (
                          <input
                            id={name}
                            name={name}
                            placeholder={placeholder}
                            value={formData[name] ?? ""}
                            onChange={handleInputChange}
                          ></input>
                        )}

                        {type === "textarea" && (
                          <textarea
                            name={name}
                            placeholder={placeholder}
                            value={formData[name] ?? ""}
                          ></textarea>
                        )}

                        {errorMessage && (
                          <small className="text-danger d-block mt-1">
                            {errorMessage}
                          </small>
                        )}
                      </div>
                    );
                  },
                )}
              </form>
              <CustomButton
                style={{
                  marginLeft: "auto",
                  marginTop: "24px",
                  marginBottom: "8px",
                }}
                label={title}
                Icon={FiPlus}
                handleClick={handleSubmit}
              />
            </div>
          </>
        )}
      </AnimatedCard>
    </>
  );
}
