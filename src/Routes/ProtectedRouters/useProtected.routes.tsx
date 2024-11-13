import { Route } from "react-router-dom";
import { Home } from "../../Components/Pages/Home";
import { BasicData } from "../../Components/Pages/BasicData";
// import { ProtectedRoute } from "../../Components/Atoms/ProtectedRoute";

export const useProtectedRoutes = () => {
  return (
    <>
      <Route
        path="/"
        element={
          // <ProtectedRoute>
          <Home />
          // </ProtectedRoute>
        }
      />

      <Route
        path="/dados-basicos"
        element={
          // <ProtectedRoute>
          <BasicData />
          // </ProtectedRoute>
        }
      />
    </>
  );
};
