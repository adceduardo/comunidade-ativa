import "./CustomButton.css"

export function CustomButton({ label, Icon, ...props }) {
  return (
    <button className="custom-button" {...props}>
      {Icon && <Icon size={24}></Icon>}
      <span>{label}</span>
    </button>
  );
}
