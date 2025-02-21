import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '../store/auth.store';
import axios from 'axios';
import { getDepartments, createDepartment, updateDepartment, deleteDepartment } from '../services/departments.service';
import { FaEdit, FaTrash } from 'react-icons/fa'; // Instala react-icons si no lo tienes

interface Department {
  id: string;
  name: string;
}

const Departments: React.FC = () => {
  const [departments, setDepartments] = useState<Department[]>([]);
  const [newDepartment, setNewDepartment] = useState<string>('');
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editingName, setEditingName] = useState<string>('');
  const { user } = useAuthStore();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user || user.role !== 'admin') {
      navigate('/login'); // Redirige si no es admin
      return;
    }
    fetchDepartments();
  }, [user, navigate]);

  const fetchDepartments = async () => {
    try {
      const response = await axios.get('/departments'); // Endpoint del backend
      setDepartments(response.data);
    } catch (error) {
      console.error('Error al obtener departamentos:', error);
      alert('Error al cargar los departamentos');
    }
  };

  const handleCreate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newDepartment.trim()) return;
    try {
      await axios.post('/departments', { name: newDepartment });
      setNewDepartment('');
      fetchDepartments();
    } catch (error) {
      console.error('Error al crear departamento:', error);
      alert('Error al crear el departamento');
    }
  };

  const handleUpdate = async (id: string) => {
    if (!editingName.trim()) return;
    try {
      await axios.put(`/departments/${id}`, { name: editingName });
      setEditingId(null);
      setEditingName('');
      fetchDepartments();
    } catch (error) {
      console.error('Error al actualizar departamento:', error);
      alert('Error al actualizar el departamento');
    }
  };

  const handleDelete = async (id: string) => {
    if (window.confirm('¿Estás seguro de eliminar este departamento?')) {
      try {
        await axios.delete(`/departments/${id}`);
        fetchDepartments();
      } catch (error) {
        console.error('Error al eliminar departamento:', error);
        alert('Error al eliminar el departamento');
      }
    }
  };

  if (!user || user.role !== 'admin') {
    return null; // O muestra un mensaje de acceso denegado
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-6 text-gray-900">Gestionar Departamentos</h1>

      {/* Formulario para crear departamento */}
      <form onSubmit={handleCreate} className="mb-6 max-w-md">
        <div className="flex space-x-2">
          <input
            type="text"
            value={newDepartment}
            onChange={(e) => setNewDepartment(e.target.value)}
            placeholder="Nombre del departamento"
            className="flex-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          />
          <button
            type="submit"
            className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700"
          >
            Crear
          </button>
        </div>
      </form>

      {/* Lista de departamentos */}
      <div className="bg-white p-4 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4 text-gray-800">Lista de Departamentos</h2>
        {departments.length === 0 ? (
          <p className="text-gray-500">No hay departamentos registrados.</p>
        ) : (
          <ul className="space-y-4">
            {departments.map((dept) => (
              <li key={dept.id} className="flex items-center justify-between p-2 border-b border-gray-200">
                {editingId === dept.id ? (
                  <div className="flex-1 flex space-x-2">
                    <input
                      type="text"
                      value={editingName}
                      onChange={(e) => setEditingName(e.target.value)}
                      className="flex-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                    />
                    <button
                      onClick={() => handleUpdate(dept.id)}
                      className="bg-green-600 text-white px-3 py-1 rounded-md hover:bg-green-700"
                    >
                      Guardar
                    </button>
                    <button
                      onClick={() => setEditingId(null)}
                      className="bg-gray-500 text-white px-3 py-1 rounded-md hover:bg-gray-600"
                    >
                      Cancelar
                    </button>
                  </div>
                ) : (
                  <div className="flex-1">
                    <span className="text-gray-800">{dept.name}</span>
                  </div>
                )}
                {editingId !== dept.id && user.role === 'admin' && (
                  <div className="flex space-x-2">
                    <button
                      onClick={() => {
                        setEditingId(dept.id);
                        setEditingName(dept.name);
                      }}
                      className="text-indigo-600 hover:text-indigo-800"
                    >
                      <FaEdit />
                    </button>
                    <button
                      onClick={() => handleDelete(dept.id)}
                      className="text-red-600 hover:text-red-800"
                    >
                      <FaTrash />
                    </button>
                  </div>
                )}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Departments;