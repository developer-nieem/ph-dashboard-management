import { create } from "zustand";

type AuthState = {
    isAuthenticated: boolean;
    login: () => void;
  };
  
  const useAuthStore = create<AuthState>((set) => ({
    isAuthenticated: false,
    login: () => set({ isAuthenticated: true }),
  }));
  
  export default useAuthStore;