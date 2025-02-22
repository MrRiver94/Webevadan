import { useState } from "react";
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
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };



  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Las contraseñas no coinciden");
      return;
    }
    console.log("Datos enviados:", formData);
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow-md rounded-xl">
      <h2 className="text-2xl font-bold text-center mb-4">Registro</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input type="text" name="fullName" placeholder="Nombre completo" className="w-full p-2 border rounded" onChange={handleChange} required />
        <input type="text" name="username" placeholder="Nombre de usuario" className="w-full p-2 border rounded" onChange={handleChange} required />
        <input type="email" name="email" placeholder="Correo electrónico" className="w-full p-2 border rounded" onChange={handleChange} required />
        <input type="password" name="password" placeholder="Contraseña" className="w-full p-2 border rounded" onChange={handleChange} required />
        <input type="password" name="confirmPassword" placeholder="Confirmar contraseña" className="w-full p-2 border rounded" onChange={handleChange} required />
        <input type="date" name="birthDate" className="w-full p-2 border rounded" onChange={handleChange} required />
        <select name="gender" className="w-full p-2 border rounded" onChange={handleChange} required>
          <option value="">Selecciona tu género</option>
          <option value="male">Masculino</option>
          <option value="female">Femenino</option>
          <option value="other">Otro</option>
        </select>
        <input type="text" name="country" placeholder="País" className="w-full p-2 border rounded" onChange={handleChange} required />
        <input type="text" name="city" placeholder="Ciudad" className="w-full p-2 border rounded" onChange={handleChange} required />
        <input type="tel" name="phone" placeholder="Teléfono" className="w-full p-2 border rounded" onChange={handleChange} required />
        <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded">Registrarse</button>
      </form>
    </div>
  );
};

export default RegisterForm;