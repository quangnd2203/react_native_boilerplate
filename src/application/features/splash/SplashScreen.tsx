import { useEffect } from 'react';
import { View, ActivityIndicator, Text, StyleSheet } from 'react-native';
import { appRouters, navigate } from '~/application/routes';

function SplashScreen() {
    useEffect(() => {
        setTimeout(() => {
            navigate({
                name: appRouters.login,
                params: { name: 'Splash Screen' },
                onGoBack: (result) => {
                    console.log(result);
                },
            });
        }, 2000);
    }, []);
    return (
        <View style={styles.container}>
            <ActivityIndicator size='large' color='#0000ff' />
            <Text>Loading...</Text>
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

export default SplashScreen;
