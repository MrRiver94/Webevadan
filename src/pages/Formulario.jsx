import { useState } from "react";
import { useNavigate } from "react-router-dom"; // Importa useNavigate
import './Formulario.css';
import axios from 'axios';

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
  });

  const navigate = useNavigate(); // Inicializa useNavigate para la redirección

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Las contraseñas no coinciden");
      return;
    }

    try {
      const response = await axios.post('https://flask-render-8y9z.onrender.com/register', formData);

      if (response.status === 201 || response.status === 200) {
        alert("Registro exitoso");
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
        });

        // Redirige al login después del registro exitoso
        navigate('/'); // Cambia la ruta a donde tienes el login
      } else {
        alert("Error en el registro");
      }
    } catch (error) {
      console.error("Error al registrar:", error);
      alert("Hubo un problema con el registro");
    }
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow-md rounded-xl">
      <h2 className="text-2xl font-bold text-center mb-4">Registro</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input type="text" name="fullName" placeholder="Nombre completo" className="w-full p-2 border rounded" onChange={handleChange} value={formData.fullName} required />
        <input type="text" name="username" placeholder="Nombre de usuario" className="w-full p-2 border rounded" onChange={handleChange} value={formData.username} required />
        <input type="email" name="email" placeholder="Correo electrónico" className="w-full p-2 border rounded" onChange={handleChange} value={formData.email} required />
        <input type="password" name="password" placeholder="Contraseña" className="w-full p-2 border rounded" onChange={handleChange} value={formData.password} required />
        <input type="password" name="confirmPassword" placeholder="Confirmar contraseña" className="w-full p-2 border rounded" onChange={handleChange} value={formData.confirmPassword} required />
        <input type="date" name="birthDate" className="w-full p-2 border rounded" onChange={handleChange} value={formData.birthDate} required />
        <select name="gender" className="w-full p-2 border rounded" onChange={handleChange} value={formData.gender} required>
          <option value="">Selecciona tu género</option>
          <option value="male">Masculino</option>
          <option value="female">Femenino</option>
          <option value="other">Otro</option>
        </select>
        <input type="text" name="country" placeholder="País" className="w-full p-2 border rounded" onChange={handleChange} value={formData.country} required />
        <input type="text" name="city" placeholder="Ciudad" className="w-full p-2 border rounded" onChange={handleChange} value={formData.city} required />
        <input type="tel" name="phone" placeholder="Teléfono" className="w-full p-2 border rounded" onChange={handleChange} value={formData.phone} required />
        <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded">Registrarse</button>
      </form>
    </div>
  );
};

export default RegisterForm;
