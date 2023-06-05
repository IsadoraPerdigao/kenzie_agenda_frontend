import { Route, Routes } from "react-router-dom";
import { Login } from "../pages/Login";
import { Register } from "../pages/Register";
import { Dashboard } from "../pages/Dashboard";
import { DashboardContact } from "../pages/DashboardContact";

export const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/dashboard">
        <Route path="" element={<Dashboard />} />
        <Route path=":id" element={<DashboardContact />} />
      </Route>
    </Routes>
  );
};
