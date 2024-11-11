import { Route } from "react-router-dom";
import { Login } from "../../Components/Pages/Login";

export const useUnProtectedRoutes = () => {
  return (
    <>
      <Route path="/login" element={<Login />} />;
    </>
  );
};
