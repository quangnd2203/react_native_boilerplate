import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Product, productMock } from 'src/domain/entity';
import { Cart } from './components';
import { useDispatch } from 'react-redux';
import { add } from 'src/application/redux/cart';

function ProductScreen() {
    return (
        <SafeAreaView style={styles.safeAreaView}>
            <Text style={styles.productListTitle}>Product List</Text>
            <ProductList />
            <Cart />
        </SafeAreaView>
    );
}

function ProductList() {
    const products = productMock;
    return (
        <ScrollView style={styles.productListScrollView}>
            {products.map((product) => (
                <ProductItem key={product.id} product={product} />
            ))}
        </ScrollView>
    );
}

type ProductItemProps = {
    product: Product;
};

function ProductItem(props: ProductItemProps) {
    const product = props.product;
    const dispatch = useDispatch();
    return (
        <TouchableOpacity
            onPress={() => {
                dispatch(add(product));
            }}>
            <View style={styles.productItemView}>
                <Text style={[styles.productItemText, styles.productItemTextTitle]}>{product.name}</Text>
                <Text style={[styles.productItemText, styles.productItemTextPrice]}>{product.price}đ</Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    safeAreaView: {
        flex: 1,
        alignItems: 'center',
        padding: 20,
    },
    productListTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'red',
    },
    productListScrollView: {
        flex: 1,
        width: '100%',
        padding: 16,
    },
    productItemView: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        marginVertical: 10,
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 10,
    },
    productItemText: {
        fontSize: 16,
    },
    productItemTextTitle: {
        flex: 1,
        marginRight: 10,
        fontWeight: 'bold',
    },
    productItemTextPrice: {
        color: 'green',
    },
});

export default ProductScreen;
