import { Button, StyleSheet, Text, View } from 'react-native';
import { CounterProvider, CounterWithText, useCounter } from './components';

function CounterScreen() {
    return (
        <CounterProvider>
            <View style={styles.screenView}>
                <TextView />
                <CounterWithText />
                <ButtonCounter />
            </View>
        </CounterProvider>
    );
}

function TextView() {
    const { count } = useCounter();
    return <Text>{count}</Text>;
}

function ButtonCounter() {
    const { count, setCount } = useCounter();
    return <Button title='Increment' onPress={() => setCount(count + 1)} />;
}

const styles = StyleSheet.create({
    screenView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default CounterScreen;
