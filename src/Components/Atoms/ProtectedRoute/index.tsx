import { Navigate } from "react-router-dom";
import { useSessionStorage } from "../../../Hooks/useSessionStorage";

export const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
  const [token] = useSessionStorage("@token");

  return token ? children : <Navigate to={`/login`} />;
};
