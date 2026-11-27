import { FaPencilAlt, FaRegTrashAlt } from "react-icons/fa";

export function EditTable({ onEdit, onDelete }) {
  return {
    key: "actions",
    render: (row) => {
      return (
        <div className="edit-table">
          <FaPencilAlt size={20} color="var(--bs-cyan)" onClick={() => onEdit(row)}/>
          <FaRegTrashAlt size={20} color="red" />
        </div>
      );
    },
  };
}
