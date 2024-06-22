interface CartState {
  name: string;
}

export const useCart = () => useState<CartState[]>(() => []);

export interface AuthState {
  isAuthenticated: boolean;
}

export const useAuth = () => useState<AuthState>(() => ({ isAuthenticated: false }));

export const usePageVisitCount = () => useState<number>(() => 0);
