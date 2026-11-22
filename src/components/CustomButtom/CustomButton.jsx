import "./CustomButton.css"

export function CustomButton({ label, Icon, handleClick, variant = "primary", iconSize, ...props }) {
  return (
    <button className={`custom-button button-${variant}`} onClick={handleClick} {...props}>
      {Icon && <Icon size={iconSize ? iconSize : "24"}></Icon>}
      <span>{label}</span>
    </button>
  );
}
