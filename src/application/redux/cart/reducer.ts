import { createAction, createReducer, PayloadAction } from '@reduxjs/toolkit';
import { CartItem, Product } from 'src/domain/entity';
import CartState, { initialCartState } from './state';

export const add = createAction<Product>('cart/add');

// productId: number
export const remove = createAction<number>('cart/remove');

const cartReducer = createReducer(initialCartState, (builder) => {
    builder.addCase(add, onAddCartItem);
});

function onAddCartItem(state: CartState, action: PayloadAction<Product>) {
    const newCartItem: CartItem = {
        product: action.payload,
        quantity: 1,
    };

    const items = [...state.items];

    const index = items.findIndex((item) => item.product.id === newCartItem.product.id);

    if (index === -1) {
        items.push(newCartItem);
    } else {
        items[index] = {
            product: items[index].product,
            quantity: items[index].quantity + 1,
        };
    }

    return {
        ...state,
        items,
        totalItem: items.reduce((acc, item) => acc + item.quantity, 0),
        total: items.reduce((acc, item) => acc + item.product.price * item.quantity, 0),
    };
}

export default cartReducer;
