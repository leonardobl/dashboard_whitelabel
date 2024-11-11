import { BrowserRouter, Routes } from "react-router-dom";
import { useProtectedRoutes } from "./Routes/ProtectedRouters/useProtected.routes";
import { useUnProtectedRoutes } from "./Routes/UnProtectedRouters/useUnProtected.routes";

function App() {
  const ProtectedRoutes = useProtectedRoutes();
  const UnProtectedRoutes = useUnProtectedRoutes();
  return (
    <BrowserRouter>
      <Routes>
        {ProtectedRoutes}
        {UnProtectedRoutes}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
