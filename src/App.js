import { Routes, Route } from "react-router-dom";
import Inicioapp from "./pages/Inicioapp";
import Perfil from "./pages/Perfil";
import NotFound from "./pages/NotFound";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Inicioapp />} />
        <Route path="/perfil" element={<Perfil />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;