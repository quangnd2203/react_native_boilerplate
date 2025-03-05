import {View, ActivityIndicator, Text} from 'react-native';

function SplashScreen() {
    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <ActivityIndicator size='large' color='#0000ff' />
            <Text>Loading...</Text>
        </View>
    );
}

export default SplashScreen;
