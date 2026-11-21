import { Sidebar } from "../components/Sidebar/Sidebar";
import { Outlet } from "react-router-dom";

export function MainLayout() {
  return (
    <div className="d-flex">
      <Sidebar />
      <Outlet />
    </div>
  );
}
