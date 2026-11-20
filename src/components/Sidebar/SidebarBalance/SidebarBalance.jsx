//css
import "./SidebarBalance.css";
import { SlWallet } from "react-icons/sl";

export function SidebarBalance() {
  return (
    <div className="card-balance d-flex">
      <div>
        <p>Seu saldo</p>
        <strong>1,250</strong>
        <p>Créditos</p>
      </div>
      <SlWallet size={60} color="var(--text-emphasis)" />
    </div>
  );
}
