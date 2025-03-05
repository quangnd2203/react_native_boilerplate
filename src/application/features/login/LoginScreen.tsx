import {View, ActivityIndicator, Text} from 'react-native';

function LoginScreen() {
    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <ActivityIndicator size='large' color='#0000ff' />
            <Text>This is Login Screen</Text>
        </View>
    );
}

export default LoginScreen;
