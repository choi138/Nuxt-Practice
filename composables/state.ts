interface CartItem {
  name: string;
}

export const useCart = () => useState<CartItem[]>(() => []);
