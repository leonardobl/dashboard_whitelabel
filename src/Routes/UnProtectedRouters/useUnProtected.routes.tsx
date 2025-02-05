import { Route } from "react-router-dom";
import { Login } from "../../Components/Pages/Login";
import { ForgotPassword } from "../../Components/Pages/ForgotPassword";

export const useUnProtectedRoutes = () => {
  return (
    <>
      <Route path="/login" element={<Login />} />;
      <Route path="/redefinir-senha" element={<ForgotPassword />} />;
    </>
  );
};
