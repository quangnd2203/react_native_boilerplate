import { View, ActivityIndicator, Text, StyleSheet } from 'react-native';

function LoginScreen() {
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
