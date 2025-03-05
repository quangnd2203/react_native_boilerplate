import { View, ActivityIndicator, Text, StyleSheet } from 'react-native';

function SplashScreen() {
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
