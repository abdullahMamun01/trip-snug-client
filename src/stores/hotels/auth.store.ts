import { TUser } from "@/types/user.type";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

interface AuthData {
  user: TUser | null;
  token: string | null;
}

interface AuthState extends AuthData {
  login: (payload: AuthData) => void;
  logout: () => void;
}

const useAuth = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      token: null,
      login: (payload: AuthData) => set(payload),
      logout: () => set({ user: null, token: null }),
    }),
    {
      name: "auth-storage",
      storage: createJSONStorage(() => localStorage),
    },
  ),
);

export default useAuth;
