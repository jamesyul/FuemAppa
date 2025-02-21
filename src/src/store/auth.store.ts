import { create } from 'zustand';

interface AuthState {
  user: { id: string; name: string; role: string } | null;
  login: (userData: { id: string; name: string; role: string }) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  login: (userData) => set({ user: userData }),
  logout: () => set({ user: null }),
}));