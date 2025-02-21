import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate, Link } from 'react-router-dom';
import { useAuthStore } from '../store/auth.store';
import axios from 'axios';

interface LoginFormData {
  email: string;
  password: string;
}

const Login: React.FC = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<LoginFormData>();
  const navigate = useNavigate();
  const { login } = useAuthStore();

  const onSubmit = async (data: LoginFormData) => {
    try {
      const response = await axios.post('/auth/login', data); // Endpoint del backend
      const { token, user } = response.data;
      localStorage.setItem('token', token); // Guardar token para autenticación
      login(user); // Guardar usuario en Zustand
      navigate('/'); // Redirigir a la página principal
    } catch (error) {
      console.error('Error al iniciar sesión:', error);
      alert('Credenciales incorrectas o error en el servidor');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4 text-center">Iniciar Sesión</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Correo Electrónico
            </label>
            <input
              type="email"
              id="email"
              {...register('email', { required: 'El correo es requerido', pattern: { value: /^\S+@\S+$/i, message: 'Correo inválido' } })}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Contraseña
            </label>
            <input
              type="password"
              id="password"
              {...register('password', { required: 'La contraseña es requerida' })}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
            {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
          </div>
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700"
          >
            Iniciar Sesión
          </button>
        </form>
        <p className="mt-4 text-center text-sm text-gray-600">
          ¿No tienes cuenta?{' '}
          <Link to="/signup" className="text-indigo-600 hover:text-indigo-500">
            Regístrate
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;