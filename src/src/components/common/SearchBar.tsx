// src/components/common/SearchBar.tsx
import React, { useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react';
//import { FaSearch } from 'react-icons/fa6';
import { FaMagnifyingGlass } from 'react-icons/fa6';
import { usePiecesStore } from '../../store/pieces.store';
import { Piece } from '../../types/piece.types';

const SearchBar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState(1);
  const [filters, setFilters] = useState<{ department?: string; system?: string; assembly?: string }>({});
  const { pieces, setFilter } = usePiecesStore();
  const [results, setResults] = useState<Piece[]>([]);

  const openModal = () => setIsOpen(true);
  const closeModal = () => {
    setIsOpen(false);
    setStep(1);
    setFilters({});
    setResults([]);
  };

  const handleNext = (value: string) => {
    if (step === 1) {
      setFilters({ ...filters, department: value });
      setStep(2);
    } else if (step === 2) {
      setFilters({ ...filters, system: value });
      setStep(3);
    } else if (step === 3) {
      setFilters({ ...filters, assembly: value });
      // Filtrar piezas basadas en los filtros
      const filtered = pieces.filter(piece => {
        const matchesDepartment = !filters.department || piece.departmentId === filters.department;
        const matchesSystem = !filters.system || piece.code.startsWith(filters.system.split('-')[0]); // Suponiendo que el código del sistema es la primera parte (por ejemplo, "BR" para BRAKES)
        const matchesAssembly = !filters.assembly || piece.name.toLowerCase().includes(filters.assembly.toLowerCase());
        return matchesDepartment && matchesSystem && matchesAssembly;
      });
      setResults(filtered);
      setFilter(JSON.stringify(filters)); // Simula un filtro en el store (ajusta según tu lógica)
      setStep(1); // Reinicia para una nueva búsqueda
      closeModal(); // Opcional: cierra el modal después de mostrar resultados
    }
  };

  const departments = Array.from(new Set(pieces.map(piece => piece.departmentId))).map(deptId => ({
    id: deptId,
    name: pieces.find(p => p.departmentId === deptId)?.departmentName || 'Desconocido',
  }));

  const systems = Array.from(new Set(pieces.map(piece => piece.code.split('-')[0]))).map(system => ({
    id: system,
    name: system, // Simplificado, puedes mapear a nombres completos (BR -> BRAKES, SU -> SUSPENSION, etc.)
  }));

  const assemblies = Array.from(new Set(pieces.map(piece => piece.name))).map(assembly => ({
    id: assembly,
    name: assembly,
  }));

  return (
    <>
      <button
        onClick={openModal}
        className="text-gray-700 hover:text-gray-900 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
      >
        <FaMagnifyingGlass size={20} />
      </button>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10"
          onClose={closeModal}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900 mb-4"
                  >
                    Buscador de Piezas - Paso {step}
                  </Dialog.Title>
                  {step === 1 && (
                    <div>
                      <h4 className="text-md font-semibold mb-2">¿De qué departamento es la pieza?</h4>
                      <select
                        onChange={(e) => handleNext(e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 mb-2"
                      >
                        <option value="">Selecciona un departamento</option>
                        {departments.map(dept => (
                          <option key={dept.id} value={dept.id}>{dept.name}</option>
                        ))}
                      </select>
                    </div>
                  )}
                  {step === 2 && (
                    <div>
                      <h4 className="text-md font-semibold mb-2">¿A qué sistema pertenece?</h4>
                      <select
                        onChange={(e) => handleNext(e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 mb-2"
                      >
                        <option value="">Selecciona un sistema</option>
                        {systems.map(sys => (
                          <option key={sys.id} value={sys.id}>{sys.name}</option>
                        ))}
                      </select>
                    </div>
                  )}
                  {step === 3 && (
                    <div>
                      <h4 className="text-md font-semibold mb-2">¿Qué ensamblaje buscas?</h4>
                      <select
                        onChange={(e) => handleNext(e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 mb-2"
                      >
                        <option value="">Selecciona un ensamblaje</option>
                        {assemblies.map(asm => (
                          <option key={asm.id} value={asm.name}>{asm.name}</option>
                        ))}
                      </select>
                    </div>
                  )}
                  {results.length > 0 && (
                    <div className="mt-4">
                      <h4 className="text-md font-semibold mb-2">Resultados:</h4>
                      <ul className="list-disc pl-5 text-gray-700">
                        {results.map(piece => (
                          <li key={piece.id}>{piece.name} (Código: {piece.code}, Departamento: {piece.departmentName})</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default SearchBar;