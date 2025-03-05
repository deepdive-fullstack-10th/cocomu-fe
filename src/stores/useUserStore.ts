import { ACCESS_TOKEN_KEY } from '@constants/api';
import { create } from 'zustand';

interface UserState {
  isLoggedIn: boolean;
  checkAuth: () => void;
}

export const useUserStore = create<UserState>((set) => ({
  isLoggedIn: false,

  checkAuth: () => {
    const token = localStorage.getItem(ACCESS_TOKEN_KEY);
    set({ isLoggedIn: !!token });
  },
}));
