import { Routes, Route } from "react-router-dom";
import Inicioapp from "./pages/Inicioapp";
import Perfil from "./pages/Perfil";
import Home from "./pages/Home";
import PlusSquare from "./pages/PlusSquare";
import Search from "./pages/Search";
import NotFound from "./pages/NotFound";
import Navbar from "./components/Navbar";
import Icon from "./components/Icon";

function App() {
  return (
    <>
      <Icon />
      <Navbar />
      <Routes>
        <Route path="/" element={<Inicioapp />} />
        <Route path="/perfil" element={<Perfil />} />
        <Route path="/home" element={<Home />} />
        <Route path="/plussquare" element={<PlusSquare />} />
        <Route path="/search" element={<Search />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;