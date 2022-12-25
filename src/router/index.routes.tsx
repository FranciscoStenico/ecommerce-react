import { Route, Routes, Navigate } from "react-router-dom";
import HomePage from "../views/Home";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/home" element={<HomePage />} />
      <Route path="*" element={<Navigate replace to="/home" />} />
    </Routes>
  );
};

export default AppRoutes;
