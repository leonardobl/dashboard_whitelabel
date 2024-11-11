import { Route } from "react-router-dom";
import { Home } from "../../Components/Pages/Home";
import { ProtectedRoute } from "../../Components/Atoms/ProtectedRoute";

export const useProtectedRoutes = () => {
  return (
    <>
      <Route
        path="/"
        element={
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        }
      />
      ;
    </>
  );
};
