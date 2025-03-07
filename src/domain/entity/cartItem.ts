import Product from './product';

type CartItemProps = {
    product: Product;
    quantity: number;
};

class CartItem {
    product: Product;
    quantity: number;

    constructor(props: CartItemProps) {
        this.product = props.product;
        this.quantity = props.quantity;
    }

    get total() {
        return this.product.price * this.quantity;
    }
}

export default CartItem;
