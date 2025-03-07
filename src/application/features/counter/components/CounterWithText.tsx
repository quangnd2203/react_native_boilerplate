import { Text, View } from 'react-native';
import { useCounter } from './CounterProvider';

function CounterWithText() {
    const { count } = useCounter();
    return (
        <View>
            <Text>Counter with text {count}</Text>
        </View>
    );
}

export default CounterWithText;
