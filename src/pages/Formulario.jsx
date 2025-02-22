import { useState } from "react";
import { useNavigate } from "react-router-dom"; // Importa useNavigate
import './Formulario.css';

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    birthDate: "",
    gender: "",
    country: "",
    city: "",
    phone: "",
    bio: "" // Agregado campo 'bio'
  });

  const navigate = useNavigate(); // Inicializa el hook useNavigate

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("https://flask-render-8y9z.onrender.com/register", {
        method: "POST",
        moder: "cors",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();
      console.log("Respuesta del servidor:", data);

      if (response.ok) {
        alert("Registro exitoso");
        // Limpiar los campos del formulario después de un registro exitoso
        setFormData({
          fullName: "",
          username: "",
          email: "",
          password: "",
          confirmPassword: "",
          birthDate: "",
          gender: "",
          country: "",
          city: "",
          phone: "",
          bio: ""
        });

        // Redirige a la página de inicio
        navigate('/'); // Esto redirige a la ruta raíz (home)
      } else {
        alert("Error en el registro");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow-md rounded-xl">
      <h2 className="text-2xl font-bold text-center mb-4">Registro</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input 
          type="text" 
          name="fullName" 
          placeholder="Nombre completo" 
          className="w-full p-2 border rounded" 
          onChange={handleChange} 
          value={formData.fullName} 
          required 
        />
        <input 
          type="text" 
          name="username" 
          placeholder="Nombre de usuario" 
          className="w-full p-2 border rounded" 
          onChange={handleChange} 
          value={formData.username} 
          required 
        />
        <input 
          type="email" 
          name="email" 
          placeholder="Correo electrónico" 
          className="w-full p-2 border rounded" 
          onChange={handleChange} 
          value={formData.email} 
          required 
        />
        <input 
          type="password" 
          name="password" 
          placeholder="Contraseña" 
          className="w-full p-2 border rounded" 
          onChange={handleChange} 
          value={formData.password} 
          required 
        />
        <input 
          type="password" 
          name="confirmPassword" 
          placeholder="Confirmar contraseña" 
          className="w-full p-2 border rounded" 
          onChange={handleChange} 
          value={formData.confirmPassword} 
          required 
        />
        <input 
          type="date" 
          name="birthDate" 
          className="w-full p-2 border rounded" 
          onChange={handleChange} 
          value={formData.birthDate} 
          required 
        />
        <select 
          name="gender" 
          className="w-full p-2 border rounded" 
          onChange={handleChange} 
          value={formData.gender} 
          required
        >
          <option value="">Selecciona tu género</option>
          <option value="male">Masculino</option>
          <option value="female">Femenino</option>
          <option value="other">Otro</option>
        </select>
        <input 
          type="text" 
          name="country" 
          placeholder="País" 
          className="w-full p-2 border rounded" 
          onChange={handleChange} 
          value={formData.country} 
          required 
        />
        <input 
          type="text" 
          name="city" 
          placeholder="Ciudad" 
          className="w-full p-2 border rounded" 
          onChange={handleChange} 
          value={formData.city} 
          required 
        />
        <input 
          type="tel" 
          name="phone" 
          placeholder="Teléfono" 
          className="w-full p-2 border rounded" 
          onChange={handleChange} 
          value={formData.phone} 
          required 
        />
        <textarea
          name="bio"
          placeholder="Biografía"
          className="w-full p-2 border rounded"
          onChange={handleChange}
          value={formData.bio}
          rows="4"
        ></textarea>
        <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded">Registrarse</button>
      </form>
    </div>
  );
};

export default RegisterForm;
