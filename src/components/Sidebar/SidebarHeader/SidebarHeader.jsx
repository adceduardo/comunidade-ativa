import "./SidebarHeader.css"
import logo from "../../../assets/logo.png"

export function SidebarHeader() {
  return (
    <div className="sidebar-header">
      <img src={logo}></img>
      <h1>
        Comunidade <br></br>Ativa
      </h1>
    </div>
  );
}
