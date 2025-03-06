import { useRoute } from '@react-navigation/native';
import { useEffect } from 'react';
import { View, ActivityIndicator, Text, StyleSheet } from 'react-native';
import { goBack } from '~/application/routes';

function LoginScreen() {
    const route = useRoute();

    console.log(`This is Login Screen ${route.params}`);

    useEffect(() => {
        setTimeout(() => {
            goBack({ result: 'Go back to Splash Screen' });
        }, 2000);
    }, []);

    return (
        <View style={styles.container}>
            <ActivityIndicator size='large' color='#0000ff' />
            <Text>This is Login Screen</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default LoginScreen;
