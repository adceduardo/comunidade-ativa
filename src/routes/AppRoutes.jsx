import { Route, Routes } from "react-router-dom";
import { MainLayout } from "../pages/MainLayout";
import { DashBoardContent } from "../components/DashboardContent/DashboardContent";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<DashBoardContent />}></Route>
      </Route>
    </Routes>
  );
}
