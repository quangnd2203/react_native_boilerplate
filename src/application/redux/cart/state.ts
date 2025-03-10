import { CartItem } from '~/domain/entity';

interface CartState {
    items: CartItem[];
    totalItem: number;
    total: number;
}

export const initialCartState: CartState = {
    items: [],
    totalItem: 0,
    total: 0,
};

export default CartState;
