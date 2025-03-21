import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useSelector } from 'react-redux';
import { RootState } from 'src/application/redux/store';
import { appRouters, navigate } from 'application/routes';

function Cart() {
    const cartState = useSelector((state: RootState) => state.cart);

    return (
        <TouchableOpacity
            style={styles.cartContainer}
            onPress={() => {
                navigate({
                    name: appRouters.cart,
                });
            }}>
            <Text style={styles.cartTitle}>This is your cart</Text>
            <View style={styles.cartView}>
                <Text style={styles.cartItemText}>{cartState.totalItem} items</Text>
                <Text style={styles.cartItemText}>Total: {cartState.total}$</Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    cartContainer: {
        flexDirection: 'column',
        width: '100%',
        justifyContent: 'flex-start',
        padding: 16,
        borderRadius: 10,
        backgroundColor: 'white',
        boxShadow: '1 1 10px rgba(0, 0, 0, 0.2)',
    },
    cartView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    cartTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    cartItemText: {
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default Cart;
