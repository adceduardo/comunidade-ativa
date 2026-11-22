import { Route, Routes } from "react-router-dom";
import { MainLayout } from "../pages/MainLayout";
import { Dashboard } from "../pages/Dashboard";
import { MyAds } from "../pages/MyAds";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Dashboard />}></Route>
        <Route path={"meus-anuncios"} element={<MyAds />}></Route>
      </Route>
    </Routes>
  );
}
