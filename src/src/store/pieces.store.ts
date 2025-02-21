import { create } from 'zustand';
import { Piece } from '../types/piece.types';

interface PiecesState {
  pieces: Piece[];
  filteredPieces: Piece[];
  fetchPieces: () => void;
  setFilter: (term: string) => void;
  setDepartmentFilter: (departmentId: string) => void; // Para jefes e integrantes
}

export const usePiecesStore = create<PiecesState>((set) => ({
  pieces: [],
  filteredPieces: [],
  fetchPieces: async () => {
    // Simulación local (reemplaza con axios al backend)
    const mockPieces: Piece[] = [
      { id: '1', code: 'P001', name: 'Chasis de carbono', departmentId: 'd1', quantity: 1, price: 5000, report: 'Informe chasis.pdf' },
      { id: '2', code: 'P002', name: 'Motor V8', departmentId: 'd2', quantity: 2, price: 10000, report: 'Informe motor.pdf' },
      // Añade más piezas
    ];
    set({ pieces: mockPieces, filteredPieces: mockPieces });
  },
  setFilter: (term) => set((state) => ({
    filteredPieces: state.pieces.filter(piece =>
      piece.code.toLowerCase().includes(term.toLowerCase()) ||
      piece.name.toLowerCase().includes(term.toLowerCase())
    ),
  })),
  setDepartmentFilter: (departmentId) => set((state) => ({
    filteredPieces: state.pieces.filter(piece => piece.departmentId === departmentId),
  })),
}));