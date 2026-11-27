import "./CustomTable.css";
import { TbFaceIdError } from "react-icons/tb";

export function CustomTable({ columns = [], data = [], rowKey = "id" }) {
  return (
    <div className="table-responsive ">
      {data.length === 0 ? (
        <div className="empty-table">
          <h1>Sem dados para visualização</h1>
          <TbFaceIdError size={50} />
        </div>
      ) : (
        <table className="table table-striped align-middle">
          <thead>
            <tr>
              {columns.map(({ key, label }) => (
                <th key={key}>{label}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((row) => (
              <tr key={row[rowKey]}>
                {columns.map(({ key, render }) => (
                  <td key={key}>{render ? render(row) : row[key]}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
