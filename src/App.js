import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    console.log("Usuario:", username, "Contraseña:", password);
    // Aquí iría la lógica para autenticar al usuario
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-2xl shadow-lg w-80">
        <h2 className="text-2xl font-bold text-center mb-4">Iniciar Sesión</h2>
        <Input
          type="text"
          placeholder="Usuario"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="mb-2"
        />
        <Input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="mb-4"
        />
        <Button onClick={handleLogin} className="w-full mb-2">Conectar</Button>
        <div className="text-center text-sm text-gray-600">
          <Link to="/forgot-password" className="text-blue-500 hover:underline">¿Olvidó su contraseña?</Link>
          <span className="mx-2">|</span>
          <Link to="/register" className="text-blue-500 hover:underline">Crear usuario</Link>
        </div>
      </div>
    </div>
  );
}

export default App;

