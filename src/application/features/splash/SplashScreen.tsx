import { useEffect } from 'react';
import { View, StyleSheet, Image } from 'react-native';

import logo from 'assets/images/logo.png';
import { navigate, appRouters } from '~/application/routes';

function SplashScreen() {
    useEffect(() => {
        setTimeout(() => {
            navigate({ name: appRouters.counter });
        }, 3000);
    });
    return (
        <View style={styles.container}>
            <Image source={logo} style={styles.imageLogo} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    imageLogo: {
        width: 200,
        height: 200,
    },
});

export default SplashScreen;
