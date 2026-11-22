//styles
import { Nav } from "react-bootstrap";
import "./SidebarNav.css";

//Icons
import {
  FiSearch,
  FiGrid,
  FiCalendar,
  FiCreditCard,
  FiUser,
  FiShield,
} from "react-icons/fi";

//Components
import { NavLink } from "react-router-dom";

export function SideBarNav() {
  const navItems = [
    { label: "Explorar Anúncios", to: "/", Icon: FiSearch },
    { label: "Meus Anúncios", to: "/meus-anuncios", Icon: FiGrid },
    { label: "Agendamentos", to: "/agendamentos", Icon: FiCalendar },
    { label: "Extrato de Créditos", to: "/extrato", Icon: FiCreditCard },
    { label: "Meu Perfil", to: "/perfil", Icon: FiUser },
  ];

  return (
    <Nav className="sidebar-nav">
      {navItems.map(({ label, to, Icon }) => (
        <NavLink
          key={to}
          to={to}
          end={to === "/"}
          className={({ isActive }) =>
            `nav-link ${isActive ? "is-active" : ""}`
          }
        >
          <Icon size={20}></Icon>
          <span>{label}</span>
        </NavLink>
      ))}
      <NavLink
        key={"/admin"}
        to={"/admin"}
        end
        className={({ isActive }) => `nav-link ${isActive ? "is-active" : ""}`}
        style={{ marginTop: "auto" }}
      >
        <FiShield size={20}></FiShield>
        <span>Painel Admin</span>
      </NavLink>
    </Nav>
  );
}
