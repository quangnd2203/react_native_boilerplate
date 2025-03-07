import { StyleSheet, Text, View } from 'react-native';

function Cart() {
    return (
        <View style={styles.cartContainer}>
            <Text style={styles.cartTitle}>This is your cart</Text>
            <View style={styles.cartView}>
                <Text style={styles.cartItemText}>10 items</Text>
                <Text style={styles.cartItemText}>Total: 100$</Text>
            </View>
        </View>
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
